"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates to ranges between -0.5 and 0.5
    const xc = x / rect.width - 0.5;
    const yc = y / rect.height - 0.5;
    
    // Max tilt degrees (e.g. 12 degrees)
    const rotateX = -yc * 12;
    const rotateY = xc * 12;
    
    // Calculate highlight shine position
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    setShineStyle({
      opacity: 0.12,
      background: `radial-gradient(circle 180px at ${shineX}% ${shineY}%, rgba(255,255,255,0.8), transparent)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setShineStyle({
      opacity: 0,
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl transition-all duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Content Container to push actual elements out slightly */}
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>

      {/* Glossy Reflective overlay */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay transition-opacity duration-300"
        style={shineStyle}
      />
    </div>
  );
}
