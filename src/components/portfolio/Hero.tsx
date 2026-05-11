import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/anita-profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-6 md:px-12 bg-background"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-foreground" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-foreground" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-foreground">
              Portfolio · 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            Welcome to <br />
            My Portfolio
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I'm <span className="font-semibold text-foreground">Anita Lottering</span> — a software developer crafting clean, modern web &amp; mobile experiences with React, Angular and React Native.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-foreground text-background hover:bg-foreground/85 transition-smooth border-0 px-8 h-12 font-semibold"
            >
              <a href="#projects">
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background transition-smooth px-8 h-12 font-semibold"
            >
              <a href="/Anita-Lottering-CV.pdf" download>
                <Download className="w-4 h-4 mr-2" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <a
              href="https://github.com/AnitaLottering"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:opacity-60 transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anita-lottering-95989a347/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:opacity-60 transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="w-8 h-px bg-border" />
            <a
              href="mailto:anitalottering16@gmail.com"
              className="text-sm font-medium text-foreground hover:opacity-60 transition-smooth"
            >
              anitalottering16@gmail.com
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-foreground border-2 border-foreground">
            <img
              src={profileImg}
              alt="Anita Lottering portrait"
              className="w-full h-full object-cover"
              width={1080}
              height={1350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
