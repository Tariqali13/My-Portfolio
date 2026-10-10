import { Download } from "lucide-react";
import { profile, ticketFields } from "@/data/portfolio";

/**
 * The hero's one bold element: an event ticket, because live ticketing and
 * payments are the work this portfolio leads with. The tear-off stub is the
 * résumé download.
 */
export function Ticket() {
  return (
    <div className="ticket" role="group" aria-label="Summary">
      <div className="ticketMain">
        <p className="ticketAdmit">Admit one</p>
        <p className="ticketEvent">
          {profile.name}
          <span>{profile.role}</span>
        </p>
        <dl className="ticketFields">
          {ticketFields.map((field) => (
            <div key={field.label}>
              <dt>{field.label}</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
        <p className="ticketStack">React, Next.js, TypeScript, Node.js, PostgreSQL, Redis, AWS</p>
      </div>

      <a className="ticketStub" href={profile.resume} download>
        <span className="ticketStubLabel">Résumé</span>
        <span className="ticketStubAction">
          <Download size={18} aria-hidden="true" />
          Download PDF
        </span>
        <span className="barcode" aria-hidden="true" />
      </a>
    </div>
  );
}
