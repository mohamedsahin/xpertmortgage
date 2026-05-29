"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Counter from "./Counter";
import { Photo } from "./Sections";

export default function Hero() {
  const [go, setGo] = useState(false);
  const skyRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 120);
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 900 && skyRef.current) skyRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className={`hero-copy${go ? " go" : ""}`}>
            <span className="eyebrow">Smart Mortgage Solutions • Dubai</span>
            <h1>
              <span className="ln"><span>Your Dream Home,</span></span>
              <span className="ln"><span className="text-green">Our Expertise.</span></span>
            </h1>
            <p className="hero-sub">
              We make home ownership <strong>simple, smart &amp; stress-free</strong> — with the best
              rates, expert advice and a smooth approval process.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-red">
                Get a Free Consultation <Icon name="arrow-right" className="arr" />
              </Link>
              <Link href="/calculator" className="btn btn-ghost">
                <Icon name="calculator" /> Calculate My EMI
              </Link>
            </div>
            <div className="hero-trust">
              <div className="ht">
                <span className="num"><Counter value={20} suffix="+" /></span>
                <span className="lbl">Leading banks</span>
              </div>
              <div className="ht">
                <span className="num"><Counter value={8} suffix="%" /></span>
                <span className="lbl">Rental yields</span>
              </div>
              <div className="ht">
                <span className="num"><Counter value={100} suffix="%" /></span>
                <span className="lbl">Tax-free returns</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <Photo src="/images/dubai-skyline.jpg" alt="Dubai skyline at sunset with the Burj Khalifa" />
            </div>
            <svg ref={skyRef} className="hero-skyline" viewBox="0 0 320 180" aria-hidden="true">
              <g className="sky-line">
                <path d="M10 180 V120 L20 110 L30 120 V180" /><rect x="38" y="90" width="22" height="90" />
                <path d="M70 180 V70 L80 50 L90 70 V180" /><rect x="98" y="40" width="10" height="140" />
                <path d="M120 180 V30 L126 14 L132 30 V180" /><rect x="142" y="80" width="26" height="100" />
                <rect x="176" y="60" width="14" height="120" /><path d="M200 180 V96 L210 84 L220 96 V180" />
                <rect x="230" y="70" width="20" height="110" /><rect x="258" y="100" width="16" height="80" />
                <path d="M282 180 V112 L290 100 L298 112 V180" />
              </g>
            </svg>
            <div className="float-card fc-1">
              <div className="ic" style={{ background: "var(--red)" }}><Icon name="badge-percent" /></div>
              <div><b>Competitive</b><small>Best rates from top banks</small></div>
            </div>
            <div className="float-card fc-2">
              <div className="ic" style={{ background: "var(--green)" }}><Icon name="zap" /></div>
              <div><b>Quick Approval</b><small>Fast &amp; hassle-free process</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
