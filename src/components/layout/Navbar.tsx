import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../../data/cv";
import Mark from "../ui/Mark";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const visibleSections = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target);
          else visibleSections.delete(entry.target);
        });
        const current = Array.from(visibleSections).sort(
          (a, b) =>
            b.getBoundingClientRect().top - a.getBoundingClientRect().top,
        )[0];
        if (current) setActive(current.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          menuButton.current,
          ...Array.from(
            menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a
          className="brand"
          href="#home"
          aria-label="Beyond the Workflow — home"
          onClick={() => setMenuOpen(false)}
        >
          <Mark />
          <span>
            Beyond the
            <br />
            Workflow
          </span>
        </a>
        <button
          className="menu-toggle"
          ref={menuButton}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          id="primary-nav"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Primary"
          ref={menuRef}
        >
          {navigation.map(({ id, label }) => (
            <a
              href={`#${id}`}
              key={id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => {
                setMenuOpen(false);
                setActive(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-print"
          onClick={() => window.print()}
        >
          Print / Save CV <ArrowUpRight size={15} />
        </button>
      </div>
    </header>
  );
}
