import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

const experiences = [
  {
    company: "NeoSolax Pvt Ltd",
    position: "Software Engineer",
    duration: "2022 - Present",
    location: "Sri Lanka",
    description: "Leading fullstack development projects and implementing scalable solutions using modern technologies.",
    years: "2 years",
    type: "Full-time"
  },
  {
    company: "Virtusa Pvt Ltd",
    position: "Intern Software Engineer",
    duration: "2021 - 2022",
    location: "Sri Lanka",
    description: "Gained hands-on experience in enterprise software development and agile methodologies.",
    years: "1 year",
    type: "Internship"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Journey
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 mb-12 last:mb-0"
              >
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <BriefcaseIcon className="w-4 h-4 text-primary" />
                </div>

                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          {exp.duration}
                        </Badge>
                        <Badge>{exp.type}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
