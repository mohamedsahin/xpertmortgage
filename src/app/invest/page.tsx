import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { BgSkyline } from "@/components/Skyline";
import { FeatureRow, ServicesGrid, EndCta, Photo } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Why Invest in Dubai — Xperts Mortgage",
  description:
    "Dubai isn't just a place to live, it's a place to build wealth. High rental yields, tax-free income, strong capital growth and a global investor hub.",
};

export default function InvestPage() {
  return (
    <>
      <PageHead
        crumb="Why Dubai"
        eyebrow="The time to invest is now"
        title="Why Dubai is the positive choice to invest now."
        subtitle="A thriving economy. World-class infrastructure. A tax-free environment. High rental yields and strong capital appreciation. Dubai isn't just growing — it's outperforming."
      />

      <section className="sec-pad invest">
        <BgSkyline />
        <div className="wrap">
          <div className="invest-grid">
            <Reveal>
              <span className="eyebrow light">Invest in Dubai. Build wealth. Secure your future.</span>
              <h2 style={{ margin: "16px 0 0" }}>Dubai isn&apos;t just a place to live, it&apos;s a place to <span className="text-gold">build wealth.</span></h2>
              <p className="sub">High rental yields. Tax-free income. Strong growth. Global demand. Take a mortgage from Xperts Mortgage and invest in Dubai properties with confidence.</p>
              <div className="stat-row">
                <Reveal className="stat"><div className="sn"><Counter value={8} suffix="%" /></div><div className="st">High Rental Yields</div><div className="sd">6–8% average returns</div></Reveal>
                <Reveal className="stat" delay={1}><div className="sn"><Icon name="trending-up" size={34} /></div><div className="st">Strong Capital Growth</div><div className="sd">Property values keep rising</div></Reveal>
                <Reveal className="stat" delay={2}><div className="sn"><Counter value={100} suffix="%" /></div><div className="st">100% Tax-Free</div><div className="sd">Keep more of what you earn</div></Reveal>
                <Reveal className="stat" delay={3}><div className="sn"><Icon name="globe" size={34} /></div><div className="st">Global Investor Hub</div><div className="sd">Safe, secure &amp; investor-friendly</div></Reveal>
              </div>
              <div style={{ marginTop: 30 }}><Link href="/contact" className="btn btn-light">Start Investing <Icon name="arrow-right" className="arr" /></Link></div>
              <p style={{ color: "#9fbdb0", fontSize: ".8rem", marginTop: 16 }}>*Returns vary by location and property type.</p>
            </Reveal>
            <Reveal className="invest-photo" delay={2}>
              <Photo src="/images/dubai-marina.jpg" alt="Aerial view of Dubai's coastline and the Burj Al Arab" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Take mortgage from us &amp; invest in Dubai property</span>
            <h2 className="h-sec">We make it <span className="text-red">easy.</span></h2>
          </Reveal>
          <FeatureRow />
        </div>
      </section>

      <section className="sec-pad services">
        <div className="wrap">
          <Reveal className="sec-top">
            <div>
              <span className="eyebrow" style={{ display: "inline-flex" }}>Mortgage solutions we offer</span>
              <h2 className="h-sec" style={{ marginTop: 12 }}>Finance every kind of <span className="text-green">Dubai property.</span></h2>
            </div>
            <Link href="/services" className="link-arrow">View all services <Icon name="arrow-right" /></Link>
          </Reveal>
          <ServicesGrid limit={6} />
        </div>
      </section>

      <EndCta
        variant="green"
        title="The right time to invest is now. The right partner is us."
        text="Take a mortgage from Xperts Mortgage and turn your investment dreams into reality."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/calculator" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>Estimate my returns</Link>
      </EndCta>
    </>
  );
}
