import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  experience,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/data/portfolio";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main">
      <section className="hero section">
        <div className="container heroGrid">
          <div className="heroContent">
            <div className="availabilityPill">
              <span className="availabilityDot" />
              {profile.availability}
            </div>
            <p className="eyebrow">Full-stack product engineering</p>
            <h1>
              Building web products that are
              <span className="gradientText"> fast, dependable and built to scale.</span>
            </h1>
            <p className="heroCopy">{profile.intro}</p>

            <div className="heroActions">
              <a className="button buttonPrimary" href="#contact">
                Discuss an opportunity <ArrowRight size={17} />
              </a>
              <a className="button buttonGhost" href={profile.resume} download>
                <Download size={17} />
                Download résumé
              </a>
            </div>

            <div className="heroMeta">
              <span>
                <MapPin size={16} />
                {profile.location}
              </span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Professional snapshot">
            <div className="panelGlow" />
            <div className="codeLabel">tariq.profile</div>
            <pre className="codeBlock" aria-hidden="true">
{`{
  role: "Full-Stack Engineer",
  experience: "8+ years",
  core: [
    "React / Next.js",
    "TypeScript",
    "Node.js",
    "AWS"
  ],
  focus: "Product + Architecture",
  mode: "Remote / Relocation"
}`}
            </pre>
            <div className="heroPanelBottom">
              <Sparkles size={17} />
              <span>Engineering across product, platform and cloud.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="statsSection" aria-label="Career highlights">
        <div className="container statsGrid">
          {stats.map((stat) => (
            <div className="statCard" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Products where engineering quality mattered."
            copy="A selection of platforms spanning enterprise ticketing, SaaS, AI-enabled media, inventory, payments and client-facing product development."
          />

          <div className="projectGrid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="sectionCta">
            <Link className="textLink" href="/projects">
              View all project highlights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section sectionMuted">
        <div className="container">
          <SectionHeading
            eyebrow="Engineering toolkit"
            title="Strong across the full product stack."
            copy="I am most effective in teams where I can connect polished interfaces with practical back-end architecture, cloud services, testing and delivery."
          />
          <div className="skillsGrid">
            {skillGroups.map((group) => (
              <article className="skillCard" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tagRow">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Experience"
            title="International product teams, from delivery to technical leadership."
            copy="Recent roles and representative experience. The complete history is available on the résumé page."
          />

          <div className="experienceList">
            {experience.slice(0, 5).map((item) => (
              <article className="experienceItem" key={`${item.company}-${item.dates}`}>
                <div className="experiencePeriod">{item.dates}</div>
                <div className="experienceBody">
                  <h3>{item.role}</h3>
                  <p className="experienceCompany">
                    {item.company} · {item.location}
                  </p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="tagRow">
                    {item.tech.map((tech) => (
                      <span className="tag tagSmall" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="sectionCta">
            <Link className="button buttonGhost" href="/resume">
              Full résumé <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section sectionMuted">
        <div className="container valueGrid">
          <div>
            <p className="eyebrow">How I work</p>
            <h2>Senior-level ownership without losing sight of the user.</h2>
          </div>
          <div className="valueList">
            {[
              "Own features from technical discovery through production delivery.",
              "Prefer reusable architecture and clear interfaces over one-off fixes.",
              "Communicate trade-offs clearly with product, design and business stakeholders.",
              "Use tests, observability and code review to keep delivery speed sustainable.",
            ].map((item) => (
              <div className="valueItem" key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <div className="container contactGrid">
          <div className="contactIntro">
            <p className="eyebrow">Contact</p>
            <h2>Have a senior engineering role or a product challenge?</h2>
            <p>
              For international full-time roles, relocation opportunities or serious
              product work, the fastest ways to reach me are WhatsApp and email.
            </p>

            <div className="contactLinks">
              <a className="contactLink" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <span className="contactIcon"><MessageCircle size={20} /></span>
                <span>
                  <small>WhatsApp</small>
                  <strong>{profile.phoneDisplay}</strong>
                </span>
                <ArrowRight size={18} />
              </a>

              <a className="contactLink" href={profile.gmail} target="_blank" rel="noreferrer">
                <span className="contactIcon"><Mail size={20} /></span>
                <span>
                  <small>Email with Gmail</small>
                  <strong>{profile.email}</strong>
                </span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="contactNote">
              <BriefcaseBusiness size={17} />
              <span>Open to remote and relocation opportunities.</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
