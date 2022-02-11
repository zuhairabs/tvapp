import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  SliderControlsWrapper,
  CircleProgressBar,
  Dot,
  ArrowControls,
} from "./SliderControls.style";

export const SliderControls = ({ data, handleSlideChange, currentSlide }) => {
  const incrementSlide = () => {
    if (currentSlide < data.length - 1) {
      handleSlideChange(currentSlide + 1);
    } else {
      handleSlideChange(0);
    }
  };

  const decrementSlide = () => {
    if (currentSlide > 0) {
      handleSlideChange(currentSlide - 1);
    } else {
      handleSlideChange(data.length - 1);
    }
  };

  return (
    <SliderControlsWrapper>
      <CircleProgressBar>
        {data.map((_, index) =>
          currentSlide === index ? (
            <Dot key={index} onClick={() => handleSlideChange(index)} active />
          ) : (
            <Dot key={index} onClick={() => handleSlideChange(index)} />
          )
        )}
      </CircleProgressBar>
      <ArrowControls>
        <IoIosArrowBack onClick={() => decrementSlide()} size={30} />
        <IoIosArrowForward onClick={() => incrementSlide()} size={30} />
      </ArrowControls>
    </SliderControlsWrapper>
  );
};
