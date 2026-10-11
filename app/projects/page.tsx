import type { Metadata } from "next";
import { ClientProject } from "@/components/ClientProject";
import { LiveProject } from "@/components/LiveProject";
import { SectionHeading } from "@/components/SectionHeading";
import { clientWork, liveProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live open-source projects and production client work by Tariq Ali: ticketing, payments, AI meeting notes, multi-tenant SaaS, creator platforms and more.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="subpage">
      <section className="section">
        <div className="container">
          <h1 className="pageTitle">Projects</h1>
          <p className="pageLead">
            Five open-source projects you can use right now, followed by products I built or led for employers and
            clients. Client code stays private, so those are shown with screenshots and a description of my part.
          </p>
          <p className="wakeNote">Demos run on free hosting and sleep when idle. The first load can take about 30 seconds.</p>
          <div className="liveList">
            {liveProjects.map((project, index) => (
              <LiveProject key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="section sectionTinted">
        <div className="container">
          <SectionHeading
            title="Production and client work"
            copy="Hover or tab onto a screenshot to scroll through the page."
          />
          <div className="clientGrid">
            {clientWork.map((project) => (
              <ClientProject key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
