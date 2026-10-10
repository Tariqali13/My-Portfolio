import Link from "next/link";
import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ClientProject } from "@/components/ClientProject";
import { LiveProject } from "@/components/LiveProject";
import { SectionHeading } from "@/components/SectionHeading";
import { Ticket } from "@/components/Ticket";
import { clientWork, experience, liveProjects, profile, skillGroups } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="availability">
              <span className="availabilityDot" aria-hidden="true" />
              {profile.availability}
            </p>
            <h1>{profile.headline}</h1>
            <p className="heroIntro">{profile.intro}</p>
            <div className="actions">
              <a className="button buttonPrimary" href="#live">
                See live projects
              </a>
              <a className="button buttonGhost" href={profile.resume} download>
                <Download size={17} aria-hidden="true" />
                Download résumé
              </a>
            </div>
            <ul className="heroLinks">
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.gmail} target="_blank" rel="noreferrer">
                  <Mail size={16} aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
          <Ticket />
        </div>
      </section>

      <section className="section" id="live" aria-labelledby="live-title">
        <div className="container">
          <SectionHeading
            id="live-title"
            title="Live projects"
            copy="My production work is in private repositories, so I rebuilt the problems I know best in the open. Each one runs on a public demo, with tests, CI and the design decisions written down."
          />
          <p className="wakeNote">
            Demos run on free hosting and sleep when idle. The first load can take about 30 seconds.
          </p>
          <div className="liveList">
            {liveProjects.map((project, index) => (
              <LiveProject key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionTinted" id="work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            id="work-title"
            title="Production and client work"
            copy="Products I built or led for employers and clients. Hover or tab onto a screenshot to scroll through the page."
          />
          <div className="clientGrid">
            {clientWork.map((project) => (
              <ClientProject key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <SectionHeading id="skills-title" title="What I work with" />
          <dl className="skills">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section sectionTinted" id="experience" aria-labelledby="experience-title">
        <div className="container">
          <SectionHeading id="experience-title" title="Experience" copy="The four most recent roles. The full history is on the résumé page." />
          <ol className="timeline">
            {experience.slice(0, 4).map((item) => (
              <li key={`${item.company}-${item.dates}`}>
                <p className="timelineDates">{item.dates}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timelineCompany">
                    {item.company}, {item.location}
                  </p>
                  <ul className="pointList">
                    {item.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="actions">
            <Link className="button buttonGhost" href="/resume">
              Full résumé
            </Link>
            <a className="button buttonGhost" href={profile.resume} download>
              <Download size={17} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="container contactGrid">
          <div>
            <h2 id="contact-title">Hiring for a senior engineer?</h2>
            <p className="sectionCopy">
              I&apos;m looking for full-time remote roles or relocation. WhatsApp and email reach me fastest; the form
              works too.
            </p>
            <ul className="contactLinks">
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} aria-hidden="true" />
                  <span>
                    <small>WhatsApp</small>
                    {profile.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={profile.gmail} target="_blank" rel="noreferrer">
                  <Mail size={20} aria-hidden="true" />
                  <span>
                    <small>Email</small>
                    {profile.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={20} aria-hidden="true" />
                  <span>
                    <small>LinkedIn</small>
                    Tariq Ali
                  </span>
                </a>
              </li>
              <li>
                <a href={profile.resume} download>
                  <Download size={20} aria-hidden="true" />
                  <span>
                    <small>Résumé</small>
                    Download PDF
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
