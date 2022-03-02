import React from "react";
import "./Info.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function Info() {
  return (
    <div className="info">
      <div className="info__item">
        <span className="info__title">Sales</span>
        <div className="info__money">
          <span className="info__price">€1,447</span>
          <span className="info__priceRate">
            -11.5 <ArrowDownwardIcon className="icon negative" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>

      <div className="info__item">
        <span className="info__title">Revenue</span>
        <div className="info__money">
          <span className="info__price">€2,457</span>
          <span className="info__priceRate">
            -1.4 <ArrowDownwardIcon className="icon negative" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>

      <div className="info__item">
        <span className="info__title">Cost</span>
        <div className="info__money">
          <span className="info__price">€3,425</span>
          <span className="info__priceRate">
            4.53 <ArrowUpwardIcon className="icon" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
    </div>
  );
}

export default Info;
