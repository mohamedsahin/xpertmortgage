import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { trust, easy, services, difficult, steps, tips } from "@/lib/data";

export function Placeholder({ label }: { label: string }) {
  return (
    <div className="img-ph">
      <span>{label}</span>
    </div>
  );
}

export function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="photo-img" src={src} alt={alt} loading="lazy" />
  );
}

export function TrustStrip() {
  return (
    <section className="trust">
      <div className="trust-grid">
        {trust.map(([icon, title, desc], i) => (
          <Reveal key={title} className="trust-cell" delay={i}>
            <div className="tic"><Icon name={icon} /></div>
            <div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FeatureRow({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className={`feat-row${onDark ? " on-dark" : ""}`} id="easyRow">
      {easy.map(([icon, title, desc], i) => (
        <Reveal key={title} className="feat" delay={(i % 4) + 1}>
          <div className="fic"><Icon name={icon} /></div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="svc-grid">
      {list.map(([icon, title, desc], i) => (
        <Reveal key={title} className="svc" delay={(i % 3) + 1}>
          <div className="sic"><Icon name={icon} /></div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <Link href="/contact" className="more">
            Enquire <Icon name="arrow-right" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function DifficultGrid() {
  return (
    <div className="diff-grid">
      {difficult.map(([icon, title, desc], i) => (
        <Reveal key={title} className="dcard" delay={(i % 3) + 1}>
          <div className="dic"><Icon name={icon} /></div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Timeline() {
  return (
    <Reveal className="timeline">
      <div className="tl-prog" />
      {steps.map(([icon, title, desc], i) => (
        <div className="step" key={title}>
          <div className="node">
            <Icon name={icon} />
            <span className="num">0{i + 1}</span>
          </div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      ))}
    </Reveal>
  );
}

export function Tips() {
  return (
    <div className="tips">
      {tips.map(([icon, title, desc], i) => (
        <Reveal key={title} className="tip" delay={(i % 4) + 1}>
          <div className="tic"><Icon name={icon} /></div>
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function EndCta({
  variant = "red",
  title,
  text,
  children,
}: {
  variant?: "red" | "green";
  title: ReactNode;
  text: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={`sec-pad endcta${variant === "green" ? " green" : ""}`}>
      <Reveal className="wrap">
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <p>{text}</p>
        <div className="ec-actions">{children}</div>
      </Reveal>
    </section>
  );
}
