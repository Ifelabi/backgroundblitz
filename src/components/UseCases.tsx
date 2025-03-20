import React from "react";
import { ShoppingBag, PenTool, ImagePlus, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

const UseCaseCard = ({ icon, title, description, imageUrl, videoUrl }: UseCaseCardProps) => (
  <div className="group rounded-xl overflow-hidden bg-secondary border border-gray-800 shadow hover:shadow-lg transition-all">
    <div className="h-48 overflow-hidden">
      {videoUrl ? (
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
      ) : (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-brand-900/50 rounded-full p-2">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
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
            description="Increase Conversion Rates. By harmonizing images across your entire store, you remove distractions. This means customers will focus on your products and nothing else. It's a simple improvement that allows customers to select items and place orders easier and more often. Along with increasing sales, remove.bg's clean backgrounds improve customers' trust, help them compare products, increase image capturing efficiency, and reduce data preparation costs."
            videoUrl="/developers.mp4"
          />
          <UseCaseCard
            icon={<PenTool className="h-5 w-5 text-brand-500" />}
            title="Designers"
            description="Images are a feature of nearly all apps, enhancing UX and improving user-generated content. Once, you had to be an expert in visual computing and artificial intelligence - developing and maintaining a completely different technology stack - just to remove the background from an image. Well, not any more. We've packed it all into one line of code for any image."
            imageUrl="/design.png"
          />
          <UseCaseCard
            icon={<ImagePlus className="h-5 w-5 text-brand-500" />}
            title="Marketers"
            description="Creating engaging and interactive experiences for your audience is key to successful brand campaigns and headline stories. With remove.bg, you can create and share stunning, eye-catching images with ease. Not only does remove.bg enhance customer interaction, but it also drastically speeds up the image editing process. Manually cutting out an image can take anywhere from a minute to twenty, depending on complexity. With remove.bg, you'll be done in just 5 seconds, thanks to its fully automated AI. You can focus on other tasks while our AI swiftly removes your image backgrounds, making your workflow more efficient than ever."
            videoUrl="/media-3.mp4"
          />
          <UseCaseCard
            icon={<Camera className="h-5 w-5 text-brand-500" />}
            title="Photographers"
            description="With BackgroundBlitz, there's no need for chroma-keying environments under those perfectly tuned lighting conditions. Just shoot where you are: in front of a white wall, on a busy crossroad or with the pitch-black night sky in the background. You can leave your green screen at home! But if you really need a screen, removing chroma-keying backgrounds works too, green or not."
            imageUrl="/photo.png"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
