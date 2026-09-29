import Image from "next/image";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  headline: ReactNode;
  supportingText: string;
  children: ReactNode;
};

export function AuthLayout({ headline, supportingText, children }: AuthLayoutProps) {
  return (
    <div className="relative isolate min-h-screen w-full bg-hit-navy-dark">
      {/* Desktop: full-bleed fixed backdrop behind the whole viewport, so the card floats over it */}
      <div className="fixed inset-0 -z-10 hidden overflow-hidden lg:block">
        <Image
          src="/happy-university-students-using-laptop-while-sitting-hallway.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-hit-navy-dark/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-hit-navy-dark/78 via-hit-navy-dark/25 to-transparent" />
      </div>

      <div className="relative flex min-h-screen flex-col lg:flex-row lg:items-stretch lg:p-10 xl:p-14">
        <div className="relative flex min-h-[40vh] flex-col justify-between overflow-hidden px-6 pb-9 pt-7 sm:px-10 sm:pt-9 lg:min-h-0 lg:flex-1 lg:overflow-visible lg:px-0 lg:py-2">
          {/* Mobile/tablet: compact bounded hero image (desktop uses the fixed backdrop above instead) */}
          <div className="absolute inset-0 -z-10 lg:hidden">
            <Image
              src="/happy-university-students-using-laptop-while-sitting-hallway.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-hit-navy-dark/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-hit-navy-dark/80 via-hit-navy-dark/30 to-transparent" />
          </div>

          <div className="flex animate-fade-slide-up items-center gap-3">
            <Image
              src="/logo-hit.png"
              alt="HIT Campus Assistant"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
              HIT Campus Assistant
            </span>
          </div>

          <div className="max-w-md animate-fade-slide-up [animation-delay:120ms]">
            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {headline}
            </h1>
            <p className="mt-4 hidden max-w-sm text-base leading-relaxed text-white/75 sm:block">
              {supportingText}
            </p>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-start bg-white px-5 pb-10 pt-2 sm:px-8 lg:flex-none lg:w-[460px] lg:justify-center lg:bg-transparent lg:px-0 lg:py-0 xl:w-[500px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 hidden rounded-[48px] bg-hit-gold/10 blur-3xl lg:block"
          />
          <div className="relative -mt-9 w-full max-w-[460px] sm:-mt-10 lg:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
