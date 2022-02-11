import { useState } from "react";
import { Tablist } from "@components/Common/Tabs/Tablist";
import { Favorites } from "./Favorites";
import { Recents } from "./Recents";
import { SectionHeading } from "./MyWatchlist.style";

export const MyWatchlist = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <SectionHeading>My Watchlist</SectionHeading>
      <Tablist tabIndex={tabIndex} setTabIndex={tabChange} />
      {tabIndex == 0 && <Recents />}
      {tabIndex == 1 && <Favorites />}
    </>
  );
};
