import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { l as logo } from "./router-TufpTSZl.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as ArrowRight, S as Sparkles, a as Smartphone, C as ChartColumn, M as Map, b as MessageCircle, U as Users, W as WifiOff, E as Earth, c as ShieldCheck, d as Check, e as CalendarCheck, B as Bell, F as FileSpreadsheet, D as Database, T as Trophy } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const heroBg = "/assets/atlas-hero-bg-S8KGYT5m.jpg";
function useInView(options = { threshold: 0.15 }, once = true) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) obs.unobserve(e.target);
        } else if (!once) {
          setInView(false);
        }
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
  const { ref, inView } = useInView();
  const Component = Tag;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: cn(
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      ),
      children
    }
  );
}
function CountUp({ to, duration = 1400, suffix = "", prefix = "", className }) {
  const { ref, inView } = useInView();
  const [value, setValue] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    prefix,
    value,
    suffix
  ] });
}
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pillars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Comparison, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Phases, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "ATLAS", className: "h-9 w-9 rounded-full ring-1 ring-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl tracking-wide text-gradient-gold font-semibold", children: "ATLAS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pilares", className: "hover:text-primary transition", children: "Pilares" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#recursos", className: "hover:text-primary transition", children: "Recursos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#comparativo", className: "hover:text-primary transition", children: "Comparativo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#implantacao", className: "hover:text-primary transition", children: "Implantação" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://atlas-eleitoral.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold hover:opacity-90 transition", children: [
      "Demo ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative pt-32 pb-24 md:pt-44 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-60", style: {
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Inteligência de dados aplicada à política"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6", children: [
          "Uma nova forma de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "fazer política" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mb-8", children: "ATLAS transforma o trabalho de campo em dados estratégicos. CRM eleitoral offline-first, com geo-inteligência, IA de campanha e automação de WhatsApp em conformidade total com a LGPD." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://atlas-eleitoral.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition", children: [
            "Demo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#recursos", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition", children: "Conhecer recursos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient-gold font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 100, suffix: "%" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Offline-first" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient-gold font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Papéis RBAC" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient-gold font-semibold animate-pulse", children: "LGPD" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Compliance total" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/20 blur-3xl rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "ATLAS — Logo", className: "relative w-full max-w-md rounded-3xl shadow-elegant ring-1 ring-primary/30" })
      ] })
    ] })
  ] });
}
function Pillars() {
  const items = [{
    icon: Smartphone,
    title: "Coleta em Campo",
    desc: "App mobile otimizado para cabos eleitorais registrarem contatos e votos confirmados."
  }, {
    icon: ChartColumn,
    title: "Gestão de Resultados",
    desc: "Dashboards gerenciais que comparam o planejado com o executado por município e liderança."
  }, {
    icon: Map,
    title: "Geo-Inteligência",
    desc: "Visualização espacial dos votos identificando vácuos de atuação no território."
  }, {
    icon: MessageCircle,
    title: "Automação Social",
    desc: "Integração com WhatsApp para engajamento contínuo da base e lideranças."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pilares", className: "py-24 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-semibold tracking-widest uppercase mb-3", children: "Pilares" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-semibold mb-4", children: "A solução estratégica completa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Quatro frentes integradas que transformam intuição em decisão baseada em dados reais." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-gold transition-all duration-300 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-6 w-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.desc })
    ] }) }, it.title)) })
  ] }) });
}
function Features() {
  const groups = [{
    tag: "Captura & CRM",
    title: "Do contato ao apoiador",
    icon: Users,
    bullets: ["Cadastros ilimitados com QR Code do título eleitoral", "Funil de relacionamento: contato → multiplicador", "Score de engajamento 0–100 por eleitor", "Importação em massa CSV/XLSX com validação"]
  }, {
    tag: "Offline-First",
    title: "Funciona onde a internet não chega",
    icon: WifiOff,
    bullets: ["PWA com IndexedDB — opera 100% desconectado", "Sincronização bidirecional automática", "Indicador visual de pendências em campo", "Notificações locais de agenda sem servidor"]
  }, {
    tag: "Inteligência",
    title: "IA que prioriza sua campanha",
    icon: Sparkles,
    bullets: ["6 tipos de alertas automáticos de campo", "Score de risco eleitoral por região", "Sugestão de redistribuição de captadores", "Dashboard executivo com projeções"]
  }, {
    tag: "WhatsApp",
    title: "Automação com compliance LGPD",
    icon: MessageCircle,
    bullets: ["Disparos segmentados via Evolution API (open-source)", "4 templates: livre, evento, mobilização, presença", "Opt-in obrigatório — impossível enviar sem consentimento", "Log completo de todos os disparos"]
  }, {
    tag: "Geo-Inteligência",
    title: "Mapa de calor territorial",
    icon: Earth,
    bullets: ["Heatmap eleitoral por nível de voto", "GPS automático em cada cadastro", "Cobertura por região e densidade", "Análise de eficiência por captador"]
  }, {
    tag: "Segurança",
    title: "RBAC granular + LGPD",
    icon: ShieldCheck,
    bullets: ["5 papéis com Row-Level Security no banco", "Trilha de auditoria imutável", "Criptografia HTTPS e dados em repouso", "Direito ao esquecimento garantido"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "recursos", className: "py-24 border-t border-border/50 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: {
      background: "var(--gradient-radial)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-semibold tracking-widest uppercase mb-3", children: "Recursos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-semibold mb-4", children: "Tudo o que sua campanha precisa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Da porta-em-porta ao gabinete: uma plataforma única, integrada e segura." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: groups.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-7 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-gold transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-primary font-semibold", children: g.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold mb-4", children: g.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: g.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) })
      ] }) }, g.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-4 gap-4", children: [{
        icon: CalendarCheck,
        label: "Agenda integrada"
      }, {
        icon: Bell,
        label: "Comunicados em tempo real"
      }, {
        icon: FileSpreadsheet,
        label: "Exportação CSV/PDF"
      }, {
        icon: Database,
        label: "Cadastros ilimitados"
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl border border-border bg-card/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: b.label })
      ] }, b.label)) })
    ] })
  ] });
}
function Comparison() {
  const rows = [["Geolocalização de bases", "Inexistente", "Mapa de calor ativo"], ["Controle de demandas", "Manual / alto risco", "Monitoramento em tempo real"], ["Acompanhamento de campo", "Sem controle", "Mobile com geolocalização"], ["Segurança de dados", "Totalmente vulnerável", "Conformidade total LGPD"], ["Operação offline", "Impossível", "Nativa via PWA"], ["Automação WhatsApp", "Manual e sem logs", "Segmentada + auditada"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "comparativo", className: "py-24 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-semibold tracking-widest uppercase mb-3", children: "Comparativo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-semibold mb-4", children: "Tradicional vs. ATLAS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "A diferença entre uma eleição apertada e uma vitória sólida." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border overflow-hidden shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-secondary text-sm font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: "Recurso operacional" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-muted-foreground", children: "Método tradicional" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-primary", children: "ATLAS Inteligência" })
      ] }),
      rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid grid-cols-3 text-sm ${i % 2 ? "bg-card/30" : "bg-card/60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 font-medium", children: r[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-muted-foreground", children: r[1] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }),
          r[2]
        ] })
      ] }, r[0]))
    ] })
  ] }) });
}
function Phases() {
  const phases = [{
    n: "01",
    t: "Implementação",
    d: "Parametrização do ATLAS com foco nos municípios e regiões de atuação."
  }, {
    n: "02",
    t: "Migração",
    d: "Importação e tratamento de bases antigas de forma segura e confidencial."
  }, {
    n: "03",
    t: "Capacitação",
    d: "Treinamento prático de diretores e equipes operacionais de campo."
  }, {
    n: "04",
    t: "Go-Live",
    d: "Início pleno das operações integradas e geração de relatórios estratégicos."
  }];
  const trackRef = reactExports.useRef(null);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.6;
      const passed = vh - rect.top;
      const p = Math.max(0, Math.min(1, passed / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "implantacao", className: "py-24 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-semibold tracking-widest uppercase mb-3", children: "Implantação" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-semibold mb-4", children: "Segura, ágil e em 4 fases" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Do setup ao primeiro relatório estratégico — com suporte dedicado em cada etapa." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: trackRef, className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-border/60 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-gold transition-[width] duration-300 ease-out", style: {
        width: `${progress * 100}%`
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute top-0 bottom-0 left-6 w-[2px] bg-border/60 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gradient-gold transition-[height] duration-300 ease-out", style: {
        height: `${progress * 100}%`
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-6 relative", children: phases.map((p, i) => {
        const active = progress > i / phases.length;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden md:flex absolute -top-1 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full items-center justify-center transition-all duration-500 ${active ? "bg-gradient-gold shadow-gold scale-100" : "bg-card border border-border scale-90"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${active ? "bg-primary-foreground" : "bg-muted-foreground"}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-gradient-gold font-semibold mb-3", children: p.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: p.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: p.d })
          ] })
        ] }) }, p.n);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 p-8 rounded-2xl bg-card border border-primary/20 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-10 w-10 text-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic", children: '"Organização é a diferença entre uma eleição apertada e uma vitória sólida."' })
    ] }) }) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contato", className: "py-32 border-t border-border/50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-30", style: {
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl font-semibold mb-6", children: [
        "O sucesso da sua reeleição ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "começa hoje" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10", children: "Agende uma demonstração em tempo real e veja como o ATLAS pode transformar sua operação política em uma máquina de dados." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://atlas-eleitoral.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition", children: [
          "Demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#recursos", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:bg-secondary transition", children: "Ver recursos" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-12 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-8 w-8 rounded-full ring-1 ring-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-gradient-gold font-semibold", children: "ATLAS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-2", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " — Inteligência política."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Conformidade LGPD · Open Source · Hospedagem incluída" })
  ] }) });
}
export {
  Landing as component
};
