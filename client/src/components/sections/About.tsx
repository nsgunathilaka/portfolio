import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate fullstack developer with extensive experience in building robust web applications. My journey in software development has equipped me with a diverse skill set spanning multiple technologies and frameworks.
              </p>
              <p className="text-lg leading-relaxed">
                With expertise in Magento and WordPress for e-commerce solutions, coupled with strong backend capabilities in Python/Django and cloud infrastructure on AWS, I deliver scalable and efficient solutions that drive business value.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
