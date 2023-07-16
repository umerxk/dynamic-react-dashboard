import { Card, Progress, Skeleton } from "antd";
import React from "react";
import ATabs from "../../shared/Tabs";

const BottomRight = ({ loading, etabs, data }) => {
  const tabs = [
    {
      key: "1",
      heading: etabs.t1,
    },
    {
      key: "2",
      heading: etabs.t2,
    },
    {
      key: "3",
      heading: etabs.t3,
    },
  ];
  return (
    <Card
      className="m-top-20"
      style={{ height: 390 }}
      title={loading ? "" : data.title}
      bordered={false}
    >
      {loading ? (
        <>
          <div className="skelton-large m-top-20" />
          <div className="skelton-large m-top-20" />
          <div className="skelton-small m-top-20" />
          <div className="skelton-large m-top-20" />
        </>
      ) : (
        <>
          <ATabs tabs={tabs} />
          <div>
            <b>Store: Bad Apple</b>
            <p style={{ marginTop: -2, color: "lightgray" }}>6 aug 2018</p>
          </div>
          <div className="flex justify-center">
            <Progress type="circle" percent={data.value} />
          </div>
        </>
      )}
    </Card>
  );
};

export default BottomRight;
