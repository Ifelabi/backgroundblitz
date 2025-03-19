
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFiles(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFiles(files[0]);
    }
  };

  const handleFiles = (file: File) => {
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
          simulateProcessing();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
    }, 2000);
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Remove Image Backgrounds <span className="text-brand-500">Instantly</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              AI-powered background removal in seconds. Perfect for e-commerce, 
              designers, and marketers. No design skills needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-brand-500 hover:bg-brand-600 h-12 px-6 text-base">
                Try For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base border-gray-700 text-gray-300 hover:bg-secondary">
                See How It Works
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center">
                <Check className="text-brand-400 mr-2 h-5 w-5" />
                <span className="text-gray-300">100% Automated</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-400 mr-2 h-5 w-5" />
                <span className="text-gray-300">HD Quality</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-400 mr-2 h-5 w-5" />
                <span className="text-gray-300">Free Tier</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className={cn(
                "border-2 rounded-2xl overflow-hidden transition-all",
                isDragging ? "border-brand-500 border-dashed bg-secondary" : "border-gray-800",
                (isProcessing || isProcessed) ? "min-h-[280px]" : "min-h-[320px]"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!uploadedImage && (
                <div className="flex flex-col items-center justify-center h-full p-8 bg-secondary">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-200 mb-2">
                    Drag & drop an image here
                  </h3>
                  <p className="text-gray-400 text-center mb-4">
                    or click to browse files (PNG, JPG)
                  </p>
                  <Button 
                    variant="outline" 
                    className="relative border-gray-700 text-gray-300 hover:bg-muted"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    Select Image
                  </Button>
                </div>
              )}

              {uploadedImage && (
                <div className="w-full h-full bg-secondary">
                  {isProcessing && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white z-10">
                      <div className="h-12 w-12 rounded-full border-4 border-brand-500 border-t-transparent animate-spin mb-4"></div>
                      <p className="text-lg font-medium">Removing background...</p>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="flex-1 p-3 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                        alt="Original" 
                        className="max-h-[260px] max-w-full object-contain rounded" 
                      />
                    </div>
                    
                    {isProcessed && (
                      <div className="flex-1 p-3 flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-contain">
                        <img 
                          src={uploadedImage} 
                          alt="Processed" 
                          className="max-h-[260px] max-w-full object-contain rounded" 
                        />
                        <Button className="mt-4 bg-brand-500 hover:bg-brand-600">
                          Download
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-brand-900/50 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-brand-800/30 rounded-full filter blur-xl opacity-70 animate-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
