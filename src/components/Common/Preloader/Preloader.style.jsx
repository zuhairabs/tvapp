import styled from "styled-components";

export const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--preloader-bg);
  z-index: 999;
`;

export const PreloaderText = styled.h1`
  color: var(--white);
  margin: 0 4rem;
  font-size: 2rem;
  font-weight: 900;
`;

export const PreloaderBar = styled.div`
  position: relative;
  margin: 1rem;
  width: 18rem;
  margin-top: 1rem;
`;
