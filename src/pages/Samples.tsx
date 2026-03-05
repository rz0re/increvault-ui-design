import { useState } from "react";
import { Shield, Zap, Lock, Database, Clock } from "lucide-react";
import { motion } from "framer-motion";

const colorThemes = [
  {
    name: "Emerald (current)",
    primary: "142 70% 50%",
    primaryLight: "142 80% 70%",
    bg: "220 20% 7%",
    card: "220 18% 10%",
  },
  {
    name: "Electric Blue",
    primary: "210 100% 56%",
    primaryLight: "199 89% 68%",
    bg: "222 25% 6%",
    card: "222 20% 10%",
  },
  {
    name: "Amber Gold",
    primary: "38 92% 55%",
    primaryLight: "45 93% 65%",
    bg: "25 15% 6%",
    card: "25 12% 10%",
  },
  {
    name: "Teal Mint",
    primary: "172 66% 50%",
    primaryLight: "166 72% 65%",
    bg: "200 20% 6%",
    card: "200 16% 10%",
  },
  {
    name: "Violet Indigo",
    primary: "262 83% 64%",
    primaryLight: "270 76% 74%",
    bg: "260 20% 6%",
    card: "260 16% 10%",
  },
  {
    name: "Coral Red",
    primary: "12 85% 58%",
    primaryLight: "16 90% 68%",
    bg: "15 15% 6%",
    card: "15 12% 10%",
  },
  {
    name: "Rose Pink",
    primary: "330 80% 60%",
    primaryLight: "338 85% 72%",
    bg: "330 12% 6%",
    card: "330 10% 10%",
  },
  {
    name: "Lime Neon",
    primary: "82 85% 52%",
    primaryLight: "88 90% 65%",
    bg: "90 15% 5%",
    card: "90 12% 9%",
  },
  {
    name: "Sky Frost",
    primary: "195 90% 55%",
    primaryLight: "190 95% 72%",
    bg: "210 22% 6%",
    card: "210 18% 10%",
  },
  {
    name: "Sunset Duo",
    primary: "25 95% 55%",
    primaryLight: "340 80% 60%",
    bg: "20 15% 6%",
    card: "20 12% 10%",
  },
  {
    name: "Arctic Silver",
    primary: "220 15% 65%",
    primaryLight: "210 20% 80%",
    bg: "220 18% 6%",
    card: "220 14% 10%",
  },
  {
    name: "Sage Green",
    primary: "155 40% 52%",
    primaryLight: "150 45% 65%",
    bg: "160 14% 6%",
    card: "160 10% 10%",
  },
];

const brandStyles = [
  { name: "Foreground + Accent", render: (primary: string) => (
    <span className="text-3xl font-bold tracking-tight">
      <span style={{ color: "hsl(210 20% 90%)" }}>Incre</span>
      <span style={{ color: `hsl(${primary})` }}>Vault</span>
    </span>
  )},
  { name: "Gradient Across", render: (primary: string, light: string) => (
    <span
      className="text-3xl font-bold tracking-tight bg-clip-text text-transparent"
      style={{ backgroundImage: `linear-gradient(135deg, hsl(${primary}), hsl(${light}))` }}
    >
      IncreVault
    </span>
  )},
  { name: "Weight Contrast", render: (primary: string) => (
    <span className="text-3xl tracking-tight" style={{ color: `hsl(${primary})` }}>
      <span className="font-light">Incre</span>
      <span className="font-extrabold">Vault</span>
    </span>
  )},
  { name: "Accent + Foreground (flipped)", render: (primary: string) => (
    <span className="text-3xl font-bold tracking-tight">
      <span style={{ color: `hsl(${primary})` }}>Incre</span>
      <span style={{ color: "hsl(210 20% 90%)" }}>Vault</span>
    </span>
  )},
];

const Samples = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = colorThemes[selectedTheme];

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-2xl font-bold">Color & Brand Samples</h1>
        <p className="mb-8 text-muted-foreground text-sm">Click a theme, then compare brand styles below.</p>

        {/* Theme selector */}
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Color Themes</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {colorThemes.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setSelectedTheme(i)}
                className={`group rounded-xl border p-4 text-left transition-all ${
                  selectedTheme === i
                    ? "border-foreground/30 ring-1 ring-foreground/20"
                    : "border-border hover:border-border/80"
                }`}
                style={{ backgroundColor: `hsl(${t.card})` }}
              >
                <div className="mb-3 flex gap-2">
                  <div className="h-6 w-6 rounded-full" style={{ backgroundColor: `hsl(${t.primary})` }} />
                  <div className="h-6 w-6 rounded-full" style={{ backgroundColor: `hsl(${t.primaryLight})` }} />
                </div>
                <span className="text-xs font-medium" style={{ color: "hsl(210 20% 80%)" }}>{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Brand styles with selected theme */}
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Brand Name Styles — {theme.name}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {brandStyles.map((style) => (
              <div
                key={style.name}
                className="flex flex-col items-center gap-4 rounded-xl border border-border/60 p-8"
                style={{ backgroundColor: `hsl(${theme.bg})` }}
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-7 w-7" style={{ color: `hsl(${theme.primary})` }} />
                  {style.render(theme.primary, theme.primaryLight)}
                </div>
                <span className="text-xs text-muted-foreground">{style.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preview card */}
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">UI Preview — {theme.name}</h2>
          <div className="overflow-hidden rounded-xl border border-border/60" style={{ backgroundColor: `hsl(${theme.bg})` }}>
            {/* Mini navbar */}
            <div className="flex items-center gap-3 border-b px-6 py-3" style={{ borderColor: `hsl(${theme.card})` }}>
              <Shield className="h-5 w-5" style={{ color: `hsl(${theme.primary})` }} />
              <span className="text-sm font-semibold" style={{ color: "hsl(210 20% 90%)" }}>
                Incre<span style={{ color: `hsl(${theme.primary})` }}>Vault</span>
              </span>
            </div>

            <div className="p-8 text-center">
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
                style={{
                  borderColor: `hsl(${theme.primary} / 0.2)`,
                  backgroundColor: `hsl(${theme.primary} / 0.06)`,
                  color: `hsl(${theme.primary})`,
                }}
              >
                Server backup tool
              </div>
              <h3 className="mb-3 text-2xl font-bold" style={{ color: "hsl(210 20% 90%)" }}>
                Backup at the server level.
              </h3>

              {/* Feature cards */}
              <div className="mt-8 grid grid-cols-2 gap-3 text-left">
                {[
                  { icon: Zap, label: "Incremental" },
                  { icon: Lock, label: "Encrypted" },
                  { icon: Database, label: "DB Aware" },
                  { icon: Clock, label: "Automated" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-lg border p-4"
                    style={{
                      backgroundColor: `hsl(${theme.card})`,
                      borderColor: `hsl(${theme.primary} / 0.12)`,
                    }}
                  >
                    <div
                      className="mb-2 flex h-8 w-8 items-center justify-center rounded-md"
                      style={{ backgroundColor: `hsl(${theme.primary} / 0.1)` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: `hsl(${theme.primary})` }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "hsl(210 20% 85%)" }}>{label}</span>
                  </div>
                ))}
              </div>

              <button
                className="mt-6 rounded-lg px-5 py-2.5 text-sm font-medium transition-all"
                style={{
                  backgroundColor: `hsl(${theme.primary})`,
                  color: `hsl(${theme.bg})`,
                }}
              >
                Read the docs →
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Pick your favorite and let me know — I'll apply it to the full site!
        </p>
      </div>
    </div>
  );
};

export default Samples;
