export const validateImageFile = (file: File): { valid: boolean, message?: string } => {
  // Supported MIME types
  const supportedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  
  // Check file type
  if (!supportedTypes.includes(file.type)) {
    return {
      valid: false,
      message: 'Unsupported file type. Please upload a JPG, PNG, or WEBP image.'
    };
  }

  // Check file size
  if (file.size > 10 * 1024 * 1024) { // 10MB
    return {
      valid: false,
      message: 'File size too large. Maximum size is 10MB.'
    };
  }

  return { valid: true };
};

export const validateImageDimensions = (img: HTMLImageElement): { valid: boolean, message?: string } => {
  if (img.width > 4096 || img.height > 4096) {
    return {
      valid: false,
      message: 'Image dimensions too large. Maximum supported size is 4096x4096 pixels.'
    };
  }

  return { valid: true };
}; 