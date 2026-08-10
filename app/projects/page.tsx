import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software engineering projects by Tariq Ali across SaaS, ticketing, AI-enabled media, inventory, payments and web platforms.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="subpage">
      <section className="section">
        <div className="container">
          <Link className="backLink" href="/">
            <ArrowLeft size={16} />
            Back home
          </Link>
          <p className="eyebrow">Projects</p>
          <h1 className="pageTitle">Selected product engineering work.</h1>
          <p className="pageLead">
            These are representative products and engineering problems from my
            professional experience. Client-confidential implementation details are
            intentionally kept high level.
          </p>

          <div className="projectGrid projectGridAll">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
