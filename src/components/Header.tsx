"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { nav, contact, company, waLink } from "@/lib/data";

const tel = `tel:${contact.phone.replace(/\s/g, "")}`;
const wa = waLink();

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="tb-l" style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <a href={tel}><Icon name="phone" /> <span>{contact.phone}</span></a>
            <a href={`mailto:${contact.email}`}><Icon name="mail" /> <span>{contact.email}</span></a>
          </div>
          <div className="tb-r">
            <span className="pill"><Icon name="building-2" />Access to 20+ leading banks</span>
            <Link href="/contact"><Icon name="map-pin" /> <span>Dubai, UAE</span></Link>
          </div>
        </div>
      </div>

      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <Link className="brand" href="/" aria-label={`${company.name} home`} onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={company.name} />
          </Link>

          <nav className={`navlinks${open ? " open" : ""}`}>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={pathname === n.href ? "active" : undefined} onClick={close}>
                {n.label}
              </Link>
            ))}
            <div className="drawer-foot">
              <Link href="/contact" className="btn btn-red" onClick={close}>
                Get a Free Consultation <Icon name="arrow-right" className="arr" />
              </Link>
              <a className="dcontact" href={tel}><Icon name="phone" />{contact.phone}</a>
              <a className="dcontact" href={wa}><Icon name="message-circle" />WhatsApp us</a>
              <a className="dcontact" href={`mailto:${contact.email}`}><Icon name="mail" />{contact.email}</a>
            </div>
          </nav>

          <div className={`nav-overlay${open ? " show" : ""}`} onClick={close} />

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-red">
              Get in Touch <Icon name="arrow-right" className="arr" />
            </Link>
            <button
              className={`burger${open ? " on" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
