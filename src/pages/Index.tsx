import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Lock, Database, Clock, Terminal, ArrowRight, Copy, Check } from "lucide-react";
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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -sSL increvault.com | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(70_95%_48%/0.08),transparent_60%)]" />
        <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Terminal className="h-3.5 w-3.5" />
              Server backup tool
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-foreground">Incre</span><span className="text-gradient">Vault</span>
            </h1>
            <p className="mb-10 text-base text-muted-foreground md:text-lg">
              Backup at the server level. Restore at any level.
            </p>

            {/* Install command */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-xl"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Install with a single command</p>
              <div className="glow-border code-block flex items-center justify-between px-5 py-4">
                <code className="font-mono text-sm md:text-base">
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-primary">curl -sSL increvault.com | sh</span>
                </code>
                <button
                  onClick={handleCopy}
                  className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="h-4.5 w-4.5 text-primary" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Copy className="h-4.5 w-4.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
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
            </motion.div>
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
