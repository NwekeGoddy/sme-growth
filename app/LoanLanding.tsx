"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Support your business growth",
    description:
      "Explore financing options that may help your business take advantage of new opportunities.",
    icon: "growth",
  },
  {
    number: "02",
    title: "Plan with confidence",
    description:
      "Understand the application process and prepare the information needed for your enquiry.",
    icon: "plan",
  },
  {
    number: "03",
    title: "Prepare for what's next",
    description:
      "Learn about available financing options and the requirements relevant to your business.",
    icon: "future",
  },
];

const businessNeeds = [
  {
    title: "Working capital",
    description:
      "Explore financing options for eligible day-to-day business expenses.",
    icon: "capital",
  },
  {
    title: "Stock and inventory",
    description:
      "Consider financing options that may support inventory and stock requirements.",
    icon: "inventory",
  },
  {
    title: "Equipment and assets",
    description:
      "Explore options for eligible equipment purchases and business assets.",
    icon: "equipment",
  },
  {
    title: "Business expansion",
    description:
      "Find out what financing options may be available for your next stage of growth.",
    icon: "expansion",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "Share some basic information about your business and what you want to achieve.",
  },
  {
    number: "02",
    title: "Prepare your documents",
    description:
      "Gather your business registration, identification and financial documents as requested.",
  },
  {
    number: "03",
    title: "Discuss your options",
    description:
      "Contact FirstBank to understand the available products, eligibility requirements and next steps.",
  },
];

const faqs = [
  {
    question: "Who can apply for SME financing?",
    answer:
      "Financing is subject to the eligibility criteria for the specific FirstBank product. Business type, registration status, financial information and other requirements may be considered. Contact FirstBank for the current eligibility criteria.",
  },
  {
    question: "What can business financing be used for?",
    answer:
      "Depending on the product, financing may support eligible business needs such as working capital, inventory, equipment or expansion. Confirm the permitted uses with FirstBank before applying.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Requirements depend on the product and your business circumstances. You may be asked for business registration documents, identification, financial statements, bank statements and other supporting information.",
  },
  {
    question: "What are the interest rates and repayment terms?",
    answer:
      "Interest rates, fees, repayment periods, loan limits and other terms depend on the specific product and the bank's assessment. Contact FirstBank for current, verified terms before making a financial decision.",
  },
  {
    question: "How do I begin an application?",
    answer:
      "Start by contacting FirstBank through its official website or an authorised branch. The bank can explain the relevant product requirements and direct you to the appropriate application channel.",
  },
];

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );

    case "growth":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 17 9 11l4 4 8-9" />
          <path d="M15 6h6v6" />
          <path d="M4 21h16" />
        </svg>
      );

    case "plan":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );

    case "future":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="m8 3 4-1 4 1" />
        </svg>
      );

    case "capital":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <path d="M7 6V4h10v2" />
          <path d="M3 11h18" />
          <path d="M10 14h4" />
        </svg>
      );

    case "inventory":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );

    case "equipment":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      );

    case "expansion":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V9l7-5 7 5v12" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 10h.01M15 10h.01" />
        </svg>
      );

    case "check":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "menu":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );

    case "close":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m18 6-12 12M6 6l12 12" />
        </svg>
      );

    case "external":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M14 4h6v6" />
          <path d="m20 4-9 9" />
          <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
        </svg>
      );

    default:
      return null;
  }
}

export default function LoanLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [businessNeed, setBusinessNeed] = useState("");

  useEffect(() => {
    document.body.style.overflow = formOpen ? "hidden" : "";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFormOpen(false);
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [formOpen]);

  function openForm() {
    setSubmitted(false);
    setFormOpen(true);
    setMenuOpen(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#172B45]">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-white p-3 text-[#002855] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[82px] max-w-[1240px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <a
            href="#home"
            className="flex shrink-0 items-center"
            aria-label="FirstBank SME Growth Loan home"
          >
            <Image
              src="/images/firstbank-logo.svg"
              alt="FirstBank Nigeria"
              width={210}
              height={62}
              priority
              className="h-auto w-[155px] sm:w-[185px]"
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            <a
              href="#benefits"
              className="text-sm font-medium text-slate-700 transition hover:text-[#002855]"
            >
              Benefits
            </a>
            <a
              href="#financing"
              className="text-sm font-medium text-slate-700 transition hover:text-[#002855]"
            >
              Financing needs
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-700 transition hover:text-[#002855]"
            >
              How it works
            </a>
            <a
              href="#faqs"
              className="text-sm font-medium text-slate-700 transition hover:text-[#002855]"
            >
              FAQs
            </a>
          </nav>

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#002855] px-6 text-sm font-semibold text-white transition hover:bg-[#003B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
            >
              Make an enquiry
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-[#002855] transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00] lg:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden"
          >
            {[
              ["Benefits", "#benefits"],
              ["Financing needs", "#financing"],
              ["How it works", "#how-it-works"],
              ["FAQs", "#faqs"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-0"
              >
                {label}
              </a>
            ))}

            <button
              type="button"
              onClick={openForm}
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#002855] px-5 text-sm font-semibold text-white"
            >
              Make an enquiry
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </nav>
        )}
      </header>

      <div id="main-content">
        <section
          id="home"
          className="relative isolate bg-[#F3F6FA]"
        >
          <div className="absolute -right-32 -top-28 -z-10 h-[420px] w-[420px] rounded-full bg-[#EAAA00]/10 blur-3xl" />

          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#002855]/10 bg-white px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#EAAA00]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#002855]">
                  FirstBank SME financing
                </span>
              </div>

              <h1 className="max-w-[650px] text-[clamp(2.65rem,5.4vw,4.7rem)] font-bold leading-[1.06] tracking-[-0.055em] text-[#002855]">
                Your business has{" "}
                <span className="relative inline-block">
                  bigger plans.
                  <span className="absolute -bottom-1 left-0 -z-0 h-2 w-full bg-[#EAAA00]/70 sm:h-3" />
                </span>{" "}
                Let&apos;s explore what&apos;s next.
              </h1>

              <p className="mt-6 max-w-[550px] text-base leading-8 text-slate-600 sm:text-lg">
                Every growing business has its next milestone. Explore
                financing options with FirstBank and discover the possibilities
                for your business&apos;s next chapter.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#002855] px-7 text-sm font-semibold text-white shadow-lg shadow-[#002855]/10 transition hover:-translate-y-0.5 hover:bg-[#003B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
                >
                  Explore financing options
                  <Icon name="arrow" className="h-5 w-5" />
                </button>

                <a
                  href="#how-it-works"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-[#002855] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
                >
                  Discover how it works
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="mt-9 flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#EAAA00]/20 text-[#002855]">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <p className="max-w-[440px] text-sm leading-6 text-slate-600">
                  Get started by understanding your options, preparing your
                  information and taking the next step for your business.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-[36px] border-r-8 border-t-8 border-[#EAAA00] sm:-right-6 sm:-top-6" />

              <div className="relative overflow-hidden rounded-[20px] rounded-br-[76px] bg-[#DCE5EF] shadow-2xl shadow-[#002855]/15">
                <Image
                  src="/images/firstbank-sme-hero.webp"
                  alt="Business owners working together to plan the future of their business"
                  width={1100}
                  height={1200}
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="h-[360px] w-full object-cover sm:h-[470px] lg:h-[530px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#001C3B]/85 via-[#001C3B]/25 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7CE67]">
                    Built around your ambition
                  </p>
                  <p className="mt-2 max-w-[360px] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Every big idea starts with a next step.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-7 left-4 right-4 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-7 sm:right-auto sm:w-[310px] sm:p-5">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#EAAA00]/20 text-[#002855]">
                    <Icon name="growth" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#002855]">
                      Ready for your next move?
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Explore options for your business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Financing highlights"
          className="border-b border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-[1240px] gap-7 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:px-10">
            {[
              {
                title: "Understand your options",
                text: "Learn about financing possibilities for your business.",
              },
              {
                title: "Prepare with confidence",
                text: "Know what information may be required.",
              },
              {
                title: "Take your next step",
                text: "Connect with the bank to discuss your needs.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-4 sm:px-5 ${
                  index !== 2 ? "sm:border-r sm:border-slate-200" : ""
                }`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#F3F6FA] text-[#002855]">
                  <Icon
                    name={index === 0 ? "plan" : index === 1 ? "shield" : "growth"}
                  />
                </span>
                <div>
                  <h2 className="font-semibold text-[#002855]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto mb-12 max-w-[690px] text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6500]">
                A partner for your journey
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#002855] sm:text-4xl lg:text-5xl">
                Give your business room to grow
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                The right financing conversation starts with understanding
                your business, your goals and the opportunities ahead.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="group rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#EAAA00]/80 hover:shadow-xl hover:shadow-[#002855]/5 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-[#F3F6FA] text-[#002855] transition group-hover:bg-[#EAAA00]/20">
                      <Icon name={benefit.icon} className="h-7 w-7" />
                    </span>
                    <span className="text-sm font-bold tracking-widest text-[#A4B3C5]">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#002855]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>

                  <a
                    href="#how-it-works"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002855] transition hover:text-[#8B6500] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
                  >
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="financing" className="bg-[#F3F6FA] py-20 sm:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-6 md:grid-cols-[1fr_0.7fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6500]">
                  Your business needs
                </p>
                <h2 className="mt-4 max-w-[620px] text-3xl font-bold leading-tight tracking-tight text-[#002855] sm:text-4xl">
                  What does your next stage of growth look like?
                </h2>
              </div>

              <p className="max-w-[460px] text-sm leading-7 text-slate-600 md:justify-self-end">
                Different businesses have different priorities. Explore some
                common business needs and discuss suitable options with
                FirstBank.
              </p>
            </div>

            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {businessNeeds.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#002855]/5 sm:p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#002855] text-[#F7CE67]">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>

                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#8B6500]">
                    Business need 0{index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#002855]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Financing availability and permitted uses depend on the specific
              product, eligibility criteria and the bank&apos;s assessment.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-[700px] text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6500]">
                The next step starts here
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#002855] sm:text-4xl">
                A straightforward way to get started
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Get your information ready, ask the right questions and learn
                about the financing options that may suit your business.
              </p>
            </div>

            <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              <div className="absolute left-[16.5%] right-[16.5%] top-7 hidden h-px bg-[#EAAA00]/70 md:block" />

              {steps.map((step) => (
                <article key={step.number} className="relative text-center">
                  <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-[#002855] text-sm font-bold text-white shadow-md shadow-[#002855]/10">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-[#002855]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[330px] text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={openForm}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#002855] px-7 text-sm font-semibold text-white transition hover:bg-[#003B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
              >
                Start an enquiry
                <Icon name="arrow" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#002855] py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#003B65] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
              <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
              <div className="absolute -right-4 -top-12 h-52 w-52 rounded-full border border-[#EAAA00]/30" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-[690px]">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F7CE67]">
                    <span className="h-1 w-7 bg-[#EAAA00]" />
                    Your next chapter
                  </span>

                  <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    Every business milestone begins with a decision.
                  </h2>

                  <p className="mt-4 max-w-[600px] text-sm leading-7 text-blue-100 sm:text-base">
                    Take the first step towards understanding your business
                    financing options and what may be possible for your goals.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-md bg-[#EAAA00] px-7 text-sm font-bold text-[#002855] transition hover:bg-[#F7CE67] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                >
                  Make an enquiry
                  <Icon name="arrow" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6500]">
                Frequently asked questions
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#002855] sm:text-4xl">
                What you need to know
              </h2>
              <p className="mx-auto mt-4 max-w-[580px] text-sm leading-7 text-slate-600 sm:text-base">
                Here are answers to some common questions about getting started
                with a business financing enquiry.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-[#002855] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAAA00] sm:text-base">
                    <span>{faq.question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-xl font-normal text-[#002855] transition group-open:rotate-45 group-open:border-[#EAAA00] group-open:bg-[#EAAA00]/10">
                      +
                    </span>
                  </summary>

                  <p className="max-w-[760px] pb-5 pr-8 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <p className="mt-7 text-center text-sm text-slate-500">
              Need more information? Visit the{" "}
              <a
                href="https://www.firstbanknigeria.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#002855] underline decoration-[#EAAA00] decoration-2 underline-offset-4 hover:text-[#8B6500]"
              >
                official FirstBank website
                <Icon name="external" className="h-3.5 w-3.5" />
              </a>
              .
            </p>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-[#F3F6FA]">
          <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <a href="#home" aria-label="Back to top">
                <Image
                  src="/images/firstbank-logo.svg"
                  alt="FirstBank Nigeria"
                  width={190}
                  height={56}
                  className="h-auto w-[150px]"
                />
              </a>

              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                <a
                  href="#benefits"
                  className="text-sm text-slate-600 hover:text-[#002855]"
                >
                  Benefits
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm text-slate-600 hover:text-[#002855]"
                >
                  How it works
                </a>
                <a
                  href="#faqs"
                  className="text-sm text-slate-600 hover:text-[#002855]"
                >
                  FAQs
                </a>
                <a
                  href="https://www.firstbanknigeria.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-[#002855]"
                >
                  FirstBank website
                  <Icon name="external" className="h-3.5 w-3.5" />
                </a>
              </nav>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs leading-6 text-slate-500">
                This landing-page concept is for demonstration purposes.
                Product availability, eligibility, interest rates, fees, loan
                limits and repayment terms must be verified with FirstBank
                before publication. This page does not represent a loan offer
                or approval.
              </p>

              <p className="mt-4 text-xs text-slate-500">
                © {new Date().getFullYear()} FirstBank SME Growth Loan concept.
                All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#00162F]/75 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setFormOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="my-auto w-full max-w-[540px] rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-5 border-b border-slate-200 px-6 py-6 sm:px-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B6500]">
                  SME financing
                </span>
                <h2
                  id="enquiry-title"
                  className="mt-2 text-2xl font-bold text-[#002855]"
                >
                  Let&apos;s talk about your business
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share your details to preview the enquiry experience.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setFormOpen(false)}
                aria-label="Close enquiry form"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 text-[#002855] transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAAA00]"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-6 sm:px-8">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#EAAA00]/50 bg-[#F3F6FA] p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#EAAA00]/25 text-[#002855]">
                    <Icon name="check" className="h-6 w-6" />
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-[#002855]">
                    Thank you, {fullName}!
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Your demo enquiry details have been validated in this
                    interface. They have not been sent to FirstBank. Connect
                    this form to an approved backend and application process
                    before accepting real customer information.
                  </p>

                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#002855] px-6 text-sm font-semibold text-white transition hover:bg-[#003B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-sm font-semibold text-[#002855]"
                    >
                      Full name
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      required
                      maxLength={100}
                      placeholder="Enter your full name"
                      className="min-h-12 w-full rounded-lg border border-slate-300 px-4 text-sm text-[#172B45] outline-none transition placeholder:text-slate-400 focus:border-[#002855] focus:ring-2 focus:ring-[#EAAA00]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business-name"
                      className="mb-2 block text-sm font-semibold text-[#002855]"
                    >
                      Business name
                    </label>
                    <input
                      id="business-name"
                      name="businessName"
                      type="text"
                      autoComplete="organization"
                      value={businessName}
                      onChange={(event) => setBusinessName(event.target.value)}
                      required
                      maxLength={120}
                      placeholder="Enter your business name"
                      className="min-h-12 w-full rounded-lg border border-slate-300 px-4 text-sm text-[#172B45] outline-none transition placeholder:text-slate-400 focus:border-[#002855] focus:ring-2 focus:ring-[#EAAA00]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#002855]"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      maxLength={160}
                      placeholder="you@example.com"
                      className="min-h-12 w-full rounded-lg border border-slate-300 px-4 text-sm text-[#172B45] outline-none transition placeholder:text-slate-400 focus:border-[#002855] focus:ring-2 focus:ring-[#EAAA00]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business-need"
                      className="mb-2 block text-sm font-semibold text-[#002855]"
                    >
                      What does your business need?
                    </label>
                    <select
                      id="business-need"
                      name="businessNeed"
                      value={businessNeed}
                      onChange={(event) => setBusinessNeed(event.target.value)}
                      required
                      className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-[#172B45] outline-none transition focus:border-[#002855] focus:ring-2 focus:ring-[#EAAA00]/50"
                    >
                      <option value="">Select a business need</option>
                      <option value="Working capital">Working capital</option>
                      <option value="Stock and inventory">
                        Stock and inventory
                      </option>
                      <option value="Equipment and assets">
                        Equipment and assets
                      </option>
                      <option value="Business expansion">
                        Business expansion
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#002855] px-6 text-sm font-bold text-white transition hover:bg-[#003B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAAA00]"
                  >
                    Continue
                    <Icon name="arrow" className="h-5 w-5" />
                  </button>

                  <p className="text-xs leading-5 text-slate-500">
                    This is a frontend demo form. It does not send or store
                    your information. Connect an approved backend and privacy
                    notice before using it with real customers.
                  </p>
                </form>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}