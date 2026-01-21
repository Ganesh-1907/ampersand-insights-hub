import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ServiceCard({ icon: Icon, title, description, image, link }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-2xl card-elevated bg-background"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 via-olive-900/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1 group-hover:text-olive-200 transition-colors">
              {title}
            </h3>
            <p className="font-body text-sm text-olive-200 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
