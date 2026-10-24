import ReportPriceForm from "@/components/ReportPriceForm";
import { getDB } from "../lib/mongodb";

export const metadata = {
  title: "Market Price Reports",
  description:
    "Explore Bangladesh market price reports, commodity price trends, and historical data. Understand how essential goods prices change over time.",
  alternates: {
    canonical: "/report",
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

const ReportPage = async () => {
  const items = await getPrices();
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        {/* Editorial Heading */}
        <section className="border-b border-[#E5E5E5] pb-7 sm:pb-9">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-black" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">
                Community contribution
              </span>
            </div>

            <span className="text-xs font-medium tracking-widest text-[#6B6B6B]">
              01 / CONTRIBUTE
            </span>
          </div>

          <h1 className="text-6xl font-semibold leading-none tracking-tighter sm:text-8xl lg:text-9xl">
            Report
            <br />
            <span className="font-normal">a price.</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-md text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              What did you pay at the market?
              <br className="hidden sm:block" />
              Share the real price in under 20 seconds.
            </p>

            <span className="border border-[#E5E5E5] px-3 py-2 text-xs font-medium uppercase tracking-wider">
              No account required
            </span>
          </div>
        </section>

        {/* Form Section */}
        <div className="grid gap-8 pt-7 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
          <ReportPriceForm items={items} />

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-black pt-5">
              <span className="text-xs font-medium uppercase tracking-widest text-[#6B6B6B]">
                Why report?
              </span>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tighter">
                Better data.
                <br />
                Fairer markets.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
                Every genuine report helps people compare official market prices
                with what shoppers actually pay.
              </p>

              <div className="mt-8 border-t border-[#E5E5E5] pt-5">
                <span className="text-5xl font-medium tracking-tighter">
                  20<span className="text-2xl">s</span>
                </span>

                <p className="mt-2 text-xs text-[#6B6B6B]">
                  Estimated reporting time
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ReportPage;
