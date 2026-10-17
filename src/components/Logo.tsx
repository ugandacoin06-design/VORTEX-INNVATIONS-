import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 35c-8.284 0-15-6.716-15-15S11.716 5 20 5s15 6.716 15 15-6.716 15-15 15z"
          fill="url(#paint0_linear)"
          opacity="0.2"
        />
        <path
          d="M20 8.5L31.5 15v10L20 31.5 8.5 25V15L20 8.5z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M20 13L27 17v8l-7 4-7-4v-8l7-4z"
          fill="#0A1128"
        />
        <path
          d="M20 23l4.5-2.5v-4L20 14l-4.5 2.5v4L20 23z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#1A56DB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="8.5"
            y1="8.5"
            x2="31.5"
            y2="31.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14B8A6" />
            <stop offset="0.5" stopColor="#06B6D4" />
            <stop offset="1" stopColor="#1A56DB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="15.5"
            y1="14"
            x2="24.5"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14B8A6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="font-heading font-extrabold text-lg leading-tight tracking-widest text-white uppercase">
          VORTEX
        </span>
        <span className="font-sans font-medium text-[0.65rem] leading-tight tracking-[0.2em] text-[#2dd4bf] uppercase">
          Innovations Ltd
        </span>
      </div>
    </div>
  );
}
