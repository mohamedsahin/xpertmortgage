import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { Tips, TrustStrip, EndCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Learn — Understanding Mortgages | Xperts Mortgage",
  description:
    "Understand mortgages clearly: what a mortgage is, interest rate, tenure, down payment and EMI — plus tips for a strong mortgage application.",
};

export default function LearnPage() {
  return (
    <>
      <PageHead
        crumb="Learn"
        eyebrow="Understanding mortgages"
        title="Smart solutions, clearly explained."
        subtitle="The essentials of mortgages — and how to put yourself in the strongest possible position before you apply."
      />

      <section className="sec-pad">
        <div className="wrap learn-grid">
          <Reveal>
            <span className="eyebrow" style={{ display: "inline-flex" }}>The basics</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.2vw,2.5rem)", margin: "14px 0 18px" }}>Understanding mortgages.</h2>
            <Accordion />
          </Reveal>
          <Reveal delay={2}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: 8 }}>Tips for a strong application</h3>
            <p className="lead" style={{ marginBottom: 22 }}>Small steps that meaningfully improve your approval chances.</p>
            <Tips />
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      <EndCta
        title="Have a question we didn't cover?"
        text="Our experts are happy to walk you through it — no jargon, no obligation."
      >
        <Link href="/contact" className="btn btn-light">Ask an Expert <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/calculator" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>Try the calculator</Link>
      </EndCta>
    </>
  );
}
