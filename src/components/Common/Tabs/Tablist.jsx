import { TabItem } from "./TabItem";
import { TabListWrapper } from "./Tablist.style";

const TABS = ["Recents", "Favorites"];

export const Tablist = ({ tabIndex, setTabIndex }) => {
  return (
    <TabListWrapper>
      {TABS.map((title, index) => (
        <TabItem
          handleClick={setTabIndex}
          key={`${title}-index`}
          index={index}
          active={tabIndex == index ? true : false}
          title={title}
        />
      ))}
    </TabListWrapper>
  );
};
