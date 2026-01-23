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

export function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  link,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        to={link}
        className="group flex flex-col h-full rounded-2xl overflow-hidden bg-background border border-border shadow-warm hover:shadow-warm-lg transition-all duration-300"
      >
        {/* IMAGE (TOP ONLY) */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* CONTENT (UNDER IMAGE) */}
        <div className="flex flex-col flex-1 p-6">
          {/* Icon + Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary-foreground" />
            </div>

            <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            Learn More
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
