import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 512;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  // Calculate new dimensions while maintaining aspect ratio
  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    const scale = Math.min(MAX_IMAGE_DIMENSION / width, MAX_IMAGE_DIMENSION / height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  return width !== image.naturalWidth || height !== image.naturalHeight;
}

export const removeBackground = async (
  imageElement: HTMLImageElement,
  progressCallback?: (progress: number) => void
): Promise<Blob> => {
  try {
    // Use Web Worker if available
    if (window.Worker) {
      const worker = new Worker('/workers/backgroundRemover.worker.js');
      return new Promise((resolve, reject) => {
        worker.postMessage({ image: imageElement.src });
        worker.onmessage = (e) => {
          if (e.data.error) reject(e.data.error);
          else resolve(e.data.result);
          worker.terminate();
        };
      });
    }

    // Fallback to main thread processing
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize and process image
    const scale = Math.min(MAX_IMAGE_DIMENSION / imageElement.width, MAX_IMAGE_DIMENSION / imageElement.height);
    canvas.width = imageElement.width * scale;
    canvas.height = imageElement.height * scale;
    ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

    // Convert to Blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) reject(new Error('Failed to create output blob'));
        else resolve(blob);
      }, 'image/png');
    });

  } catch (error) {
    console.error('Background removal error:', error);
    throw error;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};
