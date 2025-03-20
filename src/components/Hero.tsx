import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import backgroundRemover from '@/services/backgroundRemover';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

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

  const validateImage = (file: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (!validTypes.includes(file.type)) {
      throw new Error('Unsupported file type. Please upload JPG, PNG, or WEBP.');
    }
    
    if (file.size > maxSize) {
      throw new Error('File size too large. Maximum size is 10MB.');
    }
  };

  const handleFiles = async (file: File) => {
    try {
      validateImage(file);
      setError(null);
      setIsProcessing(true);
      setIsProcessed(false);
      
      // Display original image
      const reader = new FileReader();
      const imageBase64 = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      setOriginalImage(imageBase64);
      
      // Process image
      const processedBlob = await backgroundRemover(imageBase64);
      
      // Validate processed image
      if (!processedBlob) {
        throw new Error('Processing failed. Please try again');
      }

      const processedDataUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedDataUrl);
      setIsProcessed(true);
      
      toast({
        variant: "default",
        title: "Success!",
        description: "Background removed successfully!",
        duration: 3000
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
        duration: 3000
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
              <Link to="/pricing">
                <Button className="bg-brand-500 hover:bg-brand-600 h-12 px-6 text-base">
                  Try For Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="h-12 px-6 text-base border-gray-700 text-gray-300 hover:bg-secondary">
                  See How It Works
                </Button>
              </Link>
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
                  <div className="w-full max-w-sm mx-auto mb-6">
                    <div className="relative border-2 border-dashed border-gray-600 rounded-lg aspect-[4/3] overflow-hidden group hover:border-brand-500 transition-colors">
                      <div className="absolute inset-0 bg-gray-800/50 flex flex-col items-center justify-center p-6">
                        <div className="w-16 h-16 mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
                          <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-200 mb-2 text-center">
                          Drag & drop an image here
                        </h3>
                        <p className="text-gray-400 text-center text-sm mb-4">
                          or click to browse files
                        </p>
                        <p className="text-gray-500 text-xs text-center">
                          Supported formats: PNG, JPG
                        </p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  
                  {/* Video Preview */}
                  <div className="w-full max-w-sm mx-auto mt-6 bg-gray-800/50 rounded-lg p-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <video 
                        className="w-full h-full object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src="/individuals1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
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
