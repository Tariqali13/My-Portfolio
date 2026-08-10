import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <strong>Tariq Ali</strong>
          <p>Full-Stack Software Engineer · Lahore, Pakistan</p>
        </div>
        <div className="socialRow">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={profile.gmail} target="_blank" rel="noreferrer" aria-label="Email with Gmail">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
