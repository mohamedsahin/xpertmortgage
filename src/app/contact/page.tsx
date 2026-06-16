import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { BgSkyline } from "@/components/Skyline";
import { contact, waLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us — Xperts Home Mortgage",
  description:
    "Request a free, no-obligation mortgage consultation. Speak to a dedicated Xperts Home Mortgage expert in the UAE today — Your Home, Our Expertise.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        crumb="Get in Touch"
        eyebrow="Get in touch today"
        title="Let's make your dream home a reality."
        subtitle="Your dreams. Our expertise. Speak to a dedicated mortgage expert — consultation is free and there's no obligation."
      />

      <section
        className="sec-pad cta"
        style={{ background: "linear-gradient(120deg,var(--green),var(--green-700) 55%,#0a2c22)" }}
      >
        <BgSkyline />
        <div className="wrap">
          <div className="cta-grid">
            <Reveal>
              <span className="eyebrow light" style={{ display: "inline-flex" }}>We reply within one business hour</span>
              <h2 style={{ margin: "16px 0 0" }}>Talk to a <span className="text-gold">mortgage expert.</span></h2>
              <p className="sub">Whether it&apos;s your first home, an investment, a refinance or a difficult case — we&apos;ll match you with the right solution.</p>
              <div className="cta-contacts">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  <span className="ci"><Icon name="phone" /></span>
                  <div><strong>{contact.phone}</strong><br /><small style={{ color: "#9fbdb0" }}>Sun–Thu, 9am–6pm GST</small></div>
                </a>
                <a href={`mailto:${contact.email}`}>
                  <span className="ci"><Icon name="mail" /></span>
                  <div><strong>{contact.email}</strong><br /><small style={{ color: "#9fbdb0" }}>We reply within one business hour</small></div>
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  <span className="ci">
                    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} style={{ color: "var(--gold-soft)" }}><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.05c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 01-1.25-4.34c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.4-8.23 8.4zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" /></svg>
                  </span>
                  <div><strong>WhatsApp us</strong><br /><small style={{ color: "#9fbdb0" }}>Quick answers on the go</small></div>
                </a>
                <a href="#">
                  <span className="ci"><Icon name="map-pin" /></span>
                  <div><strong>{contact.location}</strong><br /><small style={{ color: "#9fbdb0" }}>By appointment</small></div>
                </a>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
