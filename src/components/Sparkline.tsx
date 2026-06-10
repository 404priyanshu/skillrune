"use client";

import { useMemo } from "react";

export function Sparkline({ slug, isGold = false }: { slug: string; isGold?: boolean }) {
  const points = useMemo(() => {
    // Deterministic hash based on slug to generate the same random-walk numbers
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }

    const vals: number[] = [];
    let current = 35 + (Math.abs(hash) % 35); // Starting value between 35 and 70
    
    for (let w = 0; w < 8; w++) {
      // Deterministic pseudo-random number
      const step = Math.sin(hash + w) * 18;
      current = Math.max(10, Math.min(90, current + step));
      vals.push(current);
    }
    return vals;
  }, [slug]);

  const width = 110;
  const height = 26;

  // Build the SVG line path
  const path = useMemo(() => {
    const xStep = width / (points.length - 1);
    return points
      .map((val, i) => {
        const x = i * xStep;
        // Invert Y because SVG coordinates start from top
        const y = height - (val / 100) * (height - 4) - 2;
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  }, [points]);

  // Build the SVG closed area path for fill gradient
  const areaPath = useMemo(() => {
    if (points.length === 0) return "";
    const xStep = width / (points.length - 1);
    const linePath = points
      .map((val, i) => {
        const x = i * xStep;
        const y = height - (val / 100) * (height - 4) - 2;
        return `L ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
    
    const startY = height - (points[0] / 100) * (height - 4) - 2;
    return `M 0.0 ${startY.toFixed(1)} ${linePath} L ${width.toFixed(1)} ${height} L 0.0 ${height} Z`;
  }, [points]);

  const strokeColor = isGold ? "#d09f4c" : "var(--brand-light)";
  const fillId = `gradient-${slug}`;

  return (
    <div className="relative h-8 w-28 overflow-visible flex items-center justify-center">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible opacity-75 hover:opacity-100 transition-opacity">
        <defs>
          <linearGradient id={fillId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        
        {/* Closed Area Gradient Fill */}
        <path d={areaPath} fill={`url(#${fillId})`} pointerEvents="none" />
        
        {/* Line Stroke */}
        <path
          d={path}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pointerEvents="none"
        />
        
        {/* Endpoint Dot */}
        {points.length > 0 && (
          <circle
            cx={width}
            cy={height - (points[points.length - 1] / 100) * (height - 4) - 2}
            r="2"
            fill={strokeColor}
            className="animate-pulse"
          />
        )}
      </svg>
    </div>
  );
}
