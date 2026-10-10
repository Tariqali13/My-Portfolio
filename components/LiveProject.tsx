import { ExternalLink, Github } from "lucide-react";
import type { LiveProject as Project } from "@/data/portfolio";
import { BrowserFrame } from "./BrowserFrame";

export function LiveProject({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="liveProject" id={project.slug}>
      <div className="liveCopy">
        <h3>{project.name}</h3>
        <p className="liveTagline">{project.tagline}</p>
        <p>{project.summary}</p>
        <ul className="pointList">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {project.results ? (
          <dl className="results">
            {project.results.map((result) => (
              <div key={result.label}>
                <dt>{result.value}</dt>
                <dd>{result.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <p className="techLine">{project.tech.join(", ")}</p>

        <div className="actions">
          <a className="button buttonPrimary" href={project.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={17} aria-hidden="true" />
            Open live demo
          </a>
          <a className="button buttonGhost" href={project.code} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" />
            Read the code
          </a>
        </div>
      </div>

      <a className="liveShot" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open the ${project.name} live demo`}>
        <BrowserFrame host={project.demoHost} shot={project.shot} priority={priority} />
      </a>
    </article>
  );
}
