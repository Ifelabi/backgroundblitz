import React from "react";
import { Image, Upload, Puzzle, Clock, ArrowRight, Zap, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureBlockProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  icon?: React.ElementType;
  imagePosition?: "top" | "bottom";
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ 
  title, 
  description, 
  imageUrl,
  videoUrl, 
  icon: Icon,
  imagePosition = "top"
}) => {
  const MediaContent = videoUrl ? (
    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-800/50 mb-6">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : imageUrl ? (
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
      {imagePosition === "top" && MediaContent}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
      {imagePosition === "bottom" && MediaContent}
    </div>
  );
};

const Features = () => {
  const features: FeatureBlockProps[] = [
    {
      title: "Why remove the background from your picture?",
      description: "Deleting the background from an image can be useful for many different reasons. You might need to add a graphic to a presentation, remove the background from a logo, or even use a cutout to create a design for a T-shirt or a sweater. Whatever the reason, it's important that the result is of good quality.",
      videoUrl: "/individuals1.mp4",
      imagePosition: "top"
    },
    {
      title: "How to make the background of a picture transparent",
      description: "Deleting a background on BackgroundBlitz is very simple and will only take 5 seconds. Simply upload or drag and drop your image to the website. BackgroundBlitz will then remove the background from your image automatically. That's it. Now you can decide whether to download the image in HD or SD quality.",
      videoUrl: "/v2a-compressed.mp4",
      imagePosition: "bottom"
    },
    {
      title: "High-quality and precise cutouts",
      description: "BackgroundBlitz uses state-of-the-art technology to remove the background from images and continuously improves it to deliver the best results. With BackgroundBlitz you will receive high-quality, high-resolution images, even up to 50 megapixels.",
      imageUrl: "/man.png",
      imagePosition: "top"
    },
    {
      title: "Discover remove.bg's plugins and integrations",
      description: "BackgroundBlitz offers a wide range of tools and integrations that seamlessly integrate background removal into your workflow. Whether you're a photographer or designer, you can streamline your tasks with plugins for Figma, Photoshop, and Gimp. For Shopify users, BackgroundBlitz offers a dedicated plugin to enhance your e-commerce efficiency. And that's not all—thanks to integrations with Make and Zapier, you can connect BackgroundBlitz to thousands of apps, further expanding your efficiency.",
      imageUrl: "/plugin.png",
      imagePosition: "bottom"
    },
    {
      title: "Save time with batch editing",
      description: "Need to remove the background from multiple images? With BackgroundBlitz, you have a variety of options. The desktop app allows you to bulk-edit images quickly and efficiently. For seamless integration into your workflow, you can use the API. If you handle a high volume of images each month, a customized plan will provide you with maximum flexibility and benefits, including the lowest price per image and adaptable rate limits.",
      videoUrl: "/bulk.mp4",
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
