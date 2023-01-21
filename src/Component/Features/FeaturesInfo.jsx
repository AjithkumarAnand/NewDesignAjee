import React from "react";
import "./FeaturesInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function FeaturesInfo() {
  return (
    <div className="featured">
      <div className="featuresItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3500</span>
          <span className="featuresMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuredIcon_negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
      <div className="featuresItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuresMoneyRate">
            -5.4 <ArrowDownwardIcon className="featuredIcon_negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
      <div className="featuresItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6250</span>
          <span className="featuresMoneyRate">
            +12.4 <ArrowUpwardOutlinedIcon className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
    </div>
  );
}
