import { ExternalLink } from "lucide-react";
import type { ClientProject as Project } from "@/data/portfolio";
import { BrowserFrame } from "./BrowserFrame";

export function ClientProject({ project }: { project: Project }) {
  return (
    <article className={`clientProject ${project.page ? "" : "clientProjectText"}`} id={project.slug}>
      {project.page ? (
        <BrowserFrame host={project.link?.label ?? project.name} shot={project.page} scrolls />
      ) : null}
      <div className="clientCopy">
        <p className="clientKind">{project.kind}</p>
        <h3>{project.name}</h3>
        <p className="clientRole">{project.role}</p>
        <p>{project.summary}</p>
        <ul className="pointList">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="techLine">{project.tech.join(", ")}</p>
        {project.link ? (
          <a className="textLink" href={project.link.href} target="_blank" rel="noreferrer">
            <ExternalLink size={15} aria-hidden="true" />
            Visit {project.link.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}
