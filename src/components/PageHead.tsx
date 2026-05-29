import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";
import { BgSkyline } from "./Skyline";

type Props = {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  /** italic script line (difficult-cases) */
  script?: ReactNode;
  dark?: boolean;
  glow?: "green" | "red";
  eyebrowVariant?: "light" | "red";
  skyline?: boolean;
};

export default function PageHead({
  crumb, eyebrow, title, subtitle, actions, script,
  dark = false, glow = "green", eyebrowVariant = "light", skyline = false,
}: Props) {
  return (
    <section className="pagehead" style={dark ? { background: "var(--ink)" } : undefined}>
      <div
        className="glow"
        style={glow === "red" ? { background: "radial-gradient(circle,rgba(200,16,46,.4),transparent 65%)" } : undefined}
      />
      {skyline && <BgSkyline />}
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Home</Link>
          <Icon name="chevron-right" />
          <span>{crumb}</span>
        </div>
        <span className={eyebrowVariant === "red" ? "eyebrow" : "eyebrow light"} style={{ display: "inline-flex" }}>
          {eyebrow}
        </span>
        <h1 style={{ marginTop: 14 }}>{title}</h1>
        {script}
        {subtitle ? <p>{subtitle}</p> : null}
        {actions ? <div className="ph-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
