import styled from "styled-components";

export const StyledTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (active ? "var(--white)" : "var(--tab-light)")};
  padding: ${({ active }) => (active ? "0.2rem 1rem" : "")};
  ${"" /* padding: 0.3rem 1rem; */}
  border: ${({ active }) => (active ? "3px solid var(--tab-light)" : "")};
  border-radius: 1.5rem;
  margin-right: 1.2rem;
  cursor: pointer;

  > span {
    font-size: 0.8rem;
  }
`;
