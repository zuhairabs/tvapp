import { IoPlayOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import {
  CardWrapper,
  CardTitle,
  CardSubTitle,
  CardInnerContent,
  CardButtonWrapper,
  CardButton,
} from "./Card.style";

export const Card = ({ img, title, subTitle }) => {
  return (
    <>
      <CardWrapper img={img}>
        <CardInnerContent>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{subTitle}</CardSubTitle>
          <CardButtonWrapper>
            <CardButton color="var(--primary-light)">
              <IoPlayOutline size={24} />
            </CardButton>
            <CardButton color="var(--button-light-lg)">
              <FiPlus size={24} />
            </CardButton>
          </CardButtonWrapper>
        </CardInnerContent>
      </CardWrapper>
    </>
  );
};
