const removeBackground = async (image: string): Promise<Blob> => {
  try {
    const response = await fetch('https://api.backgroundremover.com/v1/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BACKGROUND_REMOVER_API_KEY}`
      },
      body: JSON.stringify({ image })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.blob();
  } catch (error) {
    console.error('Background removal error:', error);
    throw error;
  }
};

export default removeBackground; 