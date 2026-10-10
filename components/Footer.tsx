import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p>
          <strong>{profile.name}</strong>, {profile.role.toLowerCase()} in {profile.location}
        </p>
        <ul className="socialRow">
          <li>
            <a href={profile.resume} download aria-label="Download résumé (PDF)">
              <Download size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={profile.gmail} target="_blank" rel="noreferrer" aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
