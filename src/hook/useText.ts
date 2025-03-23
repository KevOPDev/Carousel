import { useEffect, useState } from 'react';
import { getTextExample } from '../services/getText';

export const useCarouselText = () => {
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const loadedText = await getTextExample();
        setText(loadedText);
      } catch (error) {
        setText('Error fetching text.');
      } finally {
        setLoading(false);
      }
    };

    fetchText();
  }, []);

  return { text, loading };
};
