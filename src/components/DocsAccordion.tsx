"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { documents, type DocCategory } from "@/lib/data";

function CategoryPanel({ cat, open, onToggle }: { cat: DocCategory; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState<number | undefined>(undefined);

  useEffect(() => {
    setMax(open ? ref.current?.scrollHeight ?? 0 : 0);
  }, [open]);

  return (
    <div className={`doc-item${open ? " open" : ""}`}>
      <button className="doc-q" onClick={onToggle} aria-expanded={open}>
        <span className="doc-emoji" aria-hidden="true">{cat.emoji}</span>
        <span className="doc-label">{cat.label}</span>
        <span className="pm"><Icon name="plus" /></span>
      </button>
      <div className="doc-a" ref={ref} style={{ maxHeight: max }}>
        <div className="doc-groups">
          {cat.groups.map((g) => (
            <div className="doc-group" key={g.group}>
              <h5>{g.group}</h5>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>
                    <span className="ck"><Icon name="check" /></span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DocsAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="docs">
      {documents.map((cat, i) => (
        <CategoryPanel
          key={cat.key}
          cat={cat}
          open={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
