import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { EndCta } from "@/components/Sections";
import { careerValues, openings, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Join Xperts Home Mortgage",
  description:
    "Build your career with Xperts Home Mortgage. Join a fast-growing UAE mortgage advisory firm with great rewards, training and a supportive team. Explore our open roles.",
};

export default function CareersPage() {
  return (
    <>
      <PageHead
        crumb="Careers"
        eyebrow="Join our team"
        title="Build your career with Xperts."
        subtitle="We're growing fast and always looking for talented, driven people who love helping clients achieve their property dreams. Your Home, Our Expertise — and your next opportunity."
        actions={<Link href="/contact" className="btn btn-red">Send us your CV <Icon name="arrow-right" className="arr" /></Link>}
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

      {/* OPEN ROLES */}
      <section className="sec-pad services">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Open positions</span>
            <h2 className="h-sec">Current <span className="text-red">openings.</span></h2>
          </Reveal>
          <div className="svc-grid">
            {openings.map(([icon, title, desc], i) => (
              <Reveal key={title} className="svc" delay={(i % 3) + 1}>
                <div className="sic"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={`mailto:${contact.email}?subject=Application: ${encodeURIComponent(title)}`} className="more">
                  Apply now <Icon name="arrow-right" />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: 40 }}>
            <p className="lead" style={{ margin: "0 auto 20px" }}>Don&apos;t see the right role? We&apos;d still love to hear from you.</p>
            <a href={`mailto:${contact.email}?subject=Open Application`} className="btn btn-green">
              Send your CV <Icon name="arrow-right" className="arr" />
            </a>
          </Reveal>
        </div>
      </section>

      <EndCta
        variant="green"
        title="Ready to grow with us?"
        text="Join a team that's redefining mortgage advisory in the UAE."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch <Icon name="arrow-right" className="arr" /></Link>
      </EndCta>
    </>
  );
}
