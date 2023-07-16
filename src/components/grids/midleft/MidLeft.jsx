import { Card, Col, Skeleton } from "antd";
import React from "react";
import Lines from "../../shared/Lines/Lines";
import ATabs from "../../shared/Tabs";

const MidLeft = ({ loading, data, etabs }) => {
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
    <Col span={22}>
      <Card
        className="m-top-20"
        style={{ height: 490 }}
        title={loading ? "" : data.title}
        bordered={false}
      >
        {loading ? (
          <>
            <div className="skelton-large" />
            <div className="skelton-small m-top-20" />
            <div className="skelton-large m-top-20" />
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <p style={{ color: "lightgray", fontSize: 22, marginTop: -15 }}>
                {" "}
                {data.date}
              </p>
              <div style={{ marginTop: -20 }}>
                <ATabs tabs={tabs} />
              </div>
            </div>
            <Lines />
            <div className="flex justify-between m-top-20">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 style={{ color: "gray" }}> {data.data1.title} </h3>
                <h2 style={{ textAlign: "center", marginTop: -10 }}>
                  {data.data1.value}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 style={{ color: "gray" }}> {data.data2.title} </h3>
                <h2 style={{ textAlign: "center", marginTop: -10 }}>
                  {data.data2.value}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 style={{ color: "gray" }}> {data.data3.title} </h3>
                <h2 style={{ textAlign: "center", marginTop: -10 }}>
                  {data.data3.value}
                </h2>
              </div>
            </div>
          </>
        )}
      </Card>
    </Col>
  );
};

export default MidLeft;
