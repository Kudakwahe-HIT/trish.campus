import { MailIcon } from "./icons";

type EmailFieldProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
};

export function EmailField({ value, onChange, error, disabled }: EmailFieldProps) {
  return (
    <div>
      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-800">
        Email address
      </label>
      <div
        className={`flex items-center rounded-2xl border bg-white pr-3 transition-colors focus-within:ring-2 ${
          disabled ? "bg-slate-50" : ""
        } ${
          error
            ? "border-red-300 focus-within:border-red-400 focus-within:ring-red-100"
            : "border-slate-200 focus-within:border-hit-navy focus-within:ring-hit-navy/15"
        }`}
      >
        <span className="m-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-hit-navy/5 text-hit-navy">
          <MailIcon className="h-[18px] w-[18px]" />
        </span>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your institutional email"
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "email-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
          className="w-full min-w-0 bg-transparent py-3 pr-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:text-slate-400"
        />
      </div>
      {error && (
        <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
