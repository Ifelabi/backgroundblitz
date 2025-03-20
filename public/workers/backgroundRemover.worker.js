self.onmessage = async (e) => {
  try {
    const img = await loadImage(e.data.image);
    const canvas = new OffscreenCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Draw and process image
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // Process image data (add your segmentation logic here)
    const processedData = processImageData(imageData);
    
    // Convert back to Blob
    const blob = await canvas.convertToBlob({ type: 'image/png' });
    self.postMessage({ result: blob });
    
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};

function processImageData(imageData) {
  // Add your optimized image processing logic here
  return imageData;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Add optimized image processing functions here 