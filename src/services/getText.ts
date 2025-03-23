import axios from 'axios';

interface TextResponse {
  text: string;
}

export const getText = async (): Promise<TextResponse> => {
  try {
    const response = await axios.get<TextResponse>(
      'https://api.example.com/get-text'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTextExample = async (): Promise<string> => {
  try {
    const response = await fetch('/Carousel/text.txt');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching text file:', error);
    return 'Error fetching text.';
  }
};
