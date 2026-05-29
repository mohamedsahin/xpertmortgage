import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Calculator from "@/components/Calculator";
import Accordion from "@/components/Accordion";
import { Tips, EndCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mortgage Calculator — Xperts Mortgage",
  description:
    "Estimate your monthly mortgage payment in seconds. Adjust property price, down payment, interest rate and tenure to see your EMI update live.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHead
        crumb="Calculator"
        eyebrow="Plan with confidence"
        title="Mortgage calculator."
        subtitle="Estimate your monthly payment in seconds. Adjust the property price, down payment, rate and tenure and watch your EMI update live — then get it confirmed by an expert."
      />

      <section className="sec-pad">
        <div className="wrap">
          <Reveal><Calculator /></Reveal>

          <div className="calc-extra">
            <Reveal>
              <span className="eyebrow" style={{ display: "inline-flex" }}>Understanding the numbers</span>
              <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", margin: "14px 0 8px" }}>Key mortgage terms, explained.</h2>
              <p className="lead" style={{ marginBottom: 8 }}>The essentials behind every calculation.</p>
              <Accordion />
            </Reveal>
            <Reveal delay={2}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: 8 }}>Tips for a strong application</h3>
              <p className="lead" style={{ marginBottom: 20 }}>Small steps that improve your approval chances and rate.</p>
              <Tips />
            </Reveal>
          </div>
        </div>
      </section>

      <EndCta
        title="Like what you see? Let's lock in your rate."
        text="Get your estimate confirmed by an expert and access the best rates from 20+ leading banks."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
      </EndCta>
    </>
  );
}
