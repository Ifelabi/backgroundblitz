
import React from "react";
import { ShoppingBag, PenTool, ImagePlus, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const UseCaseCard = ({ icon, title, description, imageUrl }: UseCaseCardProps) => (
  <div className="group rounded-xl overflow-hidden bg-secondary border border-gray-800 shadow hover:shadow-lg transition-all">
    <div className="h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-brand-900/50 rounded-full p-2">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <Button variant="link" className="text-brand-400 p-0 hover:text-brand-300">
        Learn more &rarr;
      </Button>
    </div>
  </div>
);

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Who Uses BackgroundBlitz?
          </h2>
          <p className="text-xl text-gray-300">
            Perfect for professionals across industries who need high-quality image editing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UseCaseCard
            icon={<ShoppingBag className="h-5 w-5 text-brand-500" />}
            title="E-commerce"
            description="Create clean, professional product photos with transparent backgrounds."
            imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          />
          <UseCaseCard
            icon={<PenTool className="h-5 w-5 text-brand-500" />}
            title="Designers"
            description="Quickly extract elements for mockups, designs, and creative projects."
            imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
          />
          <UseCaseCard
            icon={<ImagePlus className="h-5 w-5 text-brand-500" />}
            title="Marketers"
            description="Create eye-catching content for social media, ads, and websites."
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
          />
          <UseCaseCard
            icon={<Camera className="h-5 w-5 text-brand-500" />}
            title="Photographers"
            description="Enhance portrait and product photos with clean backgrounds."
            imageUrl="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
