import React, { useState } from "react";
import {
  SliderWrapper,
  SliderTitle,
  SliderSubtitle,
  SliderSubtitleItem,
  SliderLabel,
  SliderButtons,
  IconWrapper,
  PrimaryButton,
  SecondaryButton,
  AudioButtonWrapper,
} from "./SliderContent.style";
import {
  IoPlayOutline,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Audio } from "@components/Common/Audio/Audio";
import ZiyaratAudio from "@assets/audio/ziyarat-ashura.mp3";

export const SliderContent = ({ data }) => {
  const [mute, setMute] = useState(false);
  const handleAudio = () => {
    setMute((prev) => !prev);
  };

  return (
    <SliderWrapper>
      <SliderLabel>{data.label}</SliderLabel>
      <SliderTitle>{data.title}</SliderTitle>
      <SliderSubtitle>
        <SliderSubtitleItem>
          {data.place}| {data.country}
        </SliderSubtitleItem>
        <SliderSubtitleItem>{data.language}</SliderSubtitleItem>
        <SliderSubtitleItem>
          Details <IoIosArrowForward size={15} />
        </SliderSubtitleItem>
      </SliderSubtitle>
      <SliderButtons>
        <PrimaryButton>
          <IconWrapper color="var(--primary-light)">
            <IoPlayOutline size={36} />
          </IconWrapper>
          &nbsp; &nbsp;Play
        </PrimaryButton>
        <SecondaryButton>
          <IconWrapper color="var(--button-light-lg)">
            <FiPlus size={36} />
          </IconWrapper>
          &nbsp; &nbsp; &nbsp;Add to Favorites
        </SecondaryButton>
      </SliderButtons>
      <Audio mute={mute} audio={ZiyaratAudio} />
      <AudioButtonWrapper>
        {mute ? (
          <IoVolumeMuteOutline onClick={handleAudio} size={40} />
        ) : (
          <IoVolumeMediumOutline onClick={handleAudio} size={40} />
        )}
      </AudioButtonWrapper>
    </SliderWrapper>
  );
};
