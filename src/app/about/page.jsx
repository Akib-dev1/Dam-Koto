import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "About DamKoto | Bangladesh Price Index",
  description:
    "Learn about DamKoto, an independent platform for exploring daily commodity prices and community market reports across Bangladesh.",
};

const features = [
  {
    id: "01",
    title: "Daily prices.",
    description:
      "Explore commodity prices collected from daily market reports published by the Trading Corporation of Bangladesh.",
  },
  {
    id: "02",
    title: "Price comparisons.",
    description:
      "Review current prices alongside weekly and monthly ranges to understand how reported prices change over time.",
  },
  {
    id: "03",
    title: "Community reports.",
    description:
      "See prices submitted by shoppers across Bangladesh, providing another perspective on what people are paying.",
  },
];

const stack = [
  "Next.js",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "MongoDB",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 text-neutral-950 sm:px-8 sm:py-10">
      {/* Page introduction */}
      <section className="border-b border-neutral-200 pb-10 sm:pb-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Independent market index / Bangladesh
          </p>

          <span className="text-xs font-mono text-neutral-400">
            001 / ABOUT
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Know the
              <br />
              market.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Making everyday market prices easier to find, compare, and
              understand across Bangladesh.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-5 lg:border-t-0 lg:border-l lg:pl-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              The idea
            </p>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Simple access to published market prices, historical comparisons,
              and prices shared by everyday shoppers.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
              Built for Bangladesh
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="grid gap-10 border-b border-neutral-200 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            01 / THE PURPOSE
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            Better information.
            <br />
            Better awareness.
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-8 text-neutral-600 sm:text-base">
          <p>
            The prices of everyday essentials affect everyone. But finding
            organized, accessible, and comparable market price information isn&apos;t
            always easy.
          </p>

          <p>
            DamKoto was created to bring that information into one place.
            Instead of searching through individual reports, people can explore
            commodity prices, review historical ranges, and understand the
            numbers through a straightforward interface.
          </p>

          <p>
            The platform also allows people to share what they actually paid,
            offering an additional perspective alongside published prices.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-neutral-200 py-12 sm:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              02 / THE PLATFORM
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              What you can do.
            </h2>
          </div>

          <p className="text-xs font-mono text-neutral-400">INDEX / 001—003</p>
        </div>

        <div className="border-t border-neutral-200">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="grid gap-4 border-b border-neutral-200 py-7 last:border-b-0 sm:grid-cols-[70px_1fr_1.2fr] sm:items-start sm:gap-8 sm:py-9"
            >
              <span className="font-mono text-xs text-neutral-400">
                {feature.id}
              </span>

              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {feature.title}
              </h3>

              <p className="max-w-md text-sm leading-7 text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Data source */}
      <section className="grid gap-10 border-b border-neutral-200 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            03 / DATA SOURCES
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            Where the
            <br />
            numbers come from.
          </h2>
        </div>

        <div>
          <div className="border-b border-neutral-200 pb-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold">
                Published market prices
              </h3>
              <span className="text-xs font-mono text-neutral-400">01</span>
            </div>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Commodity prices are collected from daily market price reports
              available on the Trading Corporation of Bangladesh (TCB) website
              and presented in a more accessible format.
            </p>

            <a
              href="https://tcb.gov.bd/pages/daily-rmps"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-xs font-semibold transition hover:text-neutral-500"
            >
              VIEW ORIGINAL SOURCE <span>↗</span>
            </a>
          </div>

          <div className="py-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold">
                Community price reports
              </h3>
              <span className="text-xs font-mono text-neutral-400">02</span>
            </div>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Community reports are submitted by individuals sharing prices they
              paid at local markets. These reports are separate from the
              published TCB price data.
            </p>

            <Link
              href="/report"
              className="mt-5 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-xs font-semibold transition hover:text-neutral-500"
            >
              REPORT A PRICE <span>↗</span>
            </Link>
          </div>

          <div className="border-t border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs leading-6 text-neutral-500">
              DamKoto is an independent project and is not affiliated with or
              endorsed by TCB. Prices displayed on the platform are
              informational and may differ from prices at individual markets.
            </p>
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="border-b border-neutral-200 py-12 sm:py-16">
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            04 / THE DEVELOPER
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Behind DamKoto.
          </h2>
        </div>

        <div className="grid gap-8 border-t border-neutral-200 pt-8 md:grid-cols-[160px_1fr] md:gap-12">
          <div>
            <Image
              src="/profile.jpeg"
              alt="Muhammad Akib Anjum"
              width={144}
              height={144}
              className="h-28 w-28 rounded-3xl object-cover sm:h-36 sm:w-36"
            />
          </div>

          <div>
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Muhammad Akib Anjum.
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
                  Full-stack web developer
                </p>
              </div>

              <span className="border border-neutral-200 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                Dhaka, BD
              </span>
            </div>

            <div className="max-w-2xl space-y-4 text-sm leading-7 text-neutral-600">
              <p>
                I&apos;m a Computer Science and Engineering student at American
                International University-Bangladesh and a full-stack developer
                interested in building practical, useful web applications.
              </p>

              <p>
                My work includes developing responsive interfaces, backend
                systems, authentication, and database-driven applications using
                modern JavaScript technologies.
              </p>

              <p>
                DamKoto is an independent project built around a simple idea:
                make everyday market information easier for people to access and
                understand.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="https://github.com/Akib-dev1"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-neutral-900 pb-1 text-xs font-semibold uppercase tracking-wider hover:text-neutral-500"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-akib"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-neutral-900 pb-1 text-xs font-semibold uppercase tracking-wider hover:text-neutral-500"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://akib-dev1-portfolio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-neutral-900 pb-1 text-xs font-semibold uppercase tracking-wider hover:text-neutral-500"
              >
                Portfolio ↗
              </a>
            </div>
          </div>
        </div>

        {/* Development stack */}
        <div className="mt-12 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-[160px_1fr] sm:gap-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Tech stack / 001
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              05 / COMMUNITY
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Paid a different
              <br />
              price?
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
              Your market experience can help others. Share what you paid and
              contribute to a clearer picture of everyday prices.
            </p>
          </div>

          <Link
            href="/report"
            className="inline-flex w-fit items-center justify-center gap-5 bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Report a price <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
