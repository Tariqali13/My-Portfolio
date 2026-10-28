import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import {
  certifications,
  education,
  experience,
  liveProjects,
  profile,
  skillGroups,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Résumé of Tariq Ali, senior full-stack software engineer: React, Next.js, TypeScript, Node.js, PostgreSQL and AWS.",
};

export default function ResumePage() {
  return (
    <main id="main" className="resumePage">
      <div className="container resumeToolbar noPrint">
        <Link className="backLink" href="/">
          <ArrowLeft size={16} />
          Back home
        </Link>
        <a className="button buttonPrimary buttonSmall" href={profile.resume} download>
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <article className="resumeSheet">
        <header className="resumeHeader">
          <div>
            <h1>Tariq Ali</h1>
            <p className="resumeRole">{profile.role}</p>
            <p className="resumeSummary">{profile.intro}</p>
          </div>
          <div className="resumeContact">
            <span>{profile.location}</span>
            <a href={profile.gmail} target="_blank" rel="noreferrer"><Mail size={15} /> {profile.email}</a>
            <a href={profile.secondaryGmail} target="_blank" rel="noreferrer"><Mail size={15} /> {profile.secondaryEmail}</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> {profile.phoneDisplay}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          </div>
        </header>

        <section className="resumeSection">
          <h2>Skills</h2>
          <div className="resumeSkills">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <strong>{group.title}</strong>
                <span>{group.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resumeSection">
          <h2>Experience</h2>
          <div className="resumeExperience">
            {experience.map((item) => (
              <article key={`${item.company}-${item.dates}`}>
                <div className="resumeJobHeading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>
                      {item.company}, {item.location}
                    </p>
                  </div>
                  <time>{item.dates}</time>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="resumeTech">
                  <strong>Tech:</strong> {item.tech.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="resumeSection">
          <h2>Open-source projects</h2>
          <div className="resumeExperience">
            {liveProjects.map((project) => (
              <article key={project.slug}>
                <div className="resumeJobHeading">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.tagline}</p>
                  </div>
                  <span className="resumeLinks">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </span>
                </div>
                <p>{project.summary}</p>
                <p className="resumeTech">
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="resumeSection resumeTwoCol">
          <div>
            <h2>Education</h2>
            <h3>{education.degree}</h3>
            <p>
              {education.school}, {education.location}, {education.year}
            </p>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
