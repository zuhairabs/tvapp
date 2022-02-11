import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 6rem;
  background-image: ${({ img }) => img && `url(${img})`};
  background-size: cover;
  border-radius: 0.4rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  ${"" /* transition: all 0.5s ease-in-out; */}
  cursor: pointer;
  transition: z-index 1s step-start, all 0.3s linear;
  z-index: 20;

  &:hover,
  &:active {
      transform: scale(1.3); box-shadow: var(--card-shadow);
      z-index: 30;
  > div {
    opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    backdrop-filter: blur(1px);
    -webkit-box-shadow: var(--inset-shadow);
    -moz-box-shadow: var(--inset-shadow);
    box-shadow: var(--inset-shadow);
  }
`;

export const CardTitle = styled.div`
  position: absolute;
  left: 0;
  top: 1rem;
  color: var(--white);
  width: 100%;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 800;
  text-shadow: var(--text-shadow);
`;

export const CardSubTitle = styled.div`
  position: absolute;
  left: 0;
  top: 2.5rem;
  color: var(--text-light);
  width: 100%;
  margin: 0 1rem;
  font-size: 0.6rem;
  font-weight: 800;
  text-shadow: var(--text-shadow);
`;

export const CardInnerContent = styled.div`
  position: relative;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-top: 1rem;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ color }) => color || "var(--white)"};
  box-shadow: var(--shadow-light);
  border-radius: 50%;

  &:hover {
    opacity: 0.7;
  }
`;

export const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  top: 3rem;
  margin-left: 1rem;
  width: 100%;
  height: 100%;
`;
