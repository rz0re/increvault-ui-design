import { motion } from "framer-motion";
import { Zap, Lock, Database, Clock, Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CodeBlock from "@/components/CodeBlock";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Incremental & Fast",
    description: "Content-defined chunking via Restic. Only changed data is uploaded after the first backup.",
  },
  {
    icon: Lock,
    title: "Encrypted at Rest",
    description: "AES-256 encryption. Your data is unreadable without the repository password.",
  },
  {
    icon: Database,
    title: "Database Aware",
    description: "Pre-backup hooks dump PostgreSQL and MySQL databases for consistent snapshots.",
  },
  {
    icon: Clock,
    title: "Set & Forget",
    description: "Systemd timers or cron for backup, prune, and verify — with email/webhook notifications.",
  },
];

const quickstartCode = `# Install
curl -sSL increvault.com | sh

# Generate a working config instantly
increvault init --quickstart

# Test it
increvault backup --dry-run

# Check status
increvault status`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_70%_50%/0.08),transparent_60%)]" />
        <div className="container relative py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Terminal className="h-3.5 w-3.5" />
              Open-source backup tool
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient">IncreVault</span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Incremental, encrypted server backups — powered by Restic
            </p>

            {/* Install command */}
            <div className="mx-auto max-w-lg">
              <div className="code-block flex items-center justify-between px-5 py-4">
                <code className="font-mono text-sm">
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-primary">curl -sSL increvault.com | sh</span>
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText("curl -sSL increvault.com | sh")}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/increvault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/40 py-20 md:py-28">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-2xl font-semibold md:text-3xl"
          >
            Built for reliability
          </motion.h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section className="border-t border-border/40 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 text-center text-2xl font-semibold md:text-3xl"
            >
              Get started in seconds
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <CodeBlock code={quickstartCode} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2025 IncreVault</span>
          <div className="flex gap-6">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <a href="https://github.com/increvault" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
