import { useEffect, useState } from "react";
import { VideoHeader } from "@components/Home/HeaderSlider/VideoHeader";
import { MyWatchlist } from "@components/Home/WatchList/MyWatchlist";
import { ShadowBoxBottom, ShadowBoxTop, ContentWrapper } from "./Home.style";
import { Preloader } from "@components/Common/Preloader/Preloader";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let clearTime = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(clearTime);
    };
  }, [loading]);

  return (
    <>
      {!loading ? (
        <>
          <VideoHeader />
          <ContentWrapper>
            <ShadowBoxBottom />
            <ShadowBoxTop />
            <MyWatchlist />
          </ContentWrapper>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};
