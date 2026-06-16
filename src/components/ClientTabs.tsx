"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { Photo } from "./Sections";
import { clients } from "@/lib/data";

// matches the order of `clients`: Employed, Self-Employed, Investors, NRIs
const photos = [
  "/images/business.jpg",
  "/images/self-employed.jpg",
  "/images/investors.jpg",
  "/images/expats.jpg",
];

export default function ClientTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="clients">
      <div className="tabs">
        {clients.map((c, i) => (
          <button
            key={c[0]}
            className={`tab${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {c[0]}
          </button>
        ))}
      </div>

      {clients.map((c, i) => {
        const [name, icon, , desc, points] = c;
        return (
          <div key={name} className={`panel${i === active ? " show" : ""}`}>
            <div>
              <div className="pico"><Icon name={icon} /></div>
              <h3>{name}</h3>
              <p className="lead">{desc}</p>
              <ul>
                {points.map((p) => (
                  <li key={p}>
                    <span className="ck"><Icon name="check" /></span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-green" style={{ marginTop: 22 }}>
                Talk to an expert <Icon name="arrow-right" />
              </Link>
            </div>
            <div className="panel-photo">
              <Photo src={photos[i]} alt={`${name} — Xperts Home Mortgage clients`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
