
import React from "react";
import { Zap, Image, Clock, Database, Code, RotateCcw } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card">
    <div className="bg-brand-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Perfect Results
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered technology delivers exceptional results with minimal effort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-brand-500" />}
            title="Lightning Fast"
            description="Remove backgrounds in just 3 seconds. Process hundreds of images in minutes."
          />
          <FeatureCard
            icon={<Image className="h-6 w-6 text-brand-500" />}
            title="Pixel Perfect Accuracy"
            description="Our AI detects even the most complex edges and details with precision."
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-brand-500" />}
            title="Batch Processing"
            description="Upload and process multiple images at once to save time."
          />
          <FeatureCard
            icon={<Database className="h-6 w-6 text-brand-500" />}
            title="Cloud Storage"
            description="Access your processed images from anywhere, anytime."
          />
          <FeatureCard
            icon={<Code className="h-6 w-6 text-brand-500" />}
            title="API Integration"
            description="Integrate with your website or app using our developer-friendly API."
          />
          <FeatureCard
            icon={<RotateCcw className="h-6 w-6 text-brand-500" />}
            title="No Quality Loss"
            description="Maintains high resolution and image quality after processing."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
