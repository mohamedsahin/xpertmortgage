import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Icon from "@/components/Icon";
import { ServicesGrid, TrustStrip, EndCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mortgage Services — Xperts Home Mortgage",
  description:
    "One company, all mortgage solutions: Buy to Live, Buy to Let, Buyouts, Refinance, Equity Release, Off-Plan Mortgages and Commercial Mortgages across the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        crumb="Services"
        eyebrow="Mortgage solutions for every need"
        title="One Company, All Mortgage Solutions."
        subtitle="For every need, every goal and every stage of life — from your first home to your next investment. Smart financing solutions designed around you."
        skyline
        actions={
          <>
            <Link href="/contact" className="btn btn-red">Get a Free Consultation <Icon name="arrow-right" className="arr" /></Link>
            <Link href="/calculator" className="btn btn-light"><Icon name="calculator" /> Calculate My EMI</Link>
          </>
        }
      />

      <section className="sec-pad services">
        <div className="wrap"><ServicesGrid /></div>
      </section>

      <TrustStrip />

      <EndCta
        variant="green"
        title="Not sure which solution fits?"
        text="Our experts will match you with the right product and the best rate from 20+ leading banks."
      >
        <Link href="/contact" className="btn btn-light">Talk to an Expert <Icon name="arrow-right" className="arr" /></Link>
        <Link href="/process" className="btn" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>See how it works</Link>
      </EndCta>
    </>
  );
}
