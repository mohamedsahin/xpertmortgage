"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("UAE Resident");

  // Employment status doesn't apply to investors.
  const showEmployment = category !== "Investor";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      interest: String(fd.get("interest") || ""),
      category: String(fd.get("category") || ""),
      employment: showEmployment ? String(fd.get("employment") || "") : "N/A",
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="form">
      {!sent ? (
        <form onSubmit={onSubmit}>
          <h3>Request your free consultation</h3>
          <p className="fp">Tell us a little about your goals and we&apos;ll match you with the right solution.</p>
          <div className="frm-row">
            <div className="frm-field"><label>Full name</label><input name="name" type="text" required placeholder="Your name" /></div>
            <div className="frm-field"><label>Phone</label><input name="phone" type="tel" required placeholder="+971 ..." /></div>
          </div>
          <div className="frm-field"><label>Email</label><input name="email" type="email" required placeholder="you@email.com" /></div>
          <div className="frm-row">
            <div className="frm-field">
              <label>I&apos;m interested in</label>
              <select name="interest" defaultValue="Buy to Live">
                <option>Buy to Live</option>
                <option>Buy to Let</option>
                <option>Buyouts</option>
                <option>Refinance</option>
                <option>Equity Release</option>
                <option>Off-Plan Mortgages</option>
                <option>Commercial Mortgages</option>
                <option>I have a complex case</option>
              </select>
            </div>
            <div className="frm-field">
              <label>I am</label>
              <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>UAE National</option>
                <option>GCC National</option>
                <option>UAE Resident</option>
                <option>Investor</option>
                <option>Non-Resident</option>
              </select>
            </div>
          </div>
          {showEmployment && (
            <div className="frm-field">
              <label>Employment status</label>
              <select name="employment" defaultValue="Salaried">
                <option>Salaried</option>
                <option>Self-Employed</option>
              </select>
            </div>
          )}
          <div className="frm-field"><label>Message (optional)</label><textarea name="message" rows={3} placeholder="Anything we should know?" /></div>
          {error && <p className="frm-error" role="alert">{error}</p>}
          <button type="submit" className="btn btn-red" disabled={sending}>
            {sending ? "Sending…" : <>Send My Request <Icon name="send" className="arr" /></>}
          </button>
        </form>
      ) : (
        <div className="ok show">
          <div className="okic"><Icon name="check" /></div>
          <h3>Thank you!</h3>
          <p className="fp" style={{ margin: "6px 0 0" }}>
            Your request has been received. An Xperts Home Mortgage advisor will be in touch shortly.
          </p>
        </div>
      )}
    </div>
  );
}
