import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 28%;
  width: 100%;
  margin-top: -8rem;
`;

export const SliderLabel = styled.div`
  font-size: 1rem;
  padding: 0 1.5rem;
  border-radius: 0.2rem 1rem;
  margin-bottom: 0.5rem;
  background-color: var(--red);
  color: var(--white);
`;

export const SliderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
  color: var(--white);
`;

export const SliderSubtitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  ${"" /* width: 20rem; */}
`;

export const SliderSubtitleItem = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-right: 2rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  color: var(--white);
`;

export const SliderButtons = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ color }) => color || "var(--white)"};
  box-shadow: var(--shadow-light);
  border-radius: 50%;
`;

export const PrimaryButton = styled.div`
  display: flex;
  position: relative;
  padding: 0.5rem 3rem;
  outline: none;
  border: none;
  border-radius: 1.2rem;
  background-color: #6c43bf;
  color: var(--white);
  font-size: 1rem;
  font-weight: 800;
  margin-right: 1.5rem;
  box-shadow: var(--shadow-dark);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SecondaryButton = styled.div`
  padding: 0.5rem 2rem;
  outline: none;
  border: none;
  border-radius: 1.2rem;
  background-color: var(--button-light);
  backdrop-filter: blur(4px);
  color: var(--white);
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const AudioButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--audio-button-color);
  top: 5rem;
  right: 5rem;
  width: 3rem;
  height: 3rem;
  background-color: var(--button-light);
  box-shadow: var(--shadow-light);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
