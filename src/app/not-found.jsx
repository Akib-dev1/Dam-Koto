import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] bg-white text-[#0A0A0A]">
      <div className="mx-auto flex min-h-[75vh] max-w-7xl flex-col px-4 pt-10 pb-12 sm:px-6 lg:px-8">
        {/* Top Label */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            DamKoto / Error 404
          </p>

          <span className="text-xs uppercase tracking-widest text-neutral-400">
            Page unavailable
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />
            <p className="text-xs font-semibold uppercase tracking-widest">
              Nothing at this address
            </p>
          </div>

          <h1 className="text-[clamp(8rem,27vw,22rem)] font-semibold leading-[0.75] tracking-[-0.09em]">
            404<span className="text-neutral-300">.</span>
          </h1>

          <div className="mt-12 grid gap-8 border-t border-black pt-8 sm:mt-16 sm:grid-cols-2 sm:items-end">
            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-tighter sm:text-5xl">
                This page is
                <br />
                off the market.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
                The page you&apos;re looking for doesn&apos;t exist, has moved,
                or is no longer available. The latest market prices are still
                just a click away.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 sm:items-end">
              <Link
                href="/"
                className="group flex min-h-14 w-full items-center justify-between gap-10 rounded-sm border border-black bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black sm:w-auto sm:min-w-64"
              >
                <span className="flex items-center gap-3">
                  <FiArrowLeft />
                  Back to market index
                </span>

                <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>

              <p className="text-xs text-neutral-400">
                Explore today&apos;s essential commodity prices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-5">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            Know the market. Compare the numbers.
          </p>

          <span className="text-xs font-medium tabular-nums text-neutral-400">
            404 / Page not found
          </span>
        </div>
      </div>
    </main>
  );
}
