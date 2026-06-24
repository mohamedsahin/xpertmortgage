import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { TrustStrip, EndCta } from "@/components/Sections";
import { serviceDetails, getService } from "@/lib/data";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: "Service — Xperts Home Mortgage" };
  return {
    title: `${svc.title} — Xperts Home Mortgage`,
    description: svc.tagline,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  // Pass the selected service to the enquiry form so the lead notification
  // captures exactly which service this enquiry came from.
  const enquireHref = `/contact?interest=${encodeURIComponent(svc.interest)}`;

  return (
    <>
      <PageHead
        crumb={svc.title}
        eyebrow="Mortgage solution"
        title={svc.tagline}
        subtitle={svc.intro[0]}
        skyline
        actions={
          <>
            <Link href={enquireHref} className="btn btn-red">Enquire about {svc.title} <Icon name="arrow-right" className="arr" /></Link>
            <Link href="/calculator" className="btn btn-light"><Icon name="calculator" /> Calculate My EMI</Link>
          </>
        }
      />

      <section className="sec-pad">
        <div className="wrap article">
          <Reveal className="article-body">
            {svc.intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2>What you get</h2>
            <ul className="checklist">
              {svc.highlights.map((h) => (
                <li key={h}><span className="ck"><Icon name="check" /></span>{h}</li>
              ))}
            </ul>

            <div className="article-who">
              <div className="sic"><Icon name={svc.icon} /></div>
              <div>
                <h4>Who it&apos;s for</h4>
                <p>{svc.forWho}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="article-aside" delay={2}>
            <div className="aside-card">
              <h3>Interested in {svc.title}?</h3>
              <p>Tell us a little about your goals and we&apos;ll match you with the right product and the best rate from 20+ leading banks.</p>
              <Link href={enquireHref} className="btn btn-red" style={{ width: "100%", justifyContent: "center" }}>
                Enquire now <Icon name="arrow-right" className="arr" />
              </Link>
              <Link href="/services" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
                View all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      <EndCta
        variant="green"
        title="Ready to take the next step?"
        text="Our experts will walk you through your options — free consultation, no obligation."
      >
        <Link href={enquireHref} className="btn btn-light">Talk to an Expert <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/process" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>See how it works</Link>
      </EndCta>
    </>
  );
}
