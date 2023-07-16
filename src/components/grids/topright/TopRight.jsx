import { Card } from "antd";
import React from "react";
import IProgress from "../../shared/IProgress";

const TopRight = ({ loading, data }) => {
  const progressArray = [
    {
      percent: data.profilePercent,
      showInfo: true,
      status: "active",
      color: "lightgray",
    },
  ];
  return (
    <Card className="m-top-20 h-60" bordered={false}>
      {loading ? (
        <>
          <div className="skelton-large" />
          <div className="skelton-small m-top-20" />
          <div className="skelton-large m-top-20" />
        </>
      ) : (
        <div style={{ marginLeft: -25, marginTop: -22 }}>
          <img src="baytlogo.png" style={{ width: 250, height: 100 }} />
          <div style={{ marginLeft: 30, marginTop: -30 }}>
            <h3>{data.title}</h3>
            <IProgress __array={progressArray} />
            <a href="#" style={{ color: "green", textDecoration: "underline" }}>
              {data.subHeading}
            </a>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TopRight;
