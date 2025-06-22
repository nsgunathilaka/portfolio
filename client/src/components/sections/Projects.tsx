import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SiMagento, SiWordpress, SiAmazon, SiPython, SiDjango, SiPostgresql } from "react-icons/si";

const projects = [
  {
    title: "Kiddoz.lk",
    description: "Built a feature-rich e-commerce platform for children's products with advanced filtering, wishlist functionality, and secure payment integration.",
    tech: ["Magento", "PHP", "MySQL", "AWS"],
    icon: SiMagento,
    link: "https://kiddoz.lk",
    github: "https://github.com/yourusername/kiddoz"
  },
  {
    title: "Bonz.com",
    description: "Developed a high-performance e-commerce solution with real-time inventory management and multi-vendor support.",
    tech: ["WordPress", "PHP", "React", "MySQL"],
    icon: SiWordpress,
    link: "https://bonz.com",
    github: "https://github.com/yourusername/bonz"
  },
  {
    title: "J20Sports.com",
    description: "Created a dynamic sports e-commerce platform with real-time scoring updates and team merchandise integration.",
    tech: ["Python", "Django", "React", "PostgreSQL"],
    icon: SiDjango,
    link: "https://j20sports.com",
    github: "https://github.com/yourusername/j20sports"
  },
  {
    title: "Enterprise CMS",
    description: "Developed a scalable WordPress multisite network supporting 50+ business units. Created custom plugins for content synchronization.",
    tech: ["WordPress", "PHP", "React", "MySQL"],
    icon: SiWordpress,
    link: "https://example.com/cms",
    github: "https://github.com/yourusername/cms"
  },
  {
    title: "Cloud Infrastructure",
    description: "Designed and implemented cloud infrastructure on AWS serving millions of requests. Implemented auto-scaling and load balancing.",
    tech: ["AWS", "Terraform", "Docker", "Jenkins"],
    icon: SiAmazon,
    link: "https://example.com/cloud",
    github: "https://github.com/yourusername/cloud"
  }
];

export default function Projects() {
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      dragFree: true
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <project.icon className="h-8 w-8 text-primary" />
                      <CardTitle>{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}