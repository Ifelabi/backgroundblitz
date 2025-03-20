const removeBackground = async (imageBase64) => {
    try {
        const formData = new FormData();
        formData.append('image_file_b64', imageBase64.split(',')[1]);
        formData.append('size', 'auto');

        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': 'cU8CukxtNB9HZJBh75GiqSoe'
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Failed to remove background: ${errorData}`);
        }

        const blob = await response.blob();
        return blob;
    } catch (error) {
        console.error('Error removing background:', error);
        throw error;
    }
};

export default removeBackground; 