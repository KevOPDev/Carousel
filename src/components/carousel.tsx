import React from 'react';
import { useCarouselText } from '../hook/useText';
import './styles.css';

const Carousel: React.FC = () => {
  const { text, loading } = useCarouselText();

  return (
    <>
      {loading ? (
        <p className="loading-message">Loading text, please wait...</p>
      ) : (
        <p className="marquee">
          <span>{text}&nbsp;</span>
        </p>
      )}
    </>
  );
};

export default Carousel;
