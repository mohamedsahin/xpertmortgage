import Icon from "./Icon";
import Reveal from "./Reveal";
import { team } from "@/lib/data";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Team() {
  return (
    <div className="team-grid">
      {team.map((m, i) => (
        <Reveal key={m.name} className="team-card" delay={(i % 4) + 1}>
          {m.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="team-photo" src={m.photo} alt={`${m.name} — ${m.role}`} loading="lazy" />
          ) : (
            <div className="team-avatar" aria-hidden="true">{initials(m.name)}</div>
          )}
          <h4>{m.name}</h4>
          <span className="team-role">{m.role}</span>
          {m.bio && <p>{m.bio}</p>}
          {(m.email || m.phone) && (
            <div className="team-contact">
              {m.phone && (
                <a href={`tel:${m.phone.replace(/\s/g, "")}`} aria-label={`Call ${m.name}`}>
                  <Icon name="phone" />
                </a>
              )}
              {m.email && (
                <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`}>
                  <Icon name="mail" />
                </a>
              )}
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
