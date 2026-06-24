import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { careerValues, openings, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Join Xperts Home Mortgage",
  description:
    "Build your career with Xperts Home Mortgage. Join a fast-growing UAE mortgage advisory firm with great rewards, training and a supportive team. Submit your CV today.",
};

// Single, clear call-to-action — opens the visitor's email client with the CV
// submission pre-addressed. (Client confirmed: keep the mailto approach.)
const cvMailto = `mailto:${contact.email}?subject=${encodeURIComponent("CV Submission — Xperts Home Mortgage")}&body=${encodeURIComponent(
  "Hi Xperts Home Mortgage team,\n\nPlease find my CV attached. I'd love to be considered for a suitable opportunity.\n\nName:\nRole of interest:\nPhone:\n\nThank you."
)}`;

export default function CareersPage() {
  return (
    <>
      <PageHead
        crumb="Careers"
        eyebrow="Join our team"
        title="Build your career with Xperts."
        subtitle="Join Xperts Home Mortgage and be part of a growing team dedicated to helping clients achieve their homeownership goals. Submit your CV and we'll contact you when a suitable opportunity becomes available."
        actions={
          <a href={cvMailto} className="btn btn-red">Upload Your CV <Icon name="arrow-right" className="arr" /></a>
        }
      />

      {/* WHY WORK WITH US */}
      <section className="sec-pad">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Why work with us</span>
            <h2 className="h-sec">A place to <span className="text-green">grow.</span></h2>
          </Reveal>
          <div className="feat-row">
            {careerValues.map(([icon, title, desc], i) => (
              <Reveal key={title} className="feat" delay={(i % 4) + 1}>
                <div className="fic"><Icon name={icon} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS (informational — single CTA is the CV section below) */}
      <section className="sec-pad services">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Open positions</span>
            <h2 className="h-sec">Current <span className="text-red">openings.</span></h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>Browse our current roles below, then submit your CV using the form at the bottom of the page.</p>
          </Reveal>
          <div className="svc-grid">
            {openings.map(([icon, title, desc], i) => (
              <Reveal key={title} className="svc" delay={(i % 3) + 1}>
                <div className="sic"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CV UPLOAD — single, clear CTA */}
      <section className="sec-pad endcta green" id="apply">
        <Reveal className="wrap">
          <h2 style={{ marginTop: 0 }}>Submit your CV</h2>
          <p>
            Don&apos;t see the perfect role right now? We&apos;re always keen to meet talented people.
            Send us your CV and we&apos;ll be in touch when a suitable opportunity comes up.
          </p>
          <div className="ec-actions">
            <a href={cvMailto} className="btn btn-light">Upload Your CV <Icon name="arrow-right" className="arr" /></a>
            <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>Contact us</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
