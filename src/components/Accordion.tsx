"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { faqs, type Pair } from "@/lib/data";

function Item({
  q, a, open, onToggle,
}: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState<number | undefined>(undefined);

  useEffect(() => {
    setMax(open ? ref.current?.scrollHeight ?? 0 : 0);
  }, [open]);

  return (
    <div className={`acc-item${open ? " open" : ""}`}>
      <button className="acc-q" onClick={onToggle}>
        {q}
        <span className="pm"><Icon name="plus" /></span>
      </button>
      <div className="acc-a" ref={ref} style={{ maxHeight: max }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Accordion({ items = faqs }: { items?: Pair[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map(([q, a], i) => (
        <Item key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}
