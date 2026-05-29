import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Timeline, FeatureRow, EndCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "How It Works — Xperts Mortgage",
  description:
    "A simple, transparent mortgage journey from consultation to disbursement — handled end-to-end by your dedicated Xperts Mortgage expert.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHead
        crumb="How It Works"
        eyebrow="The mortgage process"
        title="From consultation to keys in hand."
        subtitle="A simple, transparent journey — handled end-to-end by your dedicated mortgage expert, with clear guidance at every step."
        actions={<Link href="/contact" className="btn btn-red">Start step 1 — book a consultation <Icon name="arrow-right" className="arr" /></Link>}
      />

      <section className="sec-pad process">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Six simple steps</span>
            <h2 className="h-sec">How it <span className="text-green">works.</span></h2>
          </Reveal>
          <Timeline />
        </div>
      </section>

      <section className="sec-pad" style={{ background: "var(--ivory)" }}>
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Why our process works</span>
            <h2 className="h-sec">Built to get you <span className="text-red">approved.</span></h2>
          </Reveal>
          <FeatureRow />
          <div className="about" style={{ marginTop: 50 }}>
            <Reveal>
              <h2 className="ttl" style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", marginBottom: 16 }}>We handle the hard part, so you don&apos;t have to.</h2>
              <p className="lead">From paperwork to lender negotiations, your dedicated expert manages the entire process — keeping it transparent, fast and stress-free.</p>
              <div style={{ marginTop: 26 }}><Link href="/services" className="btn btn-green">Explore our solutions <Icon name="arrow-right" className="arr" /></Link></div>
            </Reveal>
            <Reveal className="about-card" delay={2}>
              <h3>What you get with Xperts</h3>
              <ul className="checklist">
                {["A single dedicated expert, start to finish", "Access to 20+ leading banks & lenders", "Transparent process, no hidden fees", "Quick approval with the best loan terms", "Support from application to approval and beyond"].map((t) => (
                  <li key={t}><span className="ck"><Icon name="check" /></span>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <EndCta
        variant="green"
        title="Ready to take the next step?"
        text="Our experts are ready to guide you from consultation to disbursement."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
      </EndCta>
    </>
  );
}
