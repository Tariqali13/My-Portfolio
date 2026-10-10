import Link from "next/link";
import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="navShell">
      <nav className="container nav" aria-label="Primary">
        <Link href="/" className="brand">
          Tariq Ali
        </Link>

        <ul className="navLinks">
          <li>
            <Link href="/#live">Live projects</Link>
          </li>
          <li>
            <Link href="/#work">Client work</Link>
          </li>
          <li>
            <Link href="/resume">Résumé</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        <div className="navActions">
          <ThemeToggle />
          <a className="button buttonSmall buttonPrimary" href={profile.resume} download>
            <Download size={16} aria-hidden="true" />
            <span className="hideSmall">Résumé</span>
            <span className="srOnly showSmall">Download résumé</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
