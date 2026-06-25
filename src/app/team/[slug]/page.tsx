import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { EndCta } from "@/components/Sections";
import { team, getMember } from "@/lib/data";

const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) return { title: "Our Team — Xperts Home Mortgage" };
  return {
    title: `${m.name} — ${m.role} | Xperts Home Mortgage`,
    description: m.bio,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) notFound();

  return (
    <>
      <PageHead
        crumb={m.name}
        eyebrow="Meet the team"
        title={m.name}
        subtitle={m.role}
      />

      <section className="sec-pad">
        <div className="wrap article">
          <Reveal className="article-body">
            <div className="member-head">
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="member-photo" src={m.photo} alt={`${m.name} — ${m.role}`} />
              ) : (
                <div className="member-avatar" aria-hidden="true">{initials(m.name)}</div>
              )}
              <div>
                <h2 style={{ margin: "0 0 4px" }}>{m.name}</h2>
                <span className="team-role">{m.role}</span>
                {m.experience && (
                  <p style={{ margin: "10px 0 0", fontWeight: 600 }}>
                    <Icon name="badge-check" /> {m.experience} of experience
                  </p>
                )}
              </div>
            </div>

            {(m.longBio ?? (m.bio ? [m.bio] : [])).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {m.expertise && m.expertise.length > 0 && (
              <>
                <h2>Areas of expertise</h2>
                <ul className="checklist">
                  {m.expertise.map((e) => (
                    <li key={e}><span className="ck"><Icon name="check" /></span>{e}</li>
                  ))}
                </ul>
              </>
            )}

            <Link href="/about" className="link-arrow" style={{ marginTop: 24 }}>
              <Icon name="arrow-right" style={{ transform: "rotate(180deg)" }} /> Back to the team
            </Link>
          </Reveal>

          <Reveal className="article-aside" delay={2}>
            <div className="aside-card">
              <h3>Get in touch with {m.name.split(" ")[0]}</h3>
              <p>Have a question or want tailored mortgage advice? Reach out directly or request a free consultation.</p>
              {m.email && (
                <a href={`mailto:${m.email}`} className="btn btn-red" style={{ width: "100%", justifyContent: "center" }}>
                  <Icon name="mail" /> Email {m.name.split(" ")[0]}
                </a>
              )}
              {m.phone && (
                <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
                  <Icon name="phone" /> Call {m.name.split(" ")[0]}
                </a>
              )}
              <Link href="/contact" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
                Free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <EndCta
        variant="green"
        title="Let's make your dream home a reality."
        text="Speak to a dedicated mortgage expert today — free consultation, no obligation."
      >
        <Link href="/contact" className="btn btn-light">Get in Touch <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/about" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>Meet the whole team</Link>
      </EndCta>
    </>
  );
}
