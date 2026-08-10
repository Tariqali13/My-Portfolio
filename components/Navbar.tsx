import Link from "next/link";
import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="navShell">
      <nav className="container nav" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Tariq Ali home">
          <span className="brandMark">TA</span>
          <span className="brandText">Tariq Ali</span>
        </Link>

        <div className="navLinks">
          <Link href="/#work">Work</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="navActions">
          <ThemeToggle />
          <a
            className="button buttonSmall buttonGhost desktopOnly"
            href={profile.resume}
            download
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
