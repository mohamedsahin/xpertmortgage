// Decorative line-art skyline SVGs (simple rect/triangle shapes only).

export function BgSkyline({ className = "bg-skyline" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
      <g className="sky-line">
        <path d="M60 200 V90 L75 60 L90 90 V200" /><rect x="120" y="70" width="40" height="130" /><rect x="190" y="110" width="26" height="90" />
        <path d="M250 200 V40 L262 14 L274 40 V200" /><rect x="310" y="80" width="34" height="120" /><rect x="370" y="120" width="22" height="80" />
        <path d="M430 200 V96 L446 70 L462 96 V200" /><rect x="500" y="60" width="40" height="140" /><rect x="570" y="110" width="26" height="90" />
        <path d="M630 200 V36 L642 10 L654 36 V200" /><rect x="690" y="84" width="34" height="116" /><rect x="752" y="120" width="22" height="80" />
        <path d="M810 200 V100 L826 74 L842 100 V200" /><rect x="880" y="64" width="40" height="136" /><rect x="950" y="114" width="26" height="86" />
        <path d="M1010 200 V48 L1022 22 L1034 48 V200" /><rect x="1070" y="90" width="34" height="110" /><rect x="1130" y="124" width="22" height="76" />
      </g>
    </svg>
  );
}

export function HeroSkyline() {
  return (
    <svg className="hero-skyline" viewBox="0 0 320 180" aria-hidden="true">
      <g className="sky-line">
        <path d="M10 180 V120 L20 110 L30 120 V180" /><rect x="38" y="90" width="22" height="90" />
        <path d="M70 180 V70 L80 50 L90 70 V180" /><rect x="98" y="40" width="10" height="140" />
        <path d="M120 180 V30 L126 14 L132 30 V180" /><rect x="142" y="80" width="26" height="100" />
        <rect x="176" y="60" width="14" height="120" /><path d="M200 180 V96 L210 84 L220 96 V180" />
        <rect x="230" y="70" width="20" height="110" /><rect x="258" y="100" width="16" height="80" />
        <path d="M282 180 V112 L290 100 L298 112 V180" />
      </g>
    </svg>
  );
}

export function AboutSkyline() {
  return (
    <svg className="bg-skyline" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
      <g className="sky-line" style={{ opacity: 1 }}>
        <rect x="20" y="60" width="18" height="60" /><path d="M50 120 V40 L58 28 L66 40 V120" /><rect x="80" y="50" width="24" height="70" />
        <rect x="120" y="70" width="14" height="50" /><path d="M150 120 V30 L156 16 L162 30 V120" /><rect x="180" y="55" width="20" height="65" />
        <rect x="214" y="75" width="16" height="45" /><path d="M250 120 V48 L258 36 L266 48 V120" /><rect x="290" y="60" width="22" height="60" />
        <rect x="326" y="80" width="14" height="40" /><rect x="356" y="66" width="18" height="54" />
      </g>
    </svg>
  );
}
