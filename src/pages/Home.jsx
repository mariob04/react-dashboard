import React from "react";
import Chart from "../components/Chart";
import Info from "../components/Info";
import SmallWidget from "../components/SmallWidget";
import LargeWidget from "../components/LargeWidget";
import "./Home.css";
import { userData } from "../data/data";

function Home() {
  return (
    <div>
      <Info />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="home__widgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
}

export default Home;
