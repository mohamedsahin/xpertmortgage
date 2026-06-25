import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import DocsAccordion from "@/components/DocsAccordion";
import Team from "@/components/Team";
import { TrustStrip, EndCta } from "@/components/Sections";
import { AboutSkyline } from "@/components/Skyline";
import { missionVision } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Xperts Home Mortgage",
  description:
    "Your Home, Our Expertise. Xperts Home Mortgage helps residents, expats and investors find the right solution with the best rates, expert advice and a smooth approval process.",
};

export default function AboutPage() {
  return (
    <>
      <PageHead
        crumb="About Us"
        eyebrow="Your Home, Our Expertise."
        title="Making home ownership simple, smart & stress-free."
        subtitle="We help you find the right mortgage solution with the best rates, expert advice, and a smooth approval process — for every need and every stage of life."
      />

      <TrustStrip />

      <section className="sec-pad">
        <div className="wrap about">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="ttl" style={{ margin: "16px 0 18px" }}>Smart solutions, <em>real</em> expertise.</h2>
            <p className="lead">From your first home to your next investment, our dedicated experts guide you end-to-end. We specialize in matching every client with the right product — and getting difficult cases approved.</p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-green">Explore Services</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to an Expert</Link>
            </div>
          </Reveal>
          <Reveal className="about-card" delay={2}>
            <AboutSkyline />
            <h3 style={{ position: "relative" }}>Why choose <span className="gold-band">Xperts Home Mortgage</span></h3>
            <ul className="checklist" style={{ position: "relative" }}>
              {["Access to 20+ leading banks", "Tailored solutions for your needs", "Transparent process, no hidden fees", "Dedicated mortgage experts", "Higher approval success rate"].map((t) => (
                <li key={t}><span className="ck"><Icon name="check" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="sec-pad" style={{ background: "var(--ivory-2)" }}>
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>What drives us</span>
            <h2 className="h-sec">Our mission &amp; <span className="text-red">vision.</span></h2>
          </Reveal>
          <div className="mv-grid">
            <Reveal className="mv-card">
              <div className="mv-ic"><Icon name="badge-check" /></div>
              <h3>Our Mission</h3>
              <p>{missionVision.mission}</p>
            </Reveal>
            <Reveal className="mv-card" delay={2}>
              <div className="mv-ic"><Icon name="trending-up" /></div>
              <h3>Our Vision</h3>
              <p>{missionVision.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="sec-pad" style={{ background: "var(--ivory-2)" }}>
        <div className="wrap docs-wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Get application-ready</span>
            <h2 className="h-sec">Documents <span className="text-green">required.</span></h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>Select your category to see exactly what you&apos;ll need. Having the right documents ready speeds up your approval.</p>
          </Reveal>
          <DocsAccordion />
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="sec-pad">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Meet the experts</span>
            <h2 className="h-sec">Our <span className="text-red">team.</span></h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>Dedicated mortgage professionals committed to getting you the right solution.</p>
          </Reveal>
          <Team />
        </div>
      </section>

      <EndCta
        variant="green"
        title="Let's make your dream home a reality."
        text="Speak to a dedicated mortgage expert today — free consultation, no obligation."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
      </EndCta>
    </>
  );
}
