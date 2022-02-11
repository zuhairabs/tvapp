import { CardList } from "@components/Common/Cards/CardList";
import { FAVORITES } from "@constants/home.static";

export const Favorites = () => {
  return (
    <>
      <CardList list={FAVORITES} />
    </>
  );
};
