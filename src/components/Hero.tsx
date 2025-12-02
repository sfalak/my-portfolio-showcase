import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="container-narrow">
        <div className="space-y-8">
          <p
            className="text-primary font-medium tracking-wide opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Creative Developer & Designer
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">John Doe</span>
            <br />
            I craft digital
            <br />
            experiences
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            A passionate developer and designer focused on creating beautiful,
            functional, and user-centered digital experiences.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 font-medium border border-border rounded-full hover:bg-secondary transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
