export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-wide">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Turning ideas into
              <br />
              <span className="text-gradient">reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in web development and design, I
                specialize in creating digital products that are both beautiful
                and functional.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and
                seamless user experiences. Every project I take on is an
                opportunity to push creative boundaries.
              </p>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-4xl font-display font-bold text-gradient">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-gradient">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent p-1">
              <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center">
                <div className="text-8xl font-display font-bold text-gradient">JD</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};
