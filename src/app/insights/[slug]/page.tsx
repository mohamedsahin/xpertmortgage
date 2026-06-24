import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { EndCta } from "@/components/Sections";
import { insightArticles, getInsight } from "@/lib/data";

export function generateStaticParams() {
  return insightArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Insights — Xperts Home Mortgage" };
  return {
    title: `${article.title} — Xperts Home Mortgage`,
    description: article.tagline,
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  return (
    <>
      <PageHead
        crumb={article.title}
        eyebrow={article.readTime}
        title={article.title}
        subtitle={article.tagline}
      />

      <section className="sec-pad">
        <div className="wrap article">
          <Reveal className="article-body">
            <p className="lead" style={{ marginBottom: 28 }}>{article.intro}</p>

            {article.sections.map((s, i) => (
              <div key={i} className="article-section">
                {s.heading && <h2>{s.heading}</h2>}
                {s.body && <p>{s.body}</p>}
                {s.bullets && (
                  <ul className="checklist">
                    {s.bullets.map((b) => (
                      <li key={b}><span className="ck"><Icon name="check" /></span>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <p className="article-note">
              This article is for general guidance only and isn&apos;t financial advice. For a recommendation
              tailored to your situation, speak to an Xperts advisor.
            </p>

            <Link href="/insights" className="link-arrow" style={{ marginTop: 8 }}>
              <Icon name="arrow-right" style={{ transform: "rotate(180deg)" }} /> Back to all insights
            </Link>
          </Reveal>

          <Reveal className="article-aside" delay={2}>
            <div className="aside-card">
              <h3>Have a question?</h3>
              <p>Our experts are happy to walk you through it — no jargon, no obligation.</p>
              <Link href="/contact" className="btn btn-red" style={{ width: "100%", justifyContent: "center" }}>
                Ask an Expert <Icon name="arrow-right" className="arr" />
              </Link>
              <Link href="/calculator" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
                Try the EMI calculator
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <EndCta
        title="Ready to put this into action?"
        text="Speak to a dedicated mortgage expert today — free consultation, no obligation."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/insights" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>More insights</Link>
      </EndCta>
    </>
  );
}
