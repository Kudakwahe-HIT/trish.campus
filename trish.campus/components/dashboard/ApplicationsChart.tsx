"use client";

import { useId, useState } from "react";

type ChartPoint = { month: string; count: number };

const SERIES_COLOR = "#2a78d6";
const WIDTH = 640;
const HEIGHT = 220;
const PADDING = { top: 16, right: 16, bottom: 28, left: 40 };

function niceMax(value: number) {
  const step = value <= 200 ? 50 : 100;
  return Math.ceil(value / step) * step;
}

export function ApplicationsChart({ data }: { data: ChartPoint[] }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const gradientId = useId();

  const maxValue = niceMax(Math.max(...data.map((d) => d.count)));
  const plotWidth = WIDTH - PADDING.left - PADDING.right;
  const plotHeight = HEIGHT - PADDING.top - PADDING.bottom;

  const xFor = (index: number) => PADDING.left + (index / (data.length - 1)) * plotWidth;
  const yFor = (value: number) => PADDING.top + plotHeight - (value / maxValue) * plotHeight;

  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xFor(i).toFixed(1)} ${yFor(d.count).toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L ${xFor(data.length - 1).toFixed(1)} ${(PADDING.top + plotHeight).toFixed(1)} L ${xFor(0).toFixed(1)} ${(PADDING.top + plotHeight).toFixed(1)} Z`;

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(maxValue * f));

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={`Applications received per month, from ${data[0].month} at ${data[0].count} to ${data[data.length - 1].month} at ${data[data.length - 1].count}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={SERIES_COLOR} stopOpacity={0.16} />
            <stop offset="100%" stopColor={SERIES_COLOR} stopOpacity={0} />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={PADDING.left}
              x2={WIDTH - PADDING.right}
              y1={yFor(tick)}
              y2={yFor(tick)}
              stroke="#e1e0d9"
              strokeWidth={1}
            />
            <text x={PADDING.left - 10} y={yFor(tick) + 3} textAnchor="end" className="fill-slate-400 text-[10px]">
              {tick.toLocaleString()}
            </text>
          </g>
        ))}

        <path d={areaPath} fill={`url(#${gradientId})`} />
        <path d={linePath} fill="none" stroke={SERIES_COLOR} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {data.map((d, i) => (
          <text
            key={d.month}
            x={xFor(i)}
            y={HEIGHT - 6}
            textAnchor="middle"
            className="fill-slate-400 text-[10px]"
          >
            {d.month}
          </text>
        ))}

        {data.map((d, i) => (
          <g key={d.month}>
            <line
              x1={xFor(i)}
              x2={xFor(i)}
              y1={PADDING.top}
              y2={PADDING.top + plotHeight}
              stroke={SERIES_COLOR}
              strokeWidth={1}
              opacity={hoverIndex === i ? 0.15 : 0}
            />
            <circle
              cx={xFor(i)}
              cy={yFor(d.count)}
              r={hoverIndex === i ? 5 : 4}
              fill={SERIES_COLOR}
              stroke="#fcfcfb"
              strokeWidth={2}
            />
            <rect
              x={xFor(i) - plotWidth / (data.length - 1) / 2}
              y={PADDING.top}
              width={plotWidth / (data.length - 1)}
              height={plotHeight}
              fill="transparent"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            />
          </g>
        ))}
      </svg>

      {hoverIndex !== null && (
        <div
          className="pointer-events-none absolute rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-lg"
          style={{
            left: `${(xFor(hoverIndex) / WIDTH) * 100}%`,
            top: `${(yFor(data[hoverIndex].count) / HEIGHT) * 100}%`,
            transform: "translate(-50%, calc(-100% - 10px))",
          }}
        >
          {data[hoverIndex].month}: {data[hoverIndex].count.toLocaleString()}
        </div>
      )}

      {hoverIndex === null && (
        <div
          className="pointer-events-none absolute text-right"
          style={{
            left: `${(xFor(data.length - 1) / WIDTH) * 100}%`,
            top: `${(yFor(data[data.length - 1].count) / HEIGHT) * 100}%`,
            transform: "translate(-100%, calc(-100% - 8px))",
          }}
        >
          <p className="text-sm font-semibold text-slate-700">
            {data[data.length - 1].count.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
