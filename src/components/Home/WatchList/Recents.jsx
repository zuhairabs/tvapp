import { CardList } from "@components/Common/Cards/CardList";
import { RECENTS } from "@constants/home.static";

export const Recents = () => {
  return (
    <>
      <CardList list={RECENTS} />
    </>
  );
};
