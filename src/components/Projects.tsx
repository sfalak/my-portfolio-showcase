import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce solution with seamless checkout experience",
    image: "bg-gradient-to-br from-primary/30 to-accent/10",
  },
  {
    title: "Brand Identity",
    category: "Design",
    description: "Complete brand redesign for a tech startup",
    image: "bg-gradient-to-br from-accent/30 to-primary/10",
  },
  {
    title: "Mobile App",
    category: "UI/UX Design",
    description: "Fitness tracking app with intuitive user interface",
    image: "bg-gradient-to-br from-primary/20 to-secondary",
  },
  {
    title: "Dashboard Design",
    category: "Product Design",
    description: "Analytics dashboard for enterprise clients",
    image: "bg-gradient-to-br from-secondary to-primary/20",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4">My Work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover-lift hover-glow cursor-pointer"
            >
              <div className={`aspect-[4/3] ${project.image}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
