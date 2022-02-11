import { Card } from "./Card";
import { CardListWrapper } from "./CardList.style";

export const CardList = ({ list }) => {
  return (
    <CardListWrapper>
      {list.map((item, index) => (
        <Card
          key={`${item.title}-${index}`}
          img={item.img}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </CardListWrapper>
  );
};
