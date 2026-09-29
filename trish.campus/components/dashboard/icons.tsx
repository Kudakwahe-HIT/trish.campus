import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function base(children: ReactNode, className?: string) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return base(
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>,
    className
  );
}

export function FileTextIcon({ className }: IconProps) {
  return base(
    <>
      <path d="M6 3.5h8l4.5 4.5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4.5" />
      <path d="M8.25 13h7.5M8.25 16.5h7.5" />
    </>,
    className
  );
}

export function UsersIcon({ className }: IconProps) {
  return base(
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M15.5 6.5a3 3 0 0 1 0 5.8" />
      <path d="M18 14.7c2 .4 3.5 2 3.5 4.8" />
    </>,
    className
  );
}

export function FolderIcon({ className }: IconProps) {
  return base(
    <path d="M3.5 6.5a1 1 0 0 1 1-1H9l2 2.5h8.5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-11.5Z" />,
    className
  );
}

export function CreditCardIcon({ className }: IconProps) {
  return base(
    <>
      <rect x="2.75" y="5.5" width="18.5" height="13" rx="2" />
      <path d="M2.75 10h18.5" />
      <path d="M6 14.5h4" />
    </>,
    className
  );
}

export function BookIcon({ className }: IconProps) {
  return base(
    <>
      <path d="M4 4.75A1.75 1.75 0 0 1 5.75 3H12v18H5.75A1.75 1.75 0 0 1 4 19.25V4.75Z" />
      <path d="M20 4.75A1.75 1.75 0 0 0 18.25 3H12v18h6.25A1.75 1.75 0 0 0 20 19.25V4.75Z" />
    </>,
    className
  );
}

export function BarChartIcon({ className }: IconProps) {
  return base(
    <>
      <path d="M4.5 19.5v-6" />
      <path d="M11.5 19.5V8" />
      <path d="M18.5 19.5v-10.5" />
      <path d="M2.5 19.5h19" />
    </>,
    className
  );
}

export function SettingsIcon({ className }: IconProps) {
  return base(
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.25M12 18.25v2.25M4.75 6.75l1.6 1.6M17.65 15.65l1.6 1.6M3.5 12h2.25M18.25 12h2.25M4.75 17.25l1.6-1.6M17.65 8.35l1.6-1.6" />
    </>,
    className
  );
}

export function BellIcon({ className }: IconProps) {
  return base(
    <>
      <path d="M6 10a6 6 0 1 1 12 0c0 4.2 1.2 5.8 1.6 6.3a.7.7 0 0 1-.55 1.2H4.95a.7.7 0 0 1-.55-1.2C4.8 15.8 6 14.2 6 10Z" />
      <path d="M10 19.5a2 2 0 0 0 4 0" />
    </>,
    className
  );
}

export function SearchIcon({ className }: IconProps) {
  return base(
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m19.5 19.5-4.35-4.35" />
    </>,
    className
  );
}

export function SlidersIcon({ className }: IconProps) {
  return base(
    <>
      <path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h13M21 18h-2" />
      <circle cx="15" cy="6" r="2.25" />
      <circle cx="7" cy="12" r="2.25" />
      <circle cx="17" cy="18" r="2.25" />
    </>,
    className
  );
}

export function DownloadIcon({ className }: IconProps) {
  return base(
    <>
      <path d="M12 3.5v11.5" />
      <path d="m7.25 10.75 4.75 4.75 4.75-4.75" />
      <path d="M4.5 18.5h15" />
    </>,
    className
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return base(<path d="m6 9 6 6 6-6" />, className);
}

export function ChevronLeftIcon({ className }: IconProps) {
  return base(<path d="m14.5 18-6-6 6-6" />, className);
}

export function TrendUpIcon({ className }: IconProps) {
  return base(
    <>
      <path d="m3.5 16 6-6 4 4 6.5-7" />
      <path d="M15 6.5h5v5" />
    </>,
    className
  );
}

export function DotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return base(
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </>,
    className
  );
}
