// Logo.jsx
import React from "react";

export default function Logo() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.15))" }}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1976d2", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#90caf9", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="url(#grad1)"
        strokeWidth="5"
        fill="url(#grad1)"
      />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="50"
        fontWeight="900"
        fill="white"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        style={{ userSelect: "none" }}
      >
        L
      </text>
    </svg>
  );
}
