"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  theme?: string;
}

export default function ThreeBackground({ theme = "light" }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial | null>(null);

  // Dynamic theme updates
  useEffect(() => {
    if (!sceneRef.current || !materialRef.current) return;

    const isDark = theme === "dark";
    const bgColor = isDark ? 0x000000 : 0xffffff;
    const gridColor = isDark ? 0xa78bfa : 0x7c3aed;

    sceneRef.current.background = new THREE.Color(bgColor);
    if (sceneRef.current.fog) {
      sceneRef.current.fog.color = new THREE.Color(bgColor);
    }
    materialRef.current.color = new THREE.Color(gridColor);
    materialRef.current.opacity = isDark ? 0.06 : 0.05;
  }, [theme]);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Create Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const isDark = theme === "dark";
    const bgColor = isDark ? 0x000000 : 0xffffff;
    const gridColor = isDark ? 0xa78bfa : 0x7c3aed;

    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.016);

    // Create Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 58;
    camera.position.y = 9;
    camera.lookAt(0, -4, 0);

    // Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Create Grid Geometry (Plane)
    const gridWidth = 190;
    const gridHeight = 190;
    const gridSegments = 60;
    const geometry = new THREE.PlaneGeometry(gridWidth, gridHeight, gridSegments, gridSegments);
    const origPositions = geometry.attributes.position.clone();

    // Material
    const material = new THREE.MeshBasicMaterial({
      color: gridColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.06 : 0.05,
    });
    materialRef.current = material;

    const grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = -Math.PI / 2.18;
    grid.position.y = -14;
    scene.add(grid);

    // Track scroll
    let scrollY = 0;
    let targetScrollY = 0;
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX - width / 2) / (width / 2);
      targetMouseY = (event.clientY - height / 2) / (height / 2);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      
      const positionAttr = geometry.attributes.position;
      const posArr = positionAttr.array as Float32Array;
      const origArr = origPositions.array as Float32Array;

      for (let i = 0; i < posArr.length; i += 3) {
        const x = origArr[i];
        const y = origArr[i + 1];

        const w1 = Math.sin(x * 0.035 + elapsed * 0.3) * 0.8;
        const w2 = Math.cos(y * 0.025 + elapsed * 0.25) * 0.8;
        const w3 = Math.sin((x + y) * 0.015 + elapsed * 0.4) * 0.4;

        posArr[i + 2] = w1 + w2 + w3;
      }
      positionAttr.needsUpdate = true;

      // Smoothed inputs
      scrollY += (targetScrollY - scrollY) * 0.05;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      camera.position.x = mouseX * 10;
      camera.position.y = 9 - scrollY * 0.008 + mouseY * 3;
      camera.position.z = 58 + scrollY * 0.008;
      camera.lookAt(0, -scrollY * 0.005 - 4, 0);

      grid.rotation.z = elapsed * 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none overflow-hidden"
    />
  );
}
