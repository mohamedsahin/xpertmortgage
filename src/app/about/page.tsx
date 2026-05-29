import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ClientTabs from "@/components/ClientTabs";
import { TrustStrip, EndCta } from "@/components/Sections";
import { AboutSkyline } from "@/components/Skyline";

export const metadata: Metadata = {
  title: "About Us — Xperts Mortgage",
  description:
    "Making home ownership simple, smart & stress-free. Xperts Mortgage helps residents, expats and investors find the right solution with the best rates and expert advice.",
};

export default function AboutPage() {
  return (
    <>
      <PageHead
        crumb="About"
        eyebrow="Your dreams. Our expertise."
        title="Making home ownership simple, smart & stress-free."
        subtitle="We help you find the right mortgage solution with the best rates, expert advice, and a smooth approval process — for every need and every stage of life."
      />

      <TrustStrip />

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
            <AboutSkyline />
            <h3 style={{ position: "relative" }}>Why choose <span className="gold-band">Xperts Mortgage</span></h3>
            <ul className="checklist" style={{ position: "relative" }}>
              {["Access to 20+ leading banks", "Tailored solutions for your needs", "Transparent process, no hidden fees", "Dedicated mortgage experts", "Higher approval success rate"].map((t) => (
                <li key={t}><span className="ck"><Icon name="check" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sec-pad" style={{ background: "var(--ivory-2)" }}>
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Solutions tailored for every type of client</span>
            <h2 className="h-sec">Built around <span className="text-red">your</span> situation.</h2>
          </Reveal>
          <ClientTabs />
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
