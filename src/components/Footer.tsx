import Link from "next/link";
import { contact, company, social, waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpeg" alt={company.name} />
            <p>
              {company.slogan} Making home ownership simple, smart &amp; stress-free — smart mortgage
              solutions for residents, expats and investors across the UAE.
            </p>
            <div className="socials">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23H8V8z" /></svg>
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" /></svg>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.05c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 01-1.25-4.34c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.4-8.23 8.4zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" /></svg>
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <Link href="/services">Buy to Live</Link><Link href="/services">Buy to Let</Link>
            <Link href="/services">Buyouts</Link><Link href="/services">Refinance</Link>
            <Link href="/services">Equity Release</Link><Link href="/services">Off-Plan Mortgages</Link>
            <Link href="/services">Commercial Mortgages</Link>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/about">About Us</Link><Link href="/why-xperts">Why Choose Xperts</Link>
            <Link href="/process">Process</Link><Link href="/careers">Careers</Link>
            <Link href="/insights">Insights</Link><Link href="/calculator">EMI Calculator</Link>
          </div>
          <div className="foot-col">
            <h5>Get in touch</h5>
            <a href={`tel:${contact.landline.replace(/\s/g, "")}`}>{contact.landline} (Office)</a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone} (Mobile)</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.mapLink} target="_blank" rel="noopener noreferrer">Oud Metha, Bur Dubai</a>
            <Link href="/contact" className="btn btn-red" style={{ marginTop: 14 }}>Get in Touch</Link>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>{company.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
