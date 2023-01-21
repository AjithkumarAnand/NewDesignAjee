import React from "react";
import Chart from "../Chart/Chart";
import FeaturesInfo from "../Features/FeaturesInfo";
import "./Home.css";
import { UserData } from "../../dummuData";
import Widgetsm from "../Widgetsm/Widgetsm";
import Widgetlg from "../Widgetlg/Widgetlg";

export default function Home() {
  return (
    <div className="home">
      <FeaturesInfo />
      <Chart
        data={UserData}
        title={"User Analytics"}
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
}
