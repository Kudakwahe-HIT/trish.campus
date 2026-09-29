"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { SubmitButton } from "./SubmitButton";
import { AlertCircleIcon, ShieldCheckIcon } from "./icons";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  email?: string;
  password?: string;
};

export function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formError) errorRef.current?.focus();
  }, [formError]);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      errors.email = "Enter your institutional email address.";
    } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
      errors.email = "Enter a valid institutional email address.";
    }

    if (!password) {
      errors.password = "Enter your password.";
    }

    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const errors = validate();
    setFieldErrors(errors);
    setFormError(null);

    if (Object.keys(errors).length > 0) return;

    setStatus("loading");

    // Prototype stage: no auth backend yet, so any well-formed submission signs in.
    // Swap this block for a real call to /api/auth/login once that endpoint exists.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    router.push("/dashboard");
  }

  const isBusy = status === "loading" || status === "success";

  return (
    <div className="w-full animate-fade-slide-up rounded-t-[36px] rounded-b-[28px] border border-slate-100 bg-white p-6 shadow-[0_-4px_24px_-8px_rgba(6,11,52,0.12),0_24px_48px_-16px_rgba(6,11,52,0.18)] sm:p-9 lg:rounded-[28px] lg:p-10 lg:shadow-[0_2px_8px_rgba(15,23,42,0.04),0_32px_64px_-24px_rgba(6,11,52,0.28)] [animation-delay:80ms]">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.75rem]">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-slate-500">Sign in to HIT Campus Assistant</p>
      </div>

      {formError && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 flex items-start gap-2.5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700 outline-none"
        >
          <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate autoComplete="off" className="space-y-5">
        <EmailField
          value={email}
          onChange={(value) => {
            setEmail(value);
            if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
          }}
          error={fieldErrors.email}
          disabled={isBusy}
        />

        <PasswordField
          value={password}
          onChange={(value) => {
            setPassword(value);
            if (fieldErrors.password)
              setFieldErrors((prev) => ({ ...prev, password: undefined }));
          }}
          error={fieldErrors.password}
          disabled={isBusy}
          labelAction={
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-hit-navy transition-colors hover:text-hit-navy-light"
            >
              Forgot password?
            </Link>
          }
        />

        <SubmitButton loading={isBusy} loadingLabel="Signing in...">
          Sign in
        </SubmitButton>
      </form>

      <div className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-xs font-medium text-slate-500">
        <ShieldCheckIcon className="h-4 w-4 text-hit-gold" />
        Secure access for authorised HIT staff
      </div>
    </div>
  );
}
