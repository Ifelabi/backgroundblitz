import React from "react";
import { Image, Upload, Puzzle, Clock, ArrowRight, Zap, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureBlockProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ElementType;
  buttonText: string;
  buttonLink: string;
  imagePosition?: "top" | "bottom";
  hasArrow?: boolean;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ 
  title, 
  description, 
  imageUrl, 
  icon: Icon,
  buttonText,
  buttonLink,
  imagePosition = "top",
  hasArrow = true
}) => {
  const ImageContent = imageUrl ? (
    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-800/50 mb-6">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
  ) : Icon ? (
    <div className="w-16 h-16 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-brand-500" />
    </div>
  ) : null;

  return (
    <div className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-colors">
      {imagePosition === "top" && ImageContent}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <Link to={buttonLink}>
          <Button 
            variant="outline" 
            className="mt-4 border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            {buttonText}
            {hasArrow && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </Link>
      </div>
      {imagePosition === "bottom" && ImageContent}
    </div>
  );
};

const Features = () => {
  const features: FeatureBlockProps[] = [
    {
      title: "AI-Powered Background Removal",
      description: "Our advanced AI technology automatically detects and removes backgrounds with precision, saving you hours of manual editing work.",
      imageUrl: "/ai-demo.png",
      buttonText: "Try It Now",
      buttonLink: "/upload",
      imagePosition: "top"
    },
    {
      title: "Batch Processing Tools",
      description: "Process multiple images simultaneously with our efficient batch processing system. Perfect for e-commerce and large projects.",
      icon: Clock,
      buttonText: "Learn More",
      buttonLink: "/batch",
      imagePosition: "bottom"
    },
    {
      title: "Professional Integration",
      description: "Seamlessly integrate with popular design tools like Photoshop, Figma, and more through our powerful API and plugins.",
      imageUrl: "/integration.png",
      buttonText: "View Integrations",
      buttonLink: "/integrations",
      imagePosition: "top"
    },
    {
      title: "Smart Edge Detection",
      description: "Advanced edge detection algorithms ensure clean, precise cutouts even with complex subjects like hair and transparent objects.",
      icon: Zap,
      buttonText: "See Examples",
      buttonLink: "/examples",
      imagePosition: "bottom"
    },
    {
      title: "Custom Export Options",
      description: "Export your images in various formats and sizes. Choose between transparent backgrounds or custom colors to match your needs.",
      imageUrl: "/export-options.png",
      buttonText: "Export Settings",
      buttonLink: "/settings",
      imagePosition: "bottom"
    },
    {
      title: "Team Collaboration",
      description: "Share projects, manage permissions, and collaborate with team members in real-time with our enterprise features.",
      icon: Users,
      buttonText: "Team Features",
      buttonLink: "/team",
      imagePosition: "top"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 