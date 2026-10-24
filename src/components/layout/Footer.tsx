import { ArrowUp } from "lucide-react";
import Mark from "../ui/Mark";
import { cv } from "../../data/cv";

export default function Footer() {
  return (
    <footer className="site-footer container">
      <a className="footer-brand" href="#home">
        <Mark />
        Beyond the Workflow
      </a>
      <span>
        {cv.publicName || "A personal archive"} · {new Date().getFullYear()}
      </span>
      <a className="back-to-top" href="#home">
        Back to top <ArrowUp size={16} />
      </a>
    </footer>
  );
}
