import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | DamKoto",
  description:
    "Read the DamKoto Privacy Policy to understand how information is collected, used, and handled on our platform.",
};

const policies = [
  {
    number: "01",
    title: "Information we collect",
    paragraphs: [
      "DamKoto provides access to commodity price information without requiring visitors to create an account.",
      "When you submit a community price report, we collect the information you provide, such as the commodity, reported price, market or location, and other details included in your submission.",
    ],
  },
  {
    number: "02",
    title: "How we use information",
    paragraphs: [
      "Submitted information is used to display community-reported prices, calculate price averages, and provide additional insights into local market conditions.",
      "We use this information to maintain and improve the accuracy, usefulness, and functionality of the platform.",
    ],
  },
  {
    number: "03",
    title: "Community submissions",
    paragraphs: [
      "Community price reports are user-submitted information and are separate from official government-published price data.",
      "Information included in a community report may be displayed publicly on DamKoto. Please avoid submitting personal or sensitive information in report fields.",
    ],
  },
  {
    number: "04",
    title: "Government price data",
    paragraphs: [
      "DamKoto collects publicly available commodity price information from daily market price reports published by the Trading Corporation of Bangladesh (TCB).",
      "This information is used for displaying current prices, historical comparisons, and market trends. DamKoto is an independent platform and is not affiliated with TCB.",
    ],
  },
  {
    number: "05",
    title: "Data storage and security",
    paragraphs: [
      "Information submitted through the platform may be stored and processed using the services that support DamKoto.",
      "We aim to handle collected information responsibly. However, no internet-based system can guarantee complete security.",
    ],
  },
  {
    number: "06",
    title: "Third-party services",
    paragraphs: [
      "DamKoto uses third-party hosting and infrastructure services to operate the website. These services may process technical information necessary to deliver and maintain the platform.",
      "External websites linked from DamKoto operate under their own privacy policies. We are not responsible for the privacy practices of those websites.",
    ],
  },
  {
    number: "07",
    title: "Your choices",
    paragraphs: [
      "Submitting a community price report is voluntary. You can browse published commodity price information without contributing a report.",
      "If you have concerns about information you submitted or would like to request its correction or removal, you can contact the developer through the Contact page.",
    ],
  },
  {
    number: "08",
    title: "Changes to this policy",
    paragraphs: [
      "This Privacy Policy may be updated when the platform's features, data handling practices, or applicable requirements change.",
      "Any updates will be published on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 text-neutral-950 sm:px-8 sm:py-10">
      {/* Page Header */}
      <section className="border-b border-neutral-200 pb-10 sm:pb-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Legal / DamKoto
          </p>

          <span className="font-mono text-xs text-neutral-400">
            001 / PRIVACY
          </span>
        </div>

        <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          Privacy
          <br />
          policy.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
          Your privacy matters. This page explains how information is collected,
          used, and handled when you access or contribute to DamKoto.
        </p>

        <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-neutral-200 pt-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Effective date
            </p>
            <p className="mt-2 text-sm font-medium">24 October 2026</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Platform
            </p>
            <p className="mt-2 text-sm font-medium">DamKoto / Bangladesh</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="grid gap-8 border-b border-neutral-200 py-10 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            00 / OVERVIEW
          </p>
        </div>

        <div className="max-w-2xl space-y-4 text-sm leading-8 text-neutral-600 sm:text-base">
          <p>
            DamKoto is an independent price information platform designed to
            make daily commodity prices more accessible across Bangladesh.
          </p>

          <p>
            We believe in transparency about how information is handled. This
            policy explains our approach to data collected through community
            contributions and interactions with the website.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section>
        {policies.map((policy) => (
          <div
            key={policy.number}
            className="grid gap-6 border-b border-neutral-200 py-9 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
          >
            <div>
              <p className="mb-4 font-mono text-xs text-neutral-400">
                {policy.number} / POLICY
              </p>

              <h2 className="max-w-sm text-xl font-semibold tracking-tight sm:text-2xl">
                {policy.title}
              </h2>
            </div>

            <div className="max-w-2xl space-y-4">
              {policy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-8 text-neutral-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            09 / QUESTIONS
          </p>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Privacy questions?
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-sm leading-8 text-neutral-600 sm:text-base">
            If you have questions about this Privacy Policy or concerns about
            information submitted through DamKoto, please contact the developer.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-3 border-b border-neutral-900 pb-1 text-xs font-semibold uppercase tracking-wider transition hover:text-neutral-500"
          >
            Contact developer <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
