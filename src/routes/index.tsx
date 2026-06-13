import { createFileRoute } from "@tanstack/react-router";
import {
  Smartphone, BarChart3, Map, MessageCircle, ShieldCheck, Users,
  WifiOff, Sparkles, Trophy, CalendarCheck, ArrowRight, Check,
  Database, Bell, FileSpreadsheet, Globe2,
} from "lucide-react";
import logo from "@/assets/atlas-logo.png.asset.json";
import heroBg from "@/assets/atlas-hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATLAS — Inteligência de Dados para Campanhas Eleitorais" },
      { name: "description", content: "CRM político offline-first com IA, geo-inteligência e automação de WhatsApp. Transforme trabalho de campo em estratégia vencedora." },
      { property: "og:title", content: "ATLAS — Uma Nova Forma de Fazer Política" },
      { property: "og:description", content: "Plataforma de gestão eleitoral com captura offline, dashboards em tempo real, IA de campanha e automação WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo.url },
    ],
    links: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Pillars />
      <Features />
      <Comparison />
      <Phases />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="ATLAS" className="h-9 w-9 rounded-full ring-1 ring-primary/40" />
          <span className="font-display text-xl tracking-wide text-gradient-gold font-semibold">ATLAS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#pilares" className="hover:text-primary transition">Pilares</a>
          <a href="#recursos" className="hover:text-primary transition">Recursos</a>
          <a href="#comparativo" className="hover:text-primary transition">Comparativo</a>
          <a href="#implantacao" className="hover:text-primary transition">Implantação</a>
        </nav>
        <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold hover:opacity-90 transition">
          Agendar demo <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Inteligência de dados aplicada à política
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
            Uma nova forma de <span className="text-gradient-gold">fazer política</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            ATLAS transforma o trabalho de campo em dados estratégicos. CRM eleitoral offline-first, com geo-inteligência, IA de campanha e automação de WhatsApp em conformidade total com a LGPD.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition">
              Solicitar demonstração <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#recursos" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition">
              Conhecer recursos
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "100%", l: "Offline-first" },
              { v: "5", l: "Papéis RBAC" },
              { v: "LGPD", l: "Compliance total" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-gold font-semibold">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <img src={logo.url} alt="ATLAS — Logo" className="relative w-full max-w-md rounded-3xl shadow-elegant ring-1 ring-primary/30" />
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: Smartphone, title: "Coleta em Campo", desc: "App mobile otimizado para cabos eleitorais registrarem contatos e votos confirmados." },
    { icon: BarChart3, title: "Gestão de Resultados", desc: "Dashboards gerenciais que comparam o planejado com o executado por município e liderança." },
    { icon: Map, title: "Geo-Inteligência", desc: "Visualização espacial dos votos identificando vácuos de atuação no território." },
    { icon: MessageCircle, title: "Automação Social", desc: "Integração com WhatsApp para engajamento contínuo da base e lideranças." },
  ];
  return (
    <section id="pilares" className="py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Pilares</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">A solução estratégica completa</h2>
          <p className="text-muted-foreground">Quatro frentes integradas que transformam intuição em decisão baseada em dados reais.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition shadow-elegant">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const groups = [
    {
      tag: "Captura & CRM",
      title: "Do contato ao apoiador",
      icon: Users,
      bullets: [
        "Cadastros ilimitados com QR Code do título eleitoral",
        "Funil de relacionamento: contato → multiplicador",
        "Score de engajamento 0–100 por eleitor",
        "Importação em massa CSV/XLSX com validação",
      ],
    },
    {
      tag: "Offline-First",
      title: "Funciona onde a internet não chega",
      icon: WifiOff,
      bullets: [
        "PWA com IndexedDB — opera 100% desconectado",
        "Sincronização bidirecional automática",
        "Indicador visual de pendências em campo",
        "Notificações locais de agenda sem servidor",
      ],
    },
    {
      tag: "Inteligência",
      title: "IA que prioriza sua campanha",
      icon: Sparkles,
      bullets: [
        "6 tipos de alertas automáticos de campo",
        "Score de risco eleitoral por região",
        "Sugestão de redistribuição de captadores",
        "Dashboard executivo com projeções",
      ],
    },
    {
      tag: "WhatsApp",
      title: "Automação com compliance LGPD",
      icon: MessageCircle,
      bullets: [
        "Disparos segmentados via Evolution API (open-source)",
        "4 templates: livre, evento, mobilização, presença",
        "Opt-in obrigatório — impossível enviar sem consentimento",
        "Log completo de todos os disparos",
      ],
    },
    {
      tag: "Geo-Inteligência",
      title: "Mapa de calor territorial",
      icon: Globe2,
      bullets: [
        "Heatmap eleitoral por nível de voto",
        "GPS automático em cada cadastro",
        "Cobertura por região e densidade",
        "Análise de eficiência por captador",
      ],
    },
    {
      tag: "Segurança",
      title: "RBAC granular + LGPD",
      icon: ShieldCheck,
      bullets: [
        "5 papéis com Row-Level Security no banco",
        "Trilha de auditoria imutável",
        "Criptografia HTTPS e dados em repouso",
        "Direito ao esquecimento garantido",
      ],
    },
  ];
  return (
    <section id="recursos" className="py-24 border-t border-border/50 relative">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Recursos</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">Tudo o que sua campanha precisa</h2>
          <p className="text-muted-foreground">Da porta-em-porta ao gabinete: uma plataforma única, integrada e segura.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <g.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{g.tag}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">{g.title}</h3>
              <ul className="space-y-3">
                {g.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            { icon: CalendarCheck, label: "Agenda integrada" },
            { icon: Bell, label: "Comunicados em tempo real" },
            { icon: FileSpreadsheet, label: "Exportação CSV/PDF" },
            { icon: Database, label: "Cadastros ilimitados" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/60">
              <b.icon className="h-5 w-5 text-primary" />
              <span className="text-sm">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["Geolocalização de bases", "Inexistente", "Mapa de calor ativo"],
    ["Controle de demandas", "Manual / alto risco", "Monitoramento em tempo real"],
    ["Acompanhamento de campo", "Sem controle", "Mobile com geolocalização"],
    ["Segurança de dados", "Totalmente vulnerável", "Conformidade total LGPD"],
    ["Operação offline", "Impossível", "Nativa via PWA"],
    ["Automação WhatsApp", "Manual e sem logs", "Segmentada + auditada"],
  ];
  return (
    <section id="comparativo" className="py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Comparativo</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">Tradicional vs. ATLAS</h2>
          <p className="text-muted-foreground">A diferença entre uma eleição apertada e uma vitória sólida.</p>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden shadow-elegant">
          <div className="grid grid-cols-3 bg-secondary text-sm font-semibold">
            <div className="p-5">Recurso operacional</div>
            <div className="p-5 text-muted-foreground">Método tradicional</div>
            <div className="p-5 text-primary">ATLAS Inteligência</div>
          </div>
          {rows.map((r, i) => (
            <div key={r[0]} className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-card/30" : "bg-card/60"}`}>
              <div className="p-5 font-medium">{r[0]}</div>
              <div className="p-5 text-muted-foreground">{r[1]}</div>
              <div className="p-5 text-foreground flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />{r[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Phases() {
  const phases = [
    { n: "01", t: "Implementação", d: "Parametrização do ATLAS com foco nos municípios e regiões de atuação." },
    { n: "02", t: "Migração", d: "Importação e tratamento de bases antigas de forma segura e confidencial." },
    { n: "03", t: "Capacitação", d: "Treinamento prático de diretores e equipes operacionais de campo." },
    { n: "04", t: "Go-Live", d: "Início pleno das operações integradas e geração de relatórios estratégicos." },
  ];
  return (
    <section id="implantacao" className="py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Implantação</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">Segura, ágil e em 4 fases</h2>
          <p className="text-muted-foreground">Do setup ao primeiro relatório estratégico — com suporte dedicado em cada etapa.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {phases.map((p) => (
            <div key={p.n} className="relative p-7 rounded-2xl bg-card border border-border">
              <div className="font-display text-5xl text-gradient-gold font-semibold mb-3">{p.n}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 rounded-2xl bg-card border border-primary/20 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <Trophy className="h-10 w-10 text-primary shrink-0" />
            <p className="font-display text-2xl italic">
              "Organização é a diferença entre uma eleição apertada e uma vitória sólida."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="py-32 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
          O sucesso da sua reeleição <span className="text-gradient-gold">começa hoje</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Agende uma demonstração em tempo real e veja como o ATLAS pode transformar sua operação política em uma máquina de dados.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:contato@atlas.app" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition">
            Agendar demonstração <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#recursos" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:bg-secondary transition">
            Ver recursos
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" className="h-8 w-8 rounded-full ring-1 ring-primary/40" />
          <span className="font-display text-lg text-gradient-gold font-semibold">ATLAS</span>
          <span className="text-xs text-muted-foreground ml-2">© {new Date().getFullYear()} — Inteligência política.</span>
        </div>
        <p className="text-xs text-muted-foreground">Conformidade LGPD · Open Source · Hospedagem incluída</p>
      </div>
    </footer>
  );
}
