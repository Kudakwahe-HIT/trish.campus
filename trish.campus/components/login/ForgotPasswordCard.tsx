"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { EmailField } from "./EmailField";
import { SubmitButton } from "./SubmitButton";
import { ArrowLeftIcon, CheckCircleIcon } from "./icons";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ForgotPasswordCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Enter your institutional email address.");
      return;
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setError("Enter a valid institutional email address.");
      return;
    }

    setError(undefined);
    setStatus("loading");

    try {
      await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });
    } finally {
      setStatus("sent");
    }
  }

  return (
    <div className="w-full animate-fade-slide-up rounded-t-[36px] rounded-b-[28px] border border-slate-100 bg-white p-6 shadow-[0_-4px_24px_-8px_rgba(6,11,52,0.12),0_24px_48px_-16px_rgba(6,11,52,0.18)] sm:p-9 lg:rounded-[28px] lg:p-10 lg:shadow-[0_2px_8px_rgba(15,23,42,0.04),0_32px_64px_-24px_rgba(6,11,52,0.28)] [animation-delay:80ms]">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-hit-navy"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to sign in
      </Link>

      {status === "sent" ? (
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircleIcon className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.75rem]">
            Check your inbox
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            If <span className="font-medium text-slate-700">{email.trim()}</span> is linked to an
            authorised HIT staff account, we&apos;ve sent instructions to reset your password.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.75rem]">
              Reset your password
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Enter your institutional email and we&apos;ll send you a link to reset your
              password.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <EmailField
              value={email}
              onChange={(value) => {
                setEmail(value);
                if (error) setError(undefined);
              }}
              error={error}
              disabled={status === "loading"}
            />

            <SubmitButton loading={status === "loading"} loadingLabel="Sending link...">
              Send reset link
            </SubmitButton>
          </form>
        </>
      )}
    </div>
  );
}
