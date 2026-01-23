import { Link } from "react-router-dom";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  link: string;
  index?: number;
}

export function ServiceCard({ icon: Icon, title, description, image, link, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={link}
        className="group relative overflow-hidden rounded-3xl block bg-card border border-border/50 shadow-warm hover:shadow-warm-lg transition-all duration-500"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900/90 via-warm-900/40 to-transparent" />
        </div>

        {/* Glass Card Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="glass rounded-2xl p-5 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="font-body text-sm text-muted-foreground line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>

        {/* Decorative Gradient Border on Hover */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  );
}
