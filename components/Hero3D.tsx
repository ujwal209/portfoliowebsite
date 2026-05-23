"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type StackMode = "ai" | "ds" | "web";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stackMode, setStackMode] = useState<StackMode>("ai");
  const [isHovered, setIsHovered] = useState(false);
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    morph: 0.15,
    speed: 1.0,
    activeNodes: 1200,
    systemLoad: "OPTIMAL"
  });

  const modeRef = useRef<StackMode>(stackMode);

  // Sync state ref for render loop access
  useEffect(() => {
    modeRef.current = stackMode;
  }, [stackMode]);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = containerRef.current.clientWidth || 400;
    let height = containerRef.current.clientHeight || 450;

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8.5;

    // Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    containerRef.current.appendChild(renderer.domElement);

    // Geometries
    const geometries = {
      ai: new THREE.IcosahedronGeometry(2.0, 5), // Spiky blob
      ds: new THREE.TorusKnotGeometry(1.2, 0.38, 100, 16), // Technical dataset knot
      web: new THREE.BoxGeometry(2.0, 2.0, 2.0, 4, 4, 4), // Structured block
    };

    // Duplicate positions attribute for AI organic waves displacement calculation
    const originalAiPositions = geometries.ai.attributes.position.clone();
    geometries.ai.setAttribute("originalPosition", originalAiPositions);

    const originalWebPositions = geometries.web.attributes.position.clone();
    geometries.web.setAttribute("originalPosition", originalWebPositions);

    // Materials
    // 1. Glassmorphic Core
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd946ef, // Magenta base
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.9,
      ior: 1.5,
      thickness: 1.6,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.95
    });

    // 2. Wireframe Overlay
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7, // purple
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    // Mesh
    const coreMesh = new THREE.Mesh(geometries.ai, glassMaterial);
    const wireMesh = new THREE.Mesh(geometries.ai.clone(), wireMaterial);

    const group = new THREE.Group();
    group.add(coreMesh);
    group.add(wireMesh);
    scene.add(group);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Color lights rotating around
    const cyanLight = new THREE.PointLight(0x06b6d4, 15, 40);
    cyanLight.position.set(4, 4, 4);
    scene.add(cyanLight);

    const magentaLight = new THREE.PointLight(0xd946ef, 15, 40);
    magentaLight.position.set(-4, -4, 4);
    scene.add(magentaLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 10, 40);
    amberLight.position.set(0, 4, -4);
    scene.add(amberLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // Drag tracking variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.005, y: 0.005 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      group.rotation.y += deltaMove.x * 0.007;
      group.rotation.x += deltaMove.y * 0.007;

      rotationVelocity = {
        x: deltaMove.y * 0.002,
        y: deltaMove.x * 0.002,
      };
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = containerRef.current;
    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Animation & State Loop
    const clock = new THREE.Clock();
    let currentGeoMode: StackMode = "ai";

    let lastFpsUpdate = 0;
    let frameCount = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const currentMode = modeRef.current;

      // Telemetry computations
      frameCount++;
      if (elapsed - lastFpsUpdate >= 1.0) {
        setTelemetry(prev => ({
          ...prev,
          fps: Math.round(frameCount / (elapsed - lastFpsUpdate)),
          morph: currentMode === "ai" ? 0.28 : currentMode === "ds" ? 0.12 : 0.05,
          speed: isHovered ? 2.4 : 1.0,
          activeNodes: currentMode === "ai" ? 1200 : currentMode === "ds" ? 2400 : 800,
          systemLoad: isDragging ? "INTERACTIVE" : "OPTIMAL"
        }));
        frameCount = 0;
        lastFpsUpdate = elapsed;
      }

      // Check for geometry transition trigger
      if (currentMode !== currentGeoMode) {
        currentGeoMode = currentMode;
        
        // Swap geometries
        const targetGeo = geometries[currentMode];
        coreMesh.geometry = targetGeo;
        wireMesh.geometry = targetGeo.clone();
      }

      // 1. AI Stack Mode Animations: High-frequency morphing waves
      if (currentMode === "ai") {
        const positions = coreMesh.geometry.attributes.position;
        const origPositions = coreMesh.geometry.attributes.originalPosition;
        if (positions && origPositions) {
          const posArr = positions.array as Float32Array;
          const origArr = origPositions.array as Float32Array;
          const morphSpeed = elapsed * (isHovered ? 2.4 : 1.0);
          
          for (let i = 0; i < posArr.length; i += 3) {
            const x = origArr[i];
            const y = origArr[i + 1];
            const z = origArr[i + 2];
            const len = Math.sqrt(x*x + y*y + z*z);
            
            const nx = x / len;
            const ny = y / len;
            const nz = z / len;

            const w1 = Math.sin(x * 2.2 + morphSpeed) * 0.5;
            const w2 = Math.cos(y * 2.5 - morphSpeed * 0.8) * 0.5;
            const w3 = Math.sin(z * 1.8 + morphSpeed * 1.3) * 0.4;
            
            const disp = (w1 + w2 + w3) * (isHovered ? 0.38 : 0.18);
            posArr[i] = x + nx * disp;
            posArr[i + 1] = y + ny * disp;
            posArr[i + 2] = z + nz * disp;
          }
          positions.needsUpdate = true;
          wireMesh.geometry.copy(coreMesh.geometry);
        }
      } 
      // 2. Data Science State: Smooth expanding pulsate knot
      else if (currentMode === "ds") {
        const scaleVal = 1.0 + Math.sin(elapsed * 2.0) * 0.08;
        coreMesh.scale.set(scaleVal, scaleVal, scaleVal);
        wireMesh.scale.copy(coreMesh.scale);
      } 
      // 3. Web Dev State: Box vertex jittering
      else if (currentMode === "web") {
        const positions = coreMesh.geometry.attributes.position;
        const origPositions = coreMesh.geometry.attributes.originalPosition;
        if (positions && origPositions) {
          const posArr = positions.array as Float32Array;
          const origArr = origPositions.array as Float32Array;
          const frequency = elapsed * (isHovered ? 4.0 : 2.0);

          for (let i = 0; i < posArr.length; i += 3) {
            const x = origArr[i];
            const y = origArr[i + 1];
            const z = origArr[i + 2];

            const nx = Math.sign(x);
            const ny = Math.sign(y);
            const nz = Math.sign(z);

            const jitter = Math.sin(nx * 10 + frequency) * Math.cos(ny * 10 + frequency) * 0.08;
            posArr[i] = x + nx * jitter;
            posArr[i + 1] = y + ny * jitter;
            posArr[i + 2] = z + nz * jitter;
          }
          positions.needsUpdate = true;
          wireMesh.geometry.copy(coreMesh.geometry);
        }
      }

      // Material properties interpolation based on active mode
      const isDark = document.documentElement.classList.contains("dark");
      if (currentMode === "ai") {
        glassMaterial.color.setHex(isDark ? 0xd946ef : 0xc084fc); // Magenta
        wireMaterial.color.setHex(isDark ? 0xa855f7 : 0x7c3aed);  // Purple
        wireMaterial.opacity = isDark ? 0.35 : 0.15;
      } else if (currentMode === "ds") {
        glassMaterial.color.setHex(isDark ? 0xf59e0b : 0xfbbf24); // Amber Gold
        wireMaterial.color.setHex(isDark ? 0xd97706 : 0xb45309);  // Golden Brown
        wireMaterial.opacity = isDark ? 0.45 : 0.2;
      } else if (currentMode === "web") {
        glassMaterial.color.setHex(isDark ? 0x06b6d4 : 0x0284c7); // Cyan
        wireMaterial.color.setHex(isDark ? 0x3b82f6 : 0x2563eb);  // Blue
        wireMaterial.opacity = isDark ? 0.35 : 0.15;
      }

      // Lights rotation kinetics
      const lightTime = elapsed * 0.65;
      cyanLight.position.x = Math.sin(lightTime) * 6;
      cyanLight.position.z = Math.cos(lightTime) * 6;
      
      magentaLight.position.x = Math.sin(lightTime + Math.PI) * 6;
      magentaLight.position.z = Math.cos(lightTime + Math.PI) * 6;
      
      amberLight.position.y = Math.sin(lightTime * 1.5) * 5;

      // Handle inertia on dragging release
      if (!isDragging) {
        group.rotation.x += rotationVelocity.x;
        group.rotation.y += rotationVelocity.y;
        
        rotationVelocity.x *= 0.96;
        rotationVelocity.y *= 0.96;

        // Base constant spin rotation
        group.rotation.y += 0.004;
        group.rotation.z += 0.002;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize tracking handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometries.ai.dispose();
      geometries.ds.dispose();
      geometries.web.dispose();
      glassMaterial.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, [isHovered]);

  const telemetryDetails = {
    ai: {
      stack: "Python / TensorFlow / PyTorch",
      engine: "Neural Core V2.8",
      status: "Analyzing Neural Nodes"
    },
    ds: {
      stack: "Python / Pandas / Scikit-Learn",
      engine: "Fibonacci Aggregation",
      status: "Optimizing Matrices"
    },
    web: {
      stack: "TypeScript / Next.js / React 19",
      engine: "Dynamic Glassmorphic HUD",
      status: "Serving Web Application"
    }
  };

  const currentModeDetails = telemetryDetails[stackMode];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] border border-neutral-200/20 dark:border-white/5 bg-white/5 dark:bg-black/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
    >
      {/* 3D HUD OVERLAY PANELS */}
      
      {/* Top-Left Panel: System Telemetry */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-wide text-neutral-400 dark:text-neutral-500 bg-neutral-900/10 dark:bg-black/30 backdrop-blur-md p-4 rounded-xl border border-neutral-200/10 dark:border-white/5 pointer-events-none select-none space-y-1">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-black dark:text-white font-bold uppercase">Telemetry Active</span>
        </div>
        <div className="pt-2">CORE.FPS: <span className="text-emerald-500 font-bold">{telemetry.fps} Hz</span></div>
        <div>SYS.LOAD: <span className="text-black dark:text-neutral-300">{telemetry.systemLoad}</span></div>
        <div>DATA_NODES: <span className="text-black dark:text-neutral-300">{telemetry.activeNodes} pts</span></div>
        <div>MORPH_MAG: <span className="text-black dark:text-neutral-300">{telemetry.morph.toFixed(2)}</span></div>
      </div>

      {/* Top-Right Panel: Stack Selector Buttons */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
        <button
          onClick={() => setStackMode("ai")}
          className={`px-3 py-1.5 rounded-lg font-mono text-[10px] tracking-wider uppercase border text-left transition-all duration-300 min-w-[110px] ${
            stackMode === "ai"
              ? "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.3)] font-semibold"
              : "bg-neutral-100/50 dark:bg-black/40 border-neutral-200/40 dark:border-white/5 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
          }`}
        >
          [ AI / ML ]
        </button>
        <button
          onClick={() => setStackMode("ds")}
          className={`px-3 py-1.5 rounded-lg font-mono text-[10px] tracking-wider uppercase border text-left transition-all duration-300 min-w-[110px] ${
            stackMode === "ds"
              ? "bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.3)] font-semibold"
              : "bg-neutral-100/50 dark:bg-black/40 border-neutral-200/40 dark:border-white/5 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
          }`}
        >
          [ Data Sci ]
        </button>
        <button
          onClick={() => setStackMode("web")}
          className={`px-3 py-1.5 rounded-lg font-mono text-[10px] tracking-wider uppercase border text-left transition-all duration-300 min-w-[110px] ${
            stackMode === "web"
              ? "bg-cyan-500/20 border-cyan-500 text-cyan-600 dark:text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-semibold"
              : "bg-neutral-100/50 dark:bg-black/40 border-neutral-200/40 dark:border-white/5 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
          }`}
        >
          [ Full-Stack ]
        </button>
      </div>

      {/* Bottom Panel: Interactive Details Readout */}
      <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] tracking-wider text-neutral-400 dark:text-neutral-500 bg-neutral-900/10 dark:bg-black/30 backdrop-blur-md p-4 rounded-xl border border-neutral-200/10 dark:border-white/5 pointer-events-none select-none flex justify-between items-center">
        <div>
          <div className="text-[9px] uppercase text-neutral-500 dark:text-neutral-600">Engine Stack</div>
          <div className="text-black dark:text-neutral-200 font-bold">{currentModeDetails.stack}</div>
        </div>
        <div className="text-right">
          <div className="text-[9px] uppercase text-neutral-500 dark:text-neutral-600">Active Query</div>
          <div className="text-black dark:text-neutral-200 font-bold">{currentModeDetails.status}</div>
        </div>
      </div>
    </div>
  );
}
