
import React from "react";
import { UploadCloud, Cpu, Download } from "lucide-react";

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: number; 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How BackgroundBlitz Works
          </h2>
          <p className="text-xl text-gray-600">
            Remove backgrounds in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-8 left-[25%] right-[25%] h-1 bg-gray-200 z-0"></div>
          
          <StepCard
            number={1}
            icon={<UploadCloud className="h-8 w-8 text-white" />}
            title="Upload Your Image"
            description="Drag and drop your image or select from your computer, cloud, or URL."
          />
          
          <StepCard
            number={2}
            icon={<Cpu className="h-8 w-8 text-white" />}
            title="AI Processing"
            description="Our AI instantly analyzes and removes the background with precision."
          />
          
          <StepCard
            number={3}
            icon={<Download className="h-8 w-8 text-white" />}
            title="Download Result"
            description="Get your image with transparent background in PNG format or add a custom background."
          />
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block rounded-lg overflow-hidden border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <video 
              className="w-full h-auto"
              poster="/placeholder.svg"
              controls
            >
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
