"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST these values to your API / CRM here.
    setSent(true);
  }

  return (
    <div className="form">
      {!sent ? (
        <form onSubmit={onSubmit}>
          <h3>Request your free consultation</h3>
          <p className="fp">Tell us a little about your goals and we&apos;ll match you with the right solution.</p>
          <div className="frm-row">
            <div className="frm-field"><label>Full name</label><input type="text" required placeholder="Your name" /></div>
            <div className="frm-field"><label>Phone</label><input type="tel" required placeholder="+971 ..." /></div>
          </div>
          <div className="frm-field"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
          <div className="frm-row">
            <div className="frm-field">
              <label>I&apos;m interested in</label>
              <select defaultValue="Home / Residential Mortgage">
                <option>Home / Residential Mortgage</option>
                <option>Off-Plan Property</option>
                <option>Refinance</option>
                <option>Buy-to-Let / Investment</option>
                <option>Equity Release</option>
                <option>Commercial Property</option>
                <option>Business / Personal Loan</option>
                <option>I have a difficult case</option>
              </select>
            </div>
            <div className="frm-field">
              <label>I am</label>
              <select defaultValue="UAE Resident">
                <option>UAE Resident</option>
                <option>Expat</option>
                <option>Non-Resident Investor</option>
                <option>Self-Employed</option>
              </select>
            </div>
          </div>
          <div className="frm-field"><label>Message (optional)</label><textarea rows={3} placeholder="Anything we should know?" /></div>
          <button type="submit" className="btn btn-red">Send My Request <Icon name="send" className="arr" /></button>
        </form>
      ) : (
        <div className="ok show">
          <div className="okic"><Icon name="check" /></div>
          <h3>Thank you!</h3>
          <p className="fp" style={{ margin: "6px 0 0" }}>
            Your request has been received. An Xperts Mortgage advisor will be in touch shortly.
          </p>
        </div>
      )}
    </div>
  );
}
