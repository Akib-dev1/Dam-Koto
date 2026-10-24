import Link from "next/link";
import {
  FiArrowUpRight,
  FiDatabase,
  FiUsers,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

export const metadata = {
  title: "How It Works",
  description:
    "Learn how DamKoto collects, organizes, and presents Bangladesh market prices, historical comparisons, and commodity price reports.",
  alternates: {
    canonical: "/how-it-works",
  },
};

const steps = [
  {
    number: "01",
    title: "Official market data.",
    description:
      "We bring together published government market prices so you can see the latest available benchmarks for everyday essentials.",
    detail:
      "Compare published price ranges and historical figures, with reporting dates clearly displayed.",
    icon: FiDatabase,
  },
  {
    number: "02",
    title: "Real people. Real prices.",
    description:
      "Anyone can report what they paid at their local market. No account required, just the product, price, and location.",
    detail:
      "Community submissions help show how real shopping experiences compare with published market prices.",
    icon: FiUsers,
  },
  {
    number: "03",
    title: "Compare with confidence.",
    description:
      "Explore official benchmarks alongside community-reported prices to better understand what everyday products cost.",
    detail:
      "Prices vary by location, product quality, and time. Suspicious reports may be reviewed before publication.",
    icon: FiShield,
  },
];

const HowItWorksPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-10">
        {/* Hero Section */}
        <section className="border-b border-neutral-200 pb-12 sm:pb-16">
          <div className="mb-10 flex items-center justify-between gap-4 sm:mb-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                About DamKoto / Bangladesh
              </p>
            </div>

            <span className="hidden text-xs font-medium uppercase tracking-widest text-neutral-500 sm:block">
              Understanding the market
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <h1 className="text-6xl font-semibold leading-none tracking-tighter sm:text-8xl lg:text-9xl">
                How it
                <br />
                <span className="font-normal">works.</span>
              </h1>
            </div>

            <div className="lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-neutral-600 sm:text-xl">
                Official market benchmarks and real shopping experiences, side
                by side.
              </p>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
                DamKoto helps you understand everyday market prices, compare the
                numbers, and contribute to a more transparent marketplace in
                Bangladesh.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-5">
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              The process
            </span>

            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              03 simple steps
            </span>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className="pt-12 sm:pt-16">
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-500">
              The system / 001
            </p>

            <h2 className="text-4xl font-medium leading-none tracking-tighter sm:text-6xl">
              Behind the numbers
              <span className="text-neutral-500">.</span>
            </h2>
          </div>

          <div className="border-t border-black">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group grid gap-6 border-b border-neutral-200 py-10 transition-colors duration-300 hover:bg-neutral-50 sm:py-14 lg:grid-cols-12 lg:gap-10"
              >
                {/* Step Number */}
                <div className="flex items-start justify-between lg:col-span-2">
                  <span className="text-sm font-medium text-neutral-500">
                    / {step.number}
                  </span>

                  <step.icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-neutral-400 lg:hidden"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <h3 className="text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
                    {step.description}
                  </p>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-500">
                    {step.detail}
                  </p>
                </div>

                {/* Desktop Icon */}
                <div className="hidden items-start justify-end lg:col-span-3 lg:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <step.icon size={25} strokeWidth={1.3} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mt-20 border-t border-black pt-8 sm:mt-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-500">
                The difference / 002
              </p>

              <h2 className="text-4xl font-medium leading-none tracking-tighter sm:text-6xl">
                Two perspectives.
                <br />
                <span className="text-neutral-500">One clearer picture.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border-b border-neutral-200 pb-7">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  01 / Official benchmark
                </span>

                <h3 className="mt-3 text-xl font-semibold">
                  What the published data says.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Government-published market data provides reference price
                  ranges for essential commodities.
                </p>
              </div>

              <div className="border-b border-neutral-200 pb-7">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  02 / Community experience
                </span>

                <h3 className="mt-3 text-xl font-semibold">
                  What shoppers actually pay.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Community reports help reveal real prices paid across
                  different districts and markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-20 border-t border-neutral-200 pt-8 sm:mt-28">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Important information / 003
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                Transparency matters.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
                Prices can vary depending on market, location, product quality,
                availability, and time. Published government prices are
                benchmarks, not guaranteed selling prices.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Community-submitted prices may not be independently verified.
                Reports may be reviewed to identify inaccurate, suspicious, or
                misleading submissions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 border-t border-black pt-10 sm:mt-28">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
                Ready to explore?
              </p>

              <h2 className="text-4xl font-medium leading-none tracking-tighter sm:text-6xl lg:text-7xl">
                Know the price
                <span className="text-neutral-500">.</span>
                <br />
                Make it count.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600">
                Explore market prices or share what you paid to help others make
                informed decisions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:min-w-56">
              <Link
                href="/"
                className="group flex min-h-14 items-center justify-between gap-8 rounded-sm border border-black bg-black px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
              >
                Explore prices
                <FiArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>

              <Link
                href="/report"
                className="group flex min-h-14 items-center justify-between gap-8 rounded-sm border border-neutral-300 px-5 text-sm font-semibold transition-all duration-300 hover:border-black hover:bg-neutral-50"
              >
                Report a price
                <FiArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HowItWorksPage;
