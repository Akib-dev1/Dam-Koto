export const metadata = {
  title: "Contact | DamKoto",
  description:
    "Get in touch with the developer of DamKoto, an independent Bangladesh market price information platform.",
};

const contacts = [
  {
    number: "01",
    label: "GitHub",
    value: "github.com/Akib-dev1",
    href: "https://github.com/Akib-dev1",
  },
  {
    number: "02",
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-akib",
    href: "https://www.linkedin.com/in/muhammad-akib",
  },
  {
    number: "03",
    label: "Facebook",
    value: "facebook.com/akib.anjum.5",
    href: "https://www.facebook.com/akib.anjum.5",
  },
  {
    number: "04",
    label: "Portfolio",
    value: "akib-dev1-portfolio.netlify.app",
    href: "https://akib-dev1-portfolio.netlify.app",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-6 sm:px-8 sm:py-10">
      {/* Header */}
      <section className="border-b border-neutral-200 pb-10 sm:pb-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Get in touch / Bangladesh
          </p>

          <span className="font-mono text-xs text-neutral-400">
            001 / CONTACT
          </span>
        </div>

        <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 sm:text-7xl lg:text-8xl">
          Let&apos;s
          <br />
          connect.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
          Have a question, suggestion, or feedback about DamKoto? Feel free to
          reach out through any of the channels below.
        </p>
      </section>

      {/* Contact information */}
      <section className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            01 / CONTACT DETAILS
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            Muhammad Akib Anjum.
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            Developer & Creator of DamKoto
          </p>

          <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600">
            DamKoto is an independent project making daily commodity prices and
            community market reports easier to explore and compare across
            Bangladesh.
          </p>

          <p className="mt-5 font-mono text-xs uppercase tracking-wider text-neutral-400">
            Based in Dhaka, Bangladesh
          </p>
        </div>

        <div className="border-t border-neutral-200">
          {contacts.map((contact) => (
            <a
              key={contact.number}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[35px_1fr_24px] items-center gap-3 border-b border-neutral-200 py-6 transition-colors hover:bg-neutral-50 sm:grid-cols-[45px_1fr_28px] sm:py-7"
            >
              <span className="font-mono text-xs text-neutral-400">
                {contact.number}
              </span>

              <div className="min-w-0">
                <h3 className="text-base font-semibold text-neutral-950">
                  {contact.label}
                </h3>

                <p className="mt-1 break-all text-xs text-neutral-500 sm:text-sm">
                  {contact.value}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-lg text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
