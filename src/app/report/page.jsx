import ReportPriceForm from "@/components/ReportPriceForm";

const sampleItems = [
  {
    row_key: "2026-10-19|চাল সরু (নাজির/মিনিকেট)|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "চাল",
    item: "চাল সরু (নাজির/মিনিকেট)",
    unit: "প্রতি কেজি",
    price_min: 70,
    price_max: 85,
    week_min: 70,
    week_max: 85,
    month_min: 70,
    month_max: 85,
    year_min: 72,
    year_max: 85,
  },
  {
    row_key: "2026-10-19|চাল মাঝারি|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "চাল",
    item: "চাল মাঝারি",
    unit: "প্রতি কেজি",
    price_min: 58,
    price_max: 65,
    week_min: 58,
    week_max: 65,
    month_min: 56,
    month_max: 64,
    year_min: 55,
    year_max: 62,
  },
  {
    row_key: "2026-10-19|আটা (খোলা)|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "আটা ও ময়দা",
    item: "আটা (খোলা)",
    unit: "প্রতি কেজি",
    price_min: 42,
    price_max: 48,
    week_min: 43,
    week_max: 49,
    month_min: 44,
    month_max: 50,
    year_min: 45,
    year_max: 52,
  },
  {
    row_key: "2026-10-19|সয়াবিন তেল (বোতল)|প্রতি লিটার",
    report_date: "2026-10-19",
    category: "তেল",
    item: "সয়াবিন তেল (বোতল)",
    unit: "প্রতি লিটার",
    price_min: 175,
    price_max: 185,
    week_min: 175,
    week_max: 185,
    month_min: 170,
    month_max: 180,
    year_min: 165,
    year_max: 175,
  },
  {
    row_key: "2026-10-19|মসুর ডাল|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "ডাল",
    item: "মসুর ডাল",
    unit: "প্রতি কেজি",
    price_min: 125,
    price_max: 135,
    week_min: 120,
    week_max: 130,
    month_min: 120,
    month_max: 130,
    year_min: 115,
    year_max: 125,
  },
  {
    row_key: "2026-10-19|পেঁয়াজ (দেশি)|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "সবজি",
    item: "পেঁয়াজ (দেশি)",
    unit: "প্রতি কেজি",
    price_min: 65,
    price_max: 75,
    week_min: 70,
    week_max: 80,
    month_min: 60,
    month_max: 70,
    year_min: 55,
    year_max: 65,
  },
  {
    row_key: "2026-10-19|আলু|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "সবজি",
    item: "আলু",
    unit: "প্রতি কেজি",
    price_min: 30,
    price_max: 35,
    week_min: 30,
    week_max: 35,
    month_min: 35,
    month_max: 40,
    year_min: 40,
    year_max: 45,
  },
  {
    row_key: "2026-10-19|ডিম (ফার্ম)|প্রতি হালি",
    report_date: "2026-10-19",
    category: "ডিম",
    item: "ডিম (ফার্ম)",
    unit: "প্রতি হালি",
    price_min: 46,
    price_max: 50,
    week_min: 44,
    week_max: 48,
    month_min: 42,
    month_max: 46,
    year_min: 45,
    year_max: 50,
  },
  {
    row_key: "2026-10-19|ব্রয়লার মুরগি|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "মাংস",
    item: "ব্রয়লার মুরগি",
    unit: "প্রতি কেজি",
    price_min: 175,
    price_max: 190,
    week_min: 180,
    week_max: 195,
    month_min: 170,
    month_max: 185,
    year_min: 160,
    year_max: 180,
  },
  {
    row_key: "2026-10-19|চিনি|প্রতি কেজি",
    report_date: "2026-10-19",
    category: "চিনি",
    item: "চিনি",
    unit: "প্রতি কেজি",
    price_min: 110,
    price_max: 120,
    week_min: 110,
    week_max: 120,
    month_min: 115,
    month_max: 125,
    year_min: 120,
    year_max: 130,
  },
];

const ReportPage = () => {
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
          <ReportPriceForm items={sampleItems} />

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
