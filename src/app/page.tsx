import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import { TrustStrip, ServicesGrid, InsightsGrid, EndCta, Photo } from "@/components/Sections";
import { AboutSkyline, BgSkyline } from "@/components/Skyline";
import { services } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* ABOUT US */}
      <section className="sec-pad">
        <div className="wrap about">
          <Reveal>
            <span className="eyebrow">About us</span>
            <h2 className="ttl" style={{ margin: "16px 0 18px" }}>
              Simple, <em>Smart</em><br />&amp; Stress-Free.
            </h2>
            <p className="lead">
              We help you find the right mortgage solution with the best rates, expert advice, and a
              smooth approval process — whether you&apos;re a first-time buyer, an expat, or a seasoned investor.
            </p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-green">Explore Services</Link>
              <Link href="/about" className="btn btn-ghost">About Us</Link>
            </div>
          </Reveal>
          <Reveal className="about-card" delay={2}>
            <AboutSkyline />
            <h3 style={{ position: "relative" }}>Why choose <span className="gold-band">Xperts Home Mortgage</span></h3>
            <ul className="checklist" style={{ position: "relative" }}>
              {["Access to 20+ leading banks", "Tailored solutions for your needs", "Transparent process, no hidden fees", "Dedicated mortgage experts", "Support from application to approval"].map((t) => (
                <li key={t}><span className="ck"><Icon name="check" /></span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE XPERTS BAND */}
      <section className="sec-pad band">
        <BgSkyline />
        <div className="wrap">
          <div className="band-grid">
            <Reveal>
              <span className="eyebrow light">Why choose Xperts</span>
              <h2 style={{ margin: "16px 0 0" }}>If others couldn&apos;t get you approved, <span className="text-gold">we will.</span></h2>
              <p className="sub">Banks have their rules. We have solutions. From competitive rates to the toughest, most complex cases — our experts make it possible.</p>
              <div className="minihero-stats" style={{ marginTop: 0 }}>
                <div className="ms"><div className="n">20+</div><div className="l">Leading banks</div></div>
                <div className="ms"><div className="n"><Counter value={98} suffix="%" /></div><div className="l">Client focus</div></div>
                <div className="ms"><div className="n"><Icon name="badge-check" size={26} /></div><div className="l">Higher approvals</div></div>
                <div className="ms"><div className="n"><Icon name="user-check" size={26} /></div><div className="l">Dedicated experts</div></div>
              </div>
              <div style={{ marginTop: 30 }}>
                <Link href="/why-xperts" className="btn btn-light">Why choose Xperts <Icon name="arrow-right" className="arr" /></Link>
              </div>
            </Reveal>
            <Reveal className="band-photo" delay={2}>
              <Photo src="/images/dubai-marina.jpg" alt="Aerial view of Dubai's coastline and the Burj Al Arab" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="sec-pad services">
        <div className="wrap">
          <Reveal className="sec-top">
            <div>
              <span className="eyebrow" style={{ display: "inline-flex" }}>Mortgage solutions for every need</span>
              <h2 className="h-sec" style={{ marginTop: 12 }}>One Company,<br /><span className="text-red">All Mortgage Solutions.</span></h2>
            </div>
            <Link href="/services" className="link-arrow">View all {services.length} services <Icon name="arrow-right" /></Link>
          </Reveal>
          <ServicesGrid />
          <Reveal style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-green">See every solution <Icon name="arrow-right" className="arr" /></Link>
          </Reveal>
        </div>
      </section>

      {/* EMI CALCULATOR CTA */}
      <section className="sec-pad" style={{ background: "var(--ivory-2)" }}>
        <div className="wrap">
          <div className="band-grid" style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--r-xl)", padding: "clamp(32px,5vw,60px)", boxShadow: "var(--shadow-md)" }}>
            <Reveal>
              <span className="eyebrow" style={{ display: "inline-flex" }}>Plan with confidence</span>
              <h2 style={{ color: "var(--ink)", fontSize: "clamp(2rem,3.6vw,2.8rem)", margin: "14px 0 14px" }}>Know your monthly payment <span className="text-red">before</span> you commit.</h2>
              <p className="lead">Use our interactive EMI calculator to estimate your monthly payment in seconds — adjust price, down payment, rate and tenure and watch it update live.</p>
              <div style={{ marginTop: 28 }}><Link href="/calculator" className="btn btn-red"><Icon name="calculator" /> Open the EMI calculator</Link></div>
            </Reveal>
            <Reveal delay={2} style={{ display: "grid", placeItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.6rem,6vw,4rem)", color: "var(--green)", lineHeight: 1 }}>AED 8,432<span style={{ fontSize: "1rem", color: "var(--gold)" }}>/mo</span></div>
                <p style={{ color: "var(--muted-2)", marginTop: 6 }}>e.g. AED 2M property · 20% down · 3.99% · 25 yrs</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSIGHTS / BLOGS */}
      <section className="sec-pad services">
        <div className="wrap">
          <Reveal className="sec-top">
            <div>
              <span className="eyebrow" style={{ display: "inline-flex" }}>Insights &amp; resources</span>
              <h2 className="h-sec" style={{ marginTop: 12 }}>Tips, guides &amp; <span className="text-green">market updates.</span></h2>
            </div>
            <Link href="/insights" className="link-arrow">View all insights <Icon name="arrow-right" /></Link>
          </Reveal>
          <InsightsGrid />
        </div>
      </section>

      {/* CONTACT */}
      <EndCta
        title="Let's make your dream home a reality."
        text="Your home. Our expertise. Speak to a dedicated mortgage expert today — free consultation, no obligation."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/why-xperts" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>Why choose Xperts?</Link>
      </EndCta>
    </>
  );
}
