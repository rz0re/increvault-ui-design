import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Download, Settings, Database, Shield, Bell, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import CodeBlock from "@/components/CodeBlock";

const sections = [
  { id: "installation", label: "Installation", icon: Download },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "databases", label: "Database Hooks", icon: Database },
  { id: "encryption", label: "Encryption", icon: Shield },
  { id: "scheduling", label: "Scheduling", icon: Clock },
  { id: "notifications", label: "Notifications", icon: Bell },
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("installation");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-24">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <Book className="h-4 w-4 text-primary" />
                Documentation
              </div>
              <nav className="flex flex-col gap-0.5">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">Documentation</h1>
              <p className="mb-12 text-muted-foreground">Everything you need to set up and run IncreVault.</p>

              {/* Installation */}
              <section id="installation" className="mb-16 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Download className="h-5 w-5 text-primary" />
                  Installation
                </h2>
                <p className="mb-4 text-muted-foreground">Install IncreVault with a single command. It pulls the latest binary and places it in your PATH.</p>
                <CodeBlock code="curl -sSL increvault.com | sh" />
                <p className="mt-4 text-sm text-muted-foreground">
                  Supports Linux (x86_64, arm64) and macOS. Requires <code className="font-mono text-foreground">curl</code> and a POSIX shell.
                </p>
              </section>

              {/* Configuration */}
              <section id="configuration" className="mb-16 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Settings className="h-5 w-5 text-primary" />
                  Configuration
                </h2>
                <p className="mb-4 text-muted-foreground">Generate a starter config file and customize it for your environment.</p>
                <CodeBlock
                  code={`# Generate config
increvault init --quickstart

# Config lives at
/etc/increvault/config.toml`}
                />
                <div className="mt-6 rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="mb-3 text-sm font-semibold">Key config options</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex gap-3">
                      <code className="font-mono text-primary text-xs shrink-0">repo_url</code>
                      <span>S3, SFTP, local, or any Restic-compatible backend</span>
                    </div>
                    <div className="flex gap-3">
                      <code className="font-mono text-primary text-xs shrink-0">backup_paths</code>
                      <span>Directories to include in backups</span>
                    </div>
                    <div className="flex gap-3">
                      <code className="font-mono text-primary text-xs shrink-0">exclude</code>
                      <span>Glob patterns to exclude (e.g., node_modules, .git)</span>
                    </div>
                    <div className="flex gap-3">
                      <code className="font-mono text-primary text-xs shrink-0">retention</code>
                      <span>How many daily/weekly/monthly snapshots to keep</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Database Hooks */}
              <section id="databases" className="mb-16 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Database className="h-5 w-5 text-primary" />
                  Database Hooks
                </h2>
                <p className="mb-4 text-muted-foreground">
                  IncreVault runs pre-backup hooks to dump your databases before snapshotting, ensuring consistent backups.
                </p>
                <CodeBlock
                  code={`# config.toml
[hooks.pre_backup]
postgres = true
mysql = true

# Custom hook
[hooks.pre_backup.custom]
command = "mongodump --out /tmp/mongodump"`}
                  language="toml"
                />
              </section>

              {/* Encryption */}
              <section id="encryption" className="mb-16 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Shield className="h-5 w-5 text-primary" />
                  Encryption
                </h2>
                <p className="mb-4 text-muted-foreground">
                  All data is encrypted with AES-256 before leaving your server. The repository password never leaves your machine.
                </p>
                <CodeBlock
                  code={`# Set your repository password
export RESTIC_PASSWORD="your-secure-password"

# Or use a password file
increvault backup --password-file /etc/increvault/.password`}
                />
              </section>

              {/* Scheduling */}
              <section id="scheduling" className="mb-16 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Clock className="h-5 w-5 text-primary" />
                  Scheduling
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Set up automated backups with systemd timers or cron jobs.
                </p>
                <CodeBlock
                  code={`# Enable systemd timer (recommended)
increvault schedule --enable

# Or use cron (every 6 hours)
0 */6 * * * /usr/local/bin/increvault backup`}
                />
              </section>

              {/* Notifications */}
              <section id="notifications" className="mb-16 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Bell className="h-5 w-5 text-primary" />
                  Notifications
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Get alerted on backup success, failure, or warnings via email or webhook.
                </p>
                <CodeBlock
                  code={`# config.toml
[notify]
email = "admin@example.com"
webhook = "https://hooks.slack.com/services/..."
on_success = false
on_failure = true`}
                  language="toml"
                />
              </section>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;
