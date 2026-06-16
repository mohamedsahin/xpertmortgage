import Link from "next/link";
import Icon from "./Icon";
import { contact, waLink } from "@/lib/data";

const tel = `tel:${contact.phone.replace(/\s/g, "")}`;
const wa = waLink();

/** Sticky bottom action bar — mobile only (shown via CSS ≤768px). */
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick contact">
      <a className="call" href={tel}><Icon name="phone" />Call</a>
      <a className="wa" href={wa}><Icon name="message-circle" />WhatsApp</a>
      <Link className="quote" href="/contact"><Icon name="send" />Get Free Quote</Link>
    </div>
  );
}
