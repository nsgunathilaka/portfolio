import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiMagento, SiWordpress, SiAmazon, SiPython, SiDjango, SiPostgresql, SiReact } from "react-icons/si";

const skills = [
  { name: "Magento", icon: SiMagento, description: "E-commerce Platform Development" },
  { name: "WordPress", icon: SiWordpress, description: "CMS & Website Development" },
  { name: "AWS", icon: SiAmazon, description: "Cloud Infrastructure & DevOps" },
  { name: "Python", icon: SiPython, description: "Backend Development" },
  { name: "Django", icon: SiDjango, description: "Web Framework" },
  { name: "SQL", icon: SiPostgresql, description: "Database Management" },
  { name: "Payload CMS", icon: SiReact, description: "Headless CMS Development" } // Add Payload CMS
];

export default function Skills() {
  return (
      <section id="skills" className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <skill.icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
