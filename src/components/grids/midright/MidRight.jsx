import { Card } from "antd";
import React from "react";
import Chart from "./Chart";
import ATabs from "../../shared/Tabs/index";

const MidRight = ({ loading, data, etabs }) => {
  const tabs = [
    {
      key: "1",
      heading: etabs.t1,
      comp: <Chart idata={data} />,
    },
    {
      key: "2",
      heading: etabs.t2,
      comp: <Chart idata={data} />,
    },
    {
      key: "3",
      heading: etabs.t3,
      comp: <Chart idata={data} />,
    },
  ];

  return (
    <>
      <Card
        className="m-top-20"
        style={{ height: 560 }}
        bordered={false}
        title={loading ? "" : data.title}
      >
        {loading ? (
          <>
            <div className="skelton-large" />
          </>
        ) : (
          <div style={{ marginTop: -20 }}>
            <ATabs tabs={tabs} />
          </div>
        )}
      </Card>
    </>
  );
};

export default MidRight;
