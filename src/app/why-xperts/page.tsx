import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { DifficultGrid, Timeline, TrustStrip, EndCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Why Choose Xperts — Xperts Home Mortgage",
  description:
    "Your Home, Our Expertise. Discover why clients choose Xperts Home Mortgage — access to 20+ banks, a higher approval rate and specialists who get complex and challenging cases approved.",
};

export default function WhyXpertsPage() {
  return (
    <>
      <PageHead
        crumb="Why Choose Xperts"
        eyebrow="Your Home, Our Expertise."
        title={<>Why clients choose <span className="text-gold">Xperts.</span></>}
        dark
        glow="green"
        subtitle="We don't just find loans — we find the right solutions that fit your life and goals. From competitive rates to the toughest cases, our experts make it possible."
        actions={<Link href="/contact" className="btn btn-red">Get a Free Consultation <Icon name="arrow-right" className="arr" /></Link>}
      />

      <TrustStrip />

      {/* WHY CHOOSE US — reasons */}
      <section className="sec-pad">
        <div className="wrap about">
          <Reveal>
            <span className="eyebrow">Why choose us</span>
            <h2 className="ttl" style={{ margin: "16px 0 18px" }}>Smart solutions, <em>real</em> expertise.</h2>
            <p className="lead">From your first home to your next investment, our dedicated experts guide you end-to-end. We specialize in matching every client with the right product — and getting difficult cases approved.</p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-green">Explore Services</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to an Expert</Link>
            </div>
          </Reveal>
          <Reveal className="about-card" delay={2}>
            <h3 style={{ position: "relative" }}>What you get with <span className="gold-band">Xperts</span></h3>
            <ul className="checklist" style={{ position: "relative" }}>
              {["Access to 20+ leading banks & lenders", "Tailored solutions for your needs", "Transparent process, no hidden fees", "Dedicated mortgage experts", "Higher approval success rate", "Support from application to approval"].map((t) => (
                <li key={t}><span className="ck"><Icon name="check" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SPECIALIZED & COMPLEX CASES (formerly "Difficult Cases") */}
      <section className="sec-pad difficult">
        <div className="wrap">
          <Reveal className="sec-head center" style={{ color: "#fff" }}>
            <span className="eyebrow" style={{ display: "inline-flex", justifyContent: "center" }}>Specialized case solutions</span>
            <h2 className="h-sec" style={{ color: "#fff" }}>If others couldn&apos;t get you approved, <span className="text-red">we will.</span></h2>
            <p className="lead" style={{ color: "#b7b0a6", margin: "16px auto 0" }}>Banks have their rules. We have solutions. Our experts specialize in handling complex and challenging cases and getting you the approval you deserve.</p>
          </Reveal>
          <DifficultGrid />

          <Reveal className="promise">
            <div>
              <span className="eyebrow light" style={{ display: "inline-flex" }}>Our promise to you</span>
              <h3 style={{ marginTop: 14 }}>We don&apos;t just find loans — we find the <span className="text-gold">right solutions</span> that fit your life and goals.</h3>
            </div>
            <ul className="pc">
              {["Access to 20+ leading banks & lenders", "Higher approval success rate", "Tailored solutions for every unique case", "Transparent process, no hidden fees", "End-to-end support from start to finish"].map((t) => (
                <li key={t}><span className="ck"><Icon name="check" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* HOW WE GET CASES APPROVED */}
      <section className="sec-pad process">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>The mortgage process</span>
            <h2 className="h-sec">How we get every case <span className="text-green">approved.</span></h2>
          </Reveal>
          <Timeline />
        </div>
      </section>

      <EndCta
        title="Your home. Our expertise. Let's make it possible."
        text="Let our experts turn your property goals into reality — whatever your situation."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
      </EndCta>
    </>
  );
}
