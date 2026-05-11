import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactItems = [
  { icon: Mail, label: "Email", value: "anitalottering16@gmail.com", href: "mailto:anitalottering16@gmail.com", color: "bg-pastel-pink" },
  { icon: Phone, label: "Phone", value: "+27 78 630 0493", href: "tel:+27786300493", color: "bg-pastel-peach" },
  { icon: Github, label: "GitHub", value: "AnitaLottering", href: "https://github.com/AnitaLottering", color: "bg-pastel-lavender" },
  { icon: Linkedin, label: "LinkedIn", value: "anita-lottering", href: "https://www.linkedin.com/in/anita-lottering-95989a347/", color: "bg-pastel-blue" },
  { icon: MapPin, label: "Location", value: "Cape Town, South Africa", href: null, color: "bg-pastel-mint" },
];

export const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent ✨", description: "Thanks for reaching out — I'll reply soon!" });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="section-eyebrow">Say hi</p>
          <h2 className="section-heading mb-4">Let's <span className="text-gradient">connect</span></h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to chat? My inbox is always open.
          </p>
        </div>

        {/* CV download banner */}
        <div className="glass-card p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up">
          <div>
            <h3 className="text-xl mb-1">My Curriculum Vitae</h3>
            <p className="text-sm text-muted-foreground">Get a closer look at my experience, education and skills.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-primary hover:shadow-hover transition-smooth border-0 text-primary-foreground">
              <a href="/Anita-Lottering-CV.pdf" target="_blank" rel="noreferrer" download>
                <Download className="w-4 h-4 mr-2" /> Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-3 animate-fade-in-up">
            {contactItems.map((c) => {
              const Inner = (
                <>
                  <div className={`w-12 h-12 rounded-2xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                    <c.icon className="w-5 h-5 text-foreground/70" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="font-medium truncate">{c.value}</p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass-card p-5 flex items-start gap-4 transition-smooth hover:-translate-y-1 hover:shadow-hover"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label} className="glass-card p-5 flex items-start gap-4">
                  {Inner}
                </div>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 glass-card p-8 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Your name" className="rounded-2xl bg-white/60 border-white/60 h-12 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth" />
              <Input required type="email" placeholder="Your email" className="rounded-2xl bg-white/60 border-white/60 h-12 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth" />
            </div>
            <Input required placeholder="Subject" className="rounded-2xl bg-white/60 border-white/60 h-12 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth" />
            <Textarea required placeholder="Tell me about your project..." rows={5} className="rounded-2xl bg-white/60 border-white/60 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth resize-none" />
            <Button type="submit" size="lg" className="w-full rounded-2xl bg-gradient-primary hover:shadow-hover transition-smooth border-0 text-primary-foreground">
              <Send className="w-4 h-4 mr-2" /> Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
