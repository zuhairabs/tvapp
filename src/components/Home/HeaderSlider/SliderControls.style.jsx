import styled from "styled-components";

export const SliderControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 30%;
  left: 0;
  width: 100%;
`;

export const CircleProgressBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: var(--white);
  margin-left: 28%;
`;

export const ArrowControls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: var(--button-active);
  margin-right: 4rem;

  > svg {
    margin-right: 2rem;
    cursor: pointer;
  }
`;

export const Dot = styled.div`
  width: ${(props) => (props.active ? "14px" : "14px")};
  height: ${(props) => (props.active ? "14px" : "14px")};
  border-radius: 50%;
  margin-right: 10px;
  background: ${(props) =>
    props.active ? "transparent" : "var(--button-light)"};
  border: ${(props) => (props.active ? "5px solid var(--button-active)" : "")};
  cursor: pointer;
`;
