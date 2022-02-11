import { useState, useEffect, useRef } from "react";
import { SliderContent } from "./SliderContent";
import { SliderControls } from "./SliderControls";
import styled from "styled-components";
import { SLIDE_CONTENT, SLIDER_DURATION } from "@constants/home.static";

const Slide = styled.div``;

export const VideoHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const updateSlide = () => {
    timeoutRef.current = setTimeout(() => {
      if (currentSlide < SLIDE_CONTENT.length - 1) {
        handleSlideChange(currentSlide + 1);
      } else {
        handleSlideChange(0);
      }
    }, SLIDER_DURATION);
  };

  useEffect(() => {
    resetTimeout();
    updateSlide();
    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  return (
    <header className="video-header">
      <Slide>
        <video
          src={SLIDE_CONTENT[currentSlide].video}
          autoPlay
          loop
          playsInline
          muted
        ></video>
        <div className="viewport-header">
          <SliderContent data={SLIDE_CONTENT[currentSlide]} />
          <SliderControls
            data={SLIDE_CONTENT}
            handleSlideChange={handleSlideChange}
            currentSlide={currentSlide}
          />
        </div>
      </Slide>
    </header>
  );
};
