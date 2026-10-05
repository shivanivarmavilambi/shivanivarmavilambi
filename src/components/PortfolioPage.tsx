import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDown, ArrowRight, ArrowUp, ChevronDown, Download, ExternalLink, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import portrait from "@/assets/shivani-portrait.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { experiences, navigation, projects, skills, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const skillFilters = ["All", "Frontend", "Backend", "Cloud", "AI/ML", "Data", "Testing"] as const;

function SectionIntro({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <p className="section-label">{label}</p>
      <h2 className="mt-5 font-display text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
        <a href={socials.linkedIn} target="_blank" rel="noreferrer"><Linkedin className="size-5" /></a>
      </Button>
      <Button asChild variant="ghost" size="icon" aria-label="Email Shivani">
        <a href={`mailto:${socials.email}`}><Mail className="size-5" /></a>
      </Button>
      {!compact ? (
        <Button asChild variant="ghost">
          <a href={socials.medium} target="_blank" rel="noreferrer">Medium <ExternalLink className="size-4" /></a>
        </Button>
      ) : null}
    </div>
  );
}

function Navigation() {
  const [active, setActive] = useState("About");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navigation.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id.charAt(0).toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: "-25% 0px -60%", threshold: [0.1, 0.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav aria-label="Main navigation" className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center rounded-full border border-foreground/10 bg-background/80 px-3 py-2 shadow-nav backdrop-blur-xl sm:px-4">
        <a href="#top" aria-label="Shivani Varma Vilambi, back to top" className="grid size-10 place-items-center rounded-full bg-foreground font-display text-lg text-background">SV</a>
        <div className="hidden items-center justify-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={cn("nav-link", active === item && "nav-link-active")}>{item}</a>
          ))}
        </div>
        <div className="ml-auto hidden lg:block">
          <Button asChild className="min-h-10 px-4 text-sm"><a href="/Shivani_Varma_Vilambi_Resume.pdf" download>Résumé <Download className="size-4" /></a></Button>
        </div>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="col-start-3 lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>
      {open ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-foreground/10 bg-background p-4 shadow-nav lg:hidden">
          <div className="grid gap-1">
            {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-muted">{item}</a>)}
            <Button asChild className="mt-2"><a href="/Shivani_Varma_Vilambi_Resume.pdf" download>Download résumé <Download className="size-4" /></a></Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
        <div className="relative z-10">
          <p className="section-label">SOFTWARE DEVELOPER</p>
          <h1 className="mt-6 font-display text-[clamp(3.6rem,8vw,7.7rem)] leading-[.84]">
            Shivani<br /><span className="italic text-primary">Varma</span> Vilambi
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">I build reliable software for banks, hospitals and payrolls—turning complex enterprise workflows into secure, friendly digital products.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><a href="#projects">View my work <ArrowDown className="size-4" /></a></Button>
            <Button asChild variant="outline"><a href="#contact">Contact me</a></Button>
          </div>
          <div className="mt-8"><SocialLinks /></div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="portrait-frame relative aspect-[4/5] overflow-hidden border border-foreground/10 bg-lavender shadow-portrait">
            <img src={portrait.url} alt="Shivani Varma Vilambi" className="absolute inset-0 size-full object-cover object-[82%_50%]" />
            <div className="absolute bottom-8 left-1/2 w-[80%] -translate-x-1/2 rounded-2xl border border-background/70 bg-background/80 px-5 py-4 text-center backdrop-blur-md">
              <p className="font-display text-2xl">Building across the stack</p>
              <p className="mt-1 text-sm text-muted-foreground">React · Spring · Node · Cloud</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 grid size-28 rotate-[-7deg] place-items-center rounded-full bg-butter text-center shadow-sm sm:-left-10 sm:size-32">
            <span className="font-display text-2xl leading-5">8+<small className="mt-1 block font-sans text-xs font-semibold uppercase">years</small></span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-2 border-y border-foreground/10 sm:grid-cols-4">
        {[['8+', 'Years in engineering'], ['4', 'Industries'], ['Full', 'Stack delivery'], ['AI', 'Enabled apps']].map(([value, label]) => (
          <div key={label} className="border-foreground/10 px-3 py-6 text-center even:border-l sm:border-l sm:first:border-l-0">
            <strong className="font-display text-3xl">{value}</strong><span className="mt-1 block text-xs uppercase text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-lavender scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro label="01 — About" title="Enterprise engineer with a product mindset." />
        <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-8">
            <p>For around eight years, I’ve worked across the full software lifecycle—shaping responsive interfaces, reusable components, business services, APIs and secure microservices.</p>
            <p>My experience spans banking, financial services, healthcare, and HR & payroll. I’m comfortable moving from React and TypeScript on the frontend to Java, Spring Boot, Node.js and event-driven systems on the backend.</p>
            <p>I care about the systems surrounding the code too: cloud delivery, CI/CD, monitoring, production support and testing at every layer. More recently, I’ve contributed to AI-enabled workflows that make complex decisions easier to navigate.</p>
          </div>
          <aside className="self-start rounded-2xl border border-foreground/10 bg-background/55 p-7 shadow-soft">
            <p className="section-label">Quick facts</p>
            <dl className="mt-6 divide-y divide-foreground/10">
              {[['Based', 'United States'], ['Focus', 'Full-stack systems'], ['Industries', 'Finance · Health · HR']].map(([term, detail]) => (
                <div key={term} className="grid grid-cols-[90px_1fr] gap-4 py-4 first:pt-0 last:pb-0"><dt className="text-sm text-muted-foreground">{term}</dt><dd className="font-medium">{detail}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [filter, setFilter] = useState<(typeof skillFilters)[number]>("All");
  const visible = filter === "All" ? skills : skills.filter((group) => group.category === filter);
  return (
    <section id="skills" className="section-pad bg-mint scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro label="02 — Skills" title="Tools I work with." description="A broad toolkit, applied pragmatically—from interface details to distributed systems and cloud operations." />
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter skills">
          {skillFilters.map((item) => <Button key={item} variant={filter === item ? "primary" : "outline"} className="shrink-0 text-sm" onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</Button>)}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((group) => (
            <article key={group.title} className="rounded-2xl border border-foreground/10 bg-background/55 p-6 shadow-soft transition motion-safe:hover:-translate-y-1">
              <h3 className="font-display text-2xl">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-sm">{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<string | null>(experiences[0]?.company ?? null);
  return (
    <section id="experience" className="section-pad bg-blush scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro label="03 — Experience" title="Eight years, four industries, one through-line." description="Making high-stakes enterprise workflows clear, resilient and useful." />
        <div className="relative space-y-5 before:absolute before:bottom-8 before:left-[11px] before:top-8 before:w-px before:bg-foreground/20 sm:before:left-[23px]">
          {experiences.map((job) => {
            const isOpen = expanded === job.company;
            return (
              <article key={job.company} className="relative pl-9 sm:pl-16">
                <span className="absolute left-1.5 top-8 size-3 rounded-full border-4 border-blush bg-primary sm:left-[18px]" />
                <div className="rounded-2xl border border-foreground/10 bg-background/55 p-6 shadow-soft sm:p-8">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4">
                    <div className="min-w-0"><p className="text-sm font-semibold uppercase text-primary">{job.company}</p><h3 className="mt-2 font-display text-2xl sm:text-3xl">{job.role}</h3><p className="mt-2 text-sm text-muted-foreground">{job.location} · {job.dates}</p></div>
                    <Button size="icon" variant="ghost" aria-label={`${isOpen ? "Hide" : "Show"} details for ${job.company}`} aria-expanded={isOpen} onClick={() => setExpanded(isOpen ? null : job.company)}><ChevronDown className={cn("size-5 transition", isOpen && "rotate-180")} /></Button>
                  </div>
                  <p className="mt-5 max-w-3xl leading-7">{job.summary}</p>
                  {isOpen ? <div className="mt-6 border-t border-foreground/10 pt-6"><ul className="space-y-3">{job.highlights.map((item) => <li key={item} className="flex gap-3 leading-7"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{job.tech.map((item) => <span key={item} className="rounded-full bg-butter px-3 py-1 text-xs font-semibold">{item}</span>)}</div></div> : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-pad bg-peach scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro label="04 — Selected work" title="Systems I’ve helped build." description="Representative enterprise work. Client details and implementation specifics remain confidential." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Dialog.Root key={project.title}>
              <article className="group flex min-h-[360px] flex-col rounded-2xl border border-foreground/10 bg-background/55 p-7 shadow-soft transition motion-safe:hover:-translate-y-1 sm:p-9">
                <div className="flex items-start justify-between"><span className="font-display text-5xl text-primary/35">{project.number}</span><span className="rounded-full bg-butter px-3 py-1 text-xs font-semibold uppercase">{project.field}</span></div>
                <h3 className="mt-auto max-w-lg font-display text-3xl leading-tight sm:text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.summary}</p>
                <Dialog.Trigger asChild><Button variant="ghost" className="mt-6 w-fit px-0">Read case study <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Button></Dialog.Trigger>
              </article>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[61] max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-foreground/10 bg-background p-6 shadow-portrait sm:p-10">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4"><div className="min-w-0"><Dialog.Description className="section-label">{project.field} case study</Dialog.Description><Dialog.Title className="mt-4 font-display text-3xl leading-tight sm:text-5xl">{project.title}</Dialog.Title></div><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close case study"><X className="size-5" /></Button></Dialog.Close></div>
                  <div className="mt-8 space-y-6">{[["Problem", project.problem], ["Solution", project.solution], ["Technology", project.tech], ["Outcome", project.outcome]].map(([label, copy]) => <div key={label} className="border-t border-foreground/10 pt-5"><h4 className="text-xs font-bold uppercase text-primary">{label}</h4><p className="mt-2 leading-7">{copy}</p></div>)}</div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationAndWriting() {
  return (
    <div className="bg-sky">
      <section id="education" className="section-pad scroll-mt-28"><div className="mx-auto max-w-7xl"><SectionIntro label="05 — Education" title="A foundation in computer science." /><div className="grid gap-5 md:grid-cols-2">{[["Master’s in Computer Science", "Florida Atlantic University", "Boca Raton, Florida"], ["Bachelor’s in Computer Science", "Vignana Bharathi Institute of Technology", "Hyderabad, India"]].map(([degree, school, location]) => <article key={degree} className="rounded-2xl border border-foreground/10 bg-background/55 p-8 shadow-soft"><span className="font-display text-5xl text-primary/30">✦</span><h3 className="mt-10 font-display text-3xl">{degree}</h3><p className="mt-4 font-medium">{school}</p><p className="mt-1 text-sm text-muted-foreground">{location}</p></article>)}</div></div></section>
      <section id="writing" className="section-pad border-t border-foreground/10 scroll-mt-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><SectionIntro label="06 — Writing" title="Notes on software and the work around it." /><div className="rounded-2xl border border-foreground/10 bg-background/55 p-8 shadow-soft"><p className="section-label">On Medium</p><p className="mt-6 font-display text-3xl sm:text-4xl">New articles are on the way.</p><p className="mt-4 max-w-xl leading-7 text-muted-foreground">Follow along for practical reflections on full-stack development, enterprise systems and emerging AI workflows.</p><Button asChild variant="outline" className="mt-7"><a href={socials.medium} target="_blank" rel="noreferrer">Visit my Medium <ExternalLink className="size-4" /></a></Button></div></div></section>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    setSent(true);
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
  }
  return (
    <section id="contact" className="section-pad bg-foreground text-background scroll-mt-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div><p className="section-label text-background/65">07 — Contact</p><h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">Let’s build something together.</h2><p className="mt-6 max-w-md text-lg leading-8 text-background/70">Have a role, project or hard problem in mind? I’d be glad to hear about it.</p><Button asChild className="mt-8 bg-background text-foreground hover:bg-background/90"><a href={`mailto:${socials.email}`}>Email me <Mail className="size-4" /></a></Button></div>
        <form onSubmit={submit} className="grid gap-5" aria-label="Contact Shivani">
          <label className="grid gap-2 text-sm"><span>Name</span><input name="name" required autoComplete="name" className="form-field" placeholder="Your name" /></label>
          <label className="grid gap-2 text-sm"><span>Email</span><input name="email" type="email" required autoComplete="email" className="form-field" placeholder="you@example.com" /></label>
          <label className="grid gap-2 text-sm"><span>Message</span><textarea name="message" required minLength={10} rows={6} className="form-field resize-y" placeholder="Tell me a little about what you’re working on." /></label>
          <div className="flex flex-wrap items-center gap-4"><Button type="submit" className="bg-background text-foreground hover:bg-background/90">Open email draft <ArrowRight className="size-4" /></Button>{sent ? <p role="status" className="text-sm text-background/70">Your email app should open with the message ready.</p> : null}</div>
        </form>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  return (
    <div className="overflow-x-clip">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
      <Projects />
      <EducationAndWriting />
      <Contact />
      <footer className="bg-foreground px-5 pb-8 text-background sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-background/15 pt-7 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-background/65">© 2026 Shivani Varma Vilambi</p><SocialLinks compact /><Button asChild variant="ghost" className="text-background hover:bg-background/10"><a href="#top">Back to top <ArrowUp className="size-4" /></a></Button></div></footer>
    </div>
  );
}