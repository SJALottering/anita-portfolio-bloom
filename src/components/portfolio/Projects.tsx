import { ArrowUpRight, Sparkles, Bot, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: Sparkles,
    title: "Content Generator App",
    desc: "An AI-powered content generation platform that helps users create engaging written content quickly. Built with a modern web stack and a clean conversational UI.",
    tag: "Web · AI",
    color: "bg-pastel-pink",
    href: "https://contentmuse.netlify.app/",
    cta: "View Project",
  },
  {
    icon: Bot,
    title: "Module Mate — Chat Module Assistant",
    desc: "An AI-powered academic assistant designed to help students master their modules. It answers concept questions, explains theory, and guides learners through examples in a friendly chat interface.",
    tag: "AI · Education",
    color: "bg-pastel-lavender",
    href: "https://github.com/AnitaLottering",
    cta: "View Project",
  },
  {
    icon: BarChart3,
    title: "Social Media Sentiment Analysis",
    desc: "A web app that analyzes social media content to detect sentiment, trends and tone. Built with a clean, data-driven UI to make insights easy to understand at a glance.",
    tag: "Web · Data",
    color: "bg-pastel-mint",
    href: "https://anitalottering-sentiment-analysis.netlify.app/",
    cta: "View Project",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="section-eyebrow">Work</p>
          <h2 className="section-heading">Featured <span className="text-gradient">Projects</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group glass-card p-8 transition-smooth hover:-translate-y-2 hover:shadow-hover animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center`}>
                  <p.icon className="w-7 h-7 text-foreground/70" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-white/70 backdrop-blur-md text-foreground/70 border border-white/60">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium transition-smooth hover:shadow-hover group-hover:gap-3"
              >
                {p.cta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
