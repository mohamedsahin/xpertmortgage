import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { DifficultGrid, Timeline, EndCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Difficult Cases — Xperts Mortgage",
  description:
    "Pre-approval denied? We turn 'No' into 'Yes'. We specialize in difficult mortgage cases: low credit score, previously declined, self-employed, high debts and complex situations.",
};

export default function DifficultCasesPage() {
  return (
    <>
      <PageHead
        crumb="Difficult Cases"
        eyebrow="Pre-approval denied?"
        eyebrowVariant="red"
        dark
        glow="red"
        title={<>We turn <span className="text-red">&apos;No&apos;</span> into <span className="text-gold">&apos;Yes&apos;.</span></>}
        script={
          <p style={{ fontFamily: "var(--font-playfair),\"Playfair Display\",serif", fontStyle: "italic", color: "var(--gold-soft)", fontSize: "1.4rem", marginTop: 14 }}>
            Banks have their rules. We have solutions.
          </p>
        }
        subtitle="Our experts specialize in handling difficult cases and getting you the approval you deserve. No matter how complex your case is — we make it possible."
        actions={<Link href="/contact" className="btn btn-red">Get my case reviewed <Icon name="arrow-right" className="arr" /></Link>}
      />

      <section className="sec-pad difficult">
        <div className="wrap">
          <Reveal className="sec-head center" style={{ color: "#fff" }}>
            <span className="eyebrow" style={{ display: "inline-flex", justifyContent: "center" }}>We specialize in difficult cases</span>
            <h2 className="h-sec" style={{ color: "#fff" }}>If others couldn&apos;t get you approved, <span className="text-red">we will.</span></h2>
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

      <section className="sec-pad process">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>The mortgage process</span>
            <h2 className="h-sec">How we get difficult cases <span className="text-green">approved.</span></h2>
          </Reveal>
          <Timeline />
        </div>
      </section>

      <EndCta
        title="Your dreams. Our expertise. Let's make it possible."
        text="Let our experts turn your dreams into reality — whatever your situation."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch Today <Icon name="arrow-right" className="arr" /></Link>
      </EndCta>
    </>
  );
}
