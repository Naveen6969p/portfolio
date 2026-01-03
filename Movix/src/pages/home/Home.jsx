import React from "react";
import "./style.scss";
import Herobanner from "./herobanner/Herobanner";
import  Trending  from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePge">
      <Herobanner />
      <Trending />
      <Popular />
      <TopRated />
      <div ></div>
    </div>
  );
};

export default Home;
