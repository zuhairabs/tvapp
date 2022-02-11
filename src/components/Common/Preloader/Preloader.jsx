import {
  PreloaderWrapper,
  PreloaderText,
  PreloaderBar,
} from "./Preloader.style";

export const Preloader = () => {
  return (
    <PreloaderWrapper>
      <PreloaderText> SHIACHANNEL TV </PreloaderText>
      <PreloaderBar>
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      </PreloaderBar>
    </PreloaderWrapper>
  );
};
