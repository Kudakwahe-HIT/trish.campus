import { SpinnerIcon } from "./icons";

type SubmitButtonProps = {
  loading: boolean;
  loadingLabel: string;
  children: string;
};

export function SubmitButton({ loading, loadingLabel, children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      aria-busy={loading}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-hit-navy px-4 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(11,22,87,0.65)] transition-all duration-200 hover:bg-hit-navy-light hover:shadow-[0_16px_28px_-12px_rgba(11,22,87,0.55)] active:bg-hit-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-hit-navy/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
    >
      {loading ? (
        <>
          <SpinnerIcon className="h-4 w-4 animate-spin" />
          {loadingLabel}
        </>
      ) : (
        children
      )}
    </button>
  );
}
