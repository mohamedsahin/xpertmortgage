"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Icon from "./Icon";

const C = 2 * Math.PI * 48;
const fmt = (n: number) => "AED " + Math.round(n).toLocaleString("en-US");
const pct = (v: number, min: number, max: number) => ((v - min) / (max - min)) * 100 + "%";

export default function Calculator() {
  const [price, setPrice] = useState(2_000_000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(3.99);
  const [term, setTerm] = useState(25);

  const { emi, loan, totalInt, dashoffset } = useMemo(() => {
    const dpAmt = (price * down) / 100;
    const loan = price - dpAmt;
    const i = rate / 100 / 12;
    const n = term * 12;
    const emi = i > 0 ? (loan * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1) : loan / n;
    const totalPay = emi * n;
    const totalInt = totalPay - loan;
    const prinShare = loan / Math.max(totalPay, 1);
    return { emi, loan, totalInt, dashoffset: C * (1 - prinShare) };
  }, [price, down, rate, term]);

  const dpAmt = (price * down) / 100;

  return (
    <div className="calc-wrap">
      <div className="calc-controls">
        <h3>Estimate your monthly payment</h3>
        <p className="ct-sub">Indicative figures — your Xperts advisor will confirm exact terms.</p>

        <div className="field">
          <div className="frow"><label>Property Price</label><span className="val">{fmt(price)}</span></div>
          <input type="range" min={500000} max={15000000} step={50000} value={price}
            style={{ ["--p" as string]: pct(price, 500000, 15000000) } as React.CSSProperties}
            onChange={(e) => setPrice(+e.target.value)} />
        </div>

        <div className="field">
          <div className="frow"><label>Down Payment</label><span className="val">{down}% · {fmt(dpAmt)}</span></div>
          <input type="range" min={15} max={60} step={1} value={down}
            style={{ ["--p" as string]: pct(down, 15, 60) } as React.CSSProperties}
            onChange={(e) => setDown(+e.target.value)} />
        </div>

        <div className="field">
          <div className="frow"><label>Interest Rate (p.a.)</label><span className="val">{rate.toFixed(2)}%</span></div>
          <input type="range" min={2} max={8} step={0.1} value={rate}
            style={{ ["--p" as string]: pct(rate, 2, 8) } as React.CSSProperties}
            onChange={(e) => setRate(+e.target.value)} />
        </div>

        <div className="field">
          <div className="frow"><label>Loan Tenure</label><span className="val">{term} {term === 1 ? "year" : "years"}</span></div>
          <input type="range" min={5} max={25} step={1} value={term}
            style={{ ["--p" as string]: pct(term, 5, 25) } as React.CSSProperties}
            onChange={(e) => setTerm(+e.target.value)} />
        </div>
      </div>

      <div className="calc-result">
        <div className="rlbl">Estimated Monthly Payment</div>
        <div className="emi"><span>{fmt(emi)}</span> <small>/ month</small></div>
        <div className="donut">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="14" />
            <circle cx="60" cy="60" r="48" fill="none" stroke="#d8b86a" strokeWidth="14" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={dashoffset} transform="rotate(-90 60 60)"
              style={{ transition: "stroke-dashoffset .5s var(--ease)" }} />
          </svg>
          <div className="leg">
            <div><span className="dot" style={{ background: "#d8b86a" }} />Principal &amp; interest</div>
            <div><span className="dot" style={{ background: "rgba(255,255,255,.18)" }} />Total interest: <strong style={{ marginLeft: 4 }}>{fmt(totalInt)}</strong></div>
            <div><span className="dot" style={{ background: "var(--red)" }} />Loan amount: <strong style={{ marginLeft: 4 }}>{fmt(loan)}</strong></div>
          </div>
        </div>
        <Link href="/contact" className="btn btn-light" style={{ marginTop: 26, alignSelf: "flex-start" }}>
          Get this rate confirmed <Icon name="arrow-right" className="arr" />
        </Link>
        <p className="disc">* For illustration only and does not constitute a mortgage offer. Rates vary by bank, profile and property type.</p>
      </div>
    </div>
  );
}
