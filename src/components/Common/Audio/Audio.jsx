import { useEffect, useRef } from "react";
import { AudioWrapper } from "./Audio.style";

export const Audio = ({ audio, mute }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (!mute) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [mute]);

  return (
    <AudioWrapper>
      <audio ref={audioRef}>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </AudioWrapper>
  );
};

// muted={mute ? true : ""} autoPlay
