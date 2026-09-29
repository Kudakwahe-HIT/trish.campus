"use client";

import { useId, useState, type ReactNode } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "./icons";

type PasswordFieldProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  labelAction?: ReactNode;
  autoComplete?: string;
};

export function PasswordField({
  value,
  onChange,
  error,
  disabled,
  labelAction,
  autoComplete = "new-password",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const errorId = useId();

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <label htmlFor="password" className="text-sm font-medium text-slate-800">
          Password
        </label>
        {labelAction}
      </div>
      <div
        className={`flex items-center rounded-2xl border bg-white pr-2 transition-colors focus-within:ring-2 ${
          disabled ? "bg-slate-50" : ""
        } ${
          error
            ? "border-red-300 focus-within:border-red-400 focus-within:ring-red-100"
            : "border-slate-200 focus-within:border-hit-navy focus-within:ring-hit-navy/15"
        }`}
      >
        <span className="m-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-hit-navy/5 text-hit-navy">
          <LockIcon className="h-[18px] w-[18px]" />
        </span>
        <input
          id="password"
          name="password"
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          data-lpignore="true"
          data-1p-ignore="true"
          placeholder="Enter your password"
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full min-w-0 bg-transparent py-3 pr-1 text-slate-900 placeholder:text-sm placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:text-slate-400 ${
            visible ? "text-sm font-normal tracking-normal" : "text-base font-semibold tracking-[0.1em]"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          disabled={disabled}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition-colors hover:text-hit-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-hit-navy/30 disabled:pointer-events-none disabled:opacity-50"
        >
          {visible ? <EyeOffIcon className="h-[18px] w-[18px]" /> : <EyeIcon className="h-[18px] w-[18px]" />}
        </button>
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
