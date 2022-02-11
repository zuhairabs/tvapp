import styled from "styled-components";

export const ShadowBoxBottom = styled.div`
  position: absolute;
  background: var(--dark);
  background: linear-gradient(0deg, var(--dark) 0%, transparent 100%);
  width: 100%;
  height: 6rem;
  bottom: 0;
`;

export const ShadowBoxTop = styled.div`
  position: absolute;
  background: var(--dark);
  background: linear-gradient(180deg, var(--dark) 0%, transparent 100%);
  width: 100%;
  height: 6rem;
  top: -60px;
`;

export const ContentWrapper = styled.div`
  margin-top: 65vh;
  background: var(--dark);
  height: 100%;
  width: 100%;
`;
