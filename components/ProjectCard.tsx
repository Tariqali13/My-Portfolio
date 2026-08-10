import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  impact: string[];
  tech: string[];
};

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article className={`projectCard ${compact ? "projectCardCompact" : ""}`}>
      <div className="projectTopline">
        <span className="projectIndex">{project.eyebrow}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      {!compact ? (
        <ul className="impactList">
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <div className="tagRow">
        {project.tech.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
