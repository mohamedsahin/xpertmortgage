import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { InsightsGrid, Tips, TrustStrip, EndCta } from "@/components/Sections";
import { basics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights — Mortgage Tips & UAE Property Updates | Xperts Home Mortgage",
  description:
    "Mortgage tips, home-buying guides, UAE property market updates, eligibility, refinancing and investment property finance — clear, expert insights from Xperts Home Mortgage.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHead
        crumb="Insights"
        eyebrow="Insights & resources"
        title="Smart insights, clearly explained."
        subtitle="Mortgage tips, market updates and practical guides — everything you need to put yourself in the strongest possible position before you apply."
      />

      {/* CATEGORIES */}
      <section className="sec-pad services">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Explore by topic</span>
            <h2 className="h-sec">Insights for every <span className="text-red">stage.</span></h2>
          </Reveal>
          <InsightsGrid />
        </div>
      </section>

      {/* BASICS + TIPS */}
      <section className="sec-pad">
        <div className="wrap learn-grid">
          <Reveal>
            <span className="eyebrow" style={{ display: "inline-flex" }}>The basics</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.2vw,2.5rem)", margin: "14px 0 18px" }}>Understanding mortgages.</h2>
            <Accordion items={basics} />
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
