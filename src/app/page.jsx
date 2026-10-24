import PriceDirectory from "@/components/PriceDirectory";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { getDB } from "./lib/mongodb";
import { cacheLife } from "next/cache";

export const metadata = {
  title: "Today's Market Prices in Bangladesh | DamKoto",
  description:
    "Find today's prices of 60 essential commodities in Bangladesh. Explore updated market rates and historical price comparisons.",
  alternates: {
    canonical: "/",
  },
};

const getPrices = async () => {
  "use cache";
  const db = await getDB();

  const data = await db.collection("prices").findOne({
    _id: "Data01",
  });

  return data?.items || [];
};

const getCommunityReports = async () => {
  "use cache";

  const db = await getDB();

  const reports = await db
    .collection("reports")
    .aggregate([
      {
        $group: {
          _id: {
            commodity: "$commodity",
            unit: "$unit",
          },
          average: { $avg: "$price" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          commodity: "$_id.commodity",
          unit: "$_id.unit",
          average: { $round: ["$average", 2] },
          count: 1,
        },
      },
    ])
    .toArray();

  return reports;
};

export default async function HomePage() {
  const items = await getPrices();
  const communityReports = await getCommunityReports();
  const latestDate = items.reduce(
    (latest, item) => (item.report_date > latest ? item.report_date : latest),
    "",
  );

  const formattedDate = latestDate
    ? new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${latestDate}T00:00:00Z`))
    : "Not available";

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-10">
        {/* Editorial Heading */}
        <section className="border-b border-[#E5E5E5] pt-4 pb-8 sm:pt-8 sm:pb-12 lg:pb-16">
          {/* Top Editorial Label */}
          <div className="mb-10 flex items-center justify-between gap-4 sm:mb-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0A0A0A]" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6B6B]">
                Daily essentials / Bangladesh
              </p>
            </div>

            <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] sm:block">
              Market index — 2026
            </span>
          </div>

          {/* Main Hero */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
            <div className="min-w-0">
              <h1 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                Today&apos;s
                <br />
                <span className="font-normal">prices.</span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-relaxed text-[#6B6B6B] sm:mt-10 sm:text-base">
                Know the market. Compare the numbers.
                <br className="hidden sm:block" />
                See what Bangladesh is really paying.
              </p>
            </div>

            {/* Oversized Statistic */}
            <div className="flex items-end justify-between gap-6 border-t border-[#E5E5E5] pt-6 lg:min-w-60 lg:flex-col lg:items-end lg:justify-end lg:border-t-0 lg:pt-0">
              <div className="order-2 flex flex-col items-end lg:order-1">
                <span className="text-[clamp(5rem,10vw,9rem)] font-medium leading-[0.8] tracking-[-0.09em] tabular-nums">
                  {items.length}
                </span>

                <div className="mt-4 h-px w-16 bg-[#0A0A0A]" />
              </div>

              <div className="order-1 lg:order-2 lg:mt-6 lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Tracked essentials
                </p>

                <p className="mt-2 max-w-45 text-xs leading-relaxed text-[#6B6B6B]">
                  Current prices & historical comparisons.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Metadata */}
          <div className="mt-12 flex flex-wrap items-end justify-between gap-5 border-t border-[#E5E5E5] pt-5 sm:mt-16">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6B6B]">
                Last reported update
              </span>

              <time
                dateTime={latestDate}
                className="text-2xl font-bold tabular-nums"
              >
                {formattedDate}
              </time>
            </div>

            <div className="text-right">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6B6B]">
                Coverage
              </p>

              <p className="mt-1 text-sm font-semibold">Bangladesh</p>
            </div>
          </div>
        </section>

        {/* Interactive Price Directory */}
        <PriceDirectory items={items} communityReports={communityReports} />

        {/* Report Price CTA */}
        <section className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#E5E5E5] pt-9 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Paid a different price?
            </h2>

            <p className="mt-2 text-sm text-[#6B6B6B]">
              Help others know what things really cost.
            </p>
          </div>

          <Link
            href="/report"
            className="group relative inline-flex min-h-14 w-full items-center justify-between gap-10 overflow-hidden rounded-sm border border-[#0A0A0A] bg-[#0A0A0A] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0A0A0A] sm:w-auto sm:min-w-64"
          >
            <span className="relative z-10">Report a price</span>

            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight size={17} />
            </span>
          </Link>
        </section>

        <p className="mt-12 text-xs leading-relaxed text-[#6B6B6B]">
          Demo data only. Displayed prices are illustrative and are not verified
          government or community records.
        </p>
      </div>
    </main>
  );
}
