import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `text-sm transition-colors ${
      location.pathname === path
        ? "text-primary font-medium"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight">IncreVault</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/docs" className={linkClass("/docs")}>Docs</Link>
          <a href="https://github.com/increvault" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-foreground transition-colors">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            <Link to="/" className={linkClass("/")} onClick={() => setOpen(false)}>Home</Link>
            <Link to="/docs" className={linkClass("/docs")} onClick={() => setOpen(false)}>Docs</Link>
            <a href="https://github.com/increvault" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
