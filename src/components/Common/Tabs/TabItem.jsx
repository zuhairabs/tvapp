import React from "react";
import { StyledTab } from "./TabItem.style";

export const TabItem = ({ active, index, title, handleClick }) => {
  return (
    <>
      {active ? (
        <StyledTab active>
          <span>{title}</span>
        </StyledTab>
      ) : (
        <StyledTab onClick={() => handleClick(index)}>
          <span>{title}</span>
        </StyledTab>
      )}
    </>
  );
};
