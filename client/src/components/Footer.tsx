import { motion } from "framer-motion";
import { Link } from "wouter";
import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/yourusername",
    label: "Facebook"
  },
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn"
  }
];

const contactInfo = [
  {
    icon: Mail,
    href: "mailto:your.email@example.com",
    label: "your.email@example.com"
  },
  {
    icon: Phone,
    href: "tel:+94123456789",
    label: "+94 12 345 6789"
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground pt-8 border-t border-primary/10"
        >
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="mt-1">Crafted with passion using React and Modern Web Technologies</p>
        </motion.div>
      </div>
    </footer>
  );
}
