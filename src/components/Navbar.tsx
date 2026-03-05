import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const BrandName = ({ className = "" }: { className?: string }) => (
  <span className={`font-semibold tracking-tight ${className}`}>
    <span className="text-foreground">Incre</span>
    <span className="text-primary">Vault</span>
  </span>
);

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
          <img src={logo} alt="IncreVault logo" className="h-8 w-8 rounded-md" />
          <BrandName className="text-lg" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/docs" className={linkClass("/docs")}>Docs</Link>
          <a href="https://github.com/increvault" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-foreground transition-colors">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

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

export { BrandName };
export default Navbar;
