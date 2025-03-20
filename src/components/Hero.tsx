
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { loadImage, removeBackground } from "@/utils/backgroundRemoval";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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

  const handleFiles = async (file: File) => {
    if (!file.type.match('image.*')) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload an image file (PNG, JPG)."
      });
      return;
    }

    try {
      setError(null);
      setIsProcessing(true);
      setIsProcessed(false);
      
      // Display original image
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setOriginalImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      
      // Process the image
      toast({
        title: "Processing image",
        description: "Please wait while we remove the background..."
      });
      
      // Load image
      const img = await loadImage(file);
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Convert processed image to data URL
      const processedDataUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedDataUrl);
      setIsProcessed(true);
      
      toast({
        variant: "default",
        title: "Success!",
        description: "Background removed successfully."
      });
    } catch (err) {
      console.error("Error processing image:", err);
      setError("Failed to process image. Please try again.");
      toast({
        variant: "destructive",
        title: "Processing failed",
        description: "There was an error removing the background. Please try again."
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'removed-background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
                "min-h-[320px]"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!originalImage && (
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

              {originalImage && (
                <div className="w-full h-full bg-secondary">
                  {isProcessing && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white z-10">
                      <div className="h-12 w-12 rounded-full border-4 border-brand-500 border-t-transparent animate-spin mb-4"></div>
                      <p className="text-lg font-medium">Removing background...</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white z-10">
                      <p className="text-lg font-medium text-red-400 mb-4">{error}</p>
                      <Button 
                        variant="outline" 
                        className="border-gray-700 text-gray-300 hover:bg-muted"
                        onClick={() => {
                          setOriginalImage(null);
                          setProcessedImage(null);
                          setError(null);
                        }}
                      >
                        Try Again
                      </Button>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="flex-1 p-3 flex items-center justify-center">
                      <div className="w-full">
                        <p className="text-center text-sm text-gray-400 mb-2">Original</p>
                        <AspectRatio ratio={1}>
                          <img 
                            src={originalImage} 
                            alt="Original" 
                            className="w-full h-full object-contain rounded" 
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    
                    {isProcessed && processedImage && (
                      <div className="flex-1 p-3 flex flex-col items-center justify-center">
                        <div className="w-full">
                          <p className="text-center text-sm text-gray-400 mb-2">Background Removed</p>
                          <AspectRatio ratio={1}>
                            <div className="checkered-background w-full h-full rounded overflow-hidden">
                              <img 
                                src={processedImage} 
                                alt="Processed" 
                                className="w-full h-full object-contain" 
                              />
                            </div>
                          </AspectRatio>
                          <div className="flex justify-center mt-4">
                            <Button 
                              onClick={handleDownload} 
                              className="bg-brand-500 hover:bg-brand-600"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
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
