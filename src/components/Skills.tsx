const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Figma", level: 92 },
  { name: "Tailwind CSS", level: 95 },
];

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications",
    icon: "01",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    icon: "02",
  },
  {
    title: "Brand Design",
    description: "Developing unique brand identities that stand out",
    icon: "03",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-medium tracking-wide mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
              What I <span className="text-gradient">Do</span>
            </h2>
            <div className="space-y-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-6 rounded-xl border border-border hover:border-primary/50 transition-colors hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-display font-bold text-gradient">
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary font-medium tracking-wide mb-4">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
