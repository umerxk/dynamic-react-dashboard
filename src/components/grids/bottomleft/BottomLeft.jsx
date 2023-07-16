import React, { useState } from "react";
import { Table, Tag, Col, Card } from "antd";
import { tableData } from "../../../../public/config";
import ATabs from "../../shared/Tabs";

const BottomLeft = ({ loading, etabs }) => {
  const [activeTab, setActiveTab] = useState("1");

  const columns = [
    {
      title: "Ticket #",
      dataIndex: "ticket",
      key: "ticket",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Pickup time",
      dataIndex: "pickupTime",
      key: "pickupTime",
    },
    {
      title: "Assign to",
      dataIndex: "assignTo",
      key: "assignTo",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={"orange"} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

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
  const tabStyle = (key) => {
    const style = {
      backgroundColor: key ? "skyblue" : "unset",
      height: 50,
      display: "flex",
      alignItems: "center",
      padding: 10,
      color: key ? "white" : "gray",
      cursor: "pointer",
    };
    return style;
  };
  return (
    <Col className="m-top-20" span={22}>
      <Card bordered={false}>
        {loading ? (
          <>
            <div className="skelton-large m-top-20" />
            <div className="skelton-large m-top-20" />
            <div className="skelton-small m-top-20" />
            <div className="skelton-large m-top-20" />
          </>
        ) : (
          <>
            <div
              style={{ marginTop: -20 }}
              className="flex justify-between items-center"
            >
              <div className="flex">
                <span
                  onClick={() => setActiveTab("1")}
                  style={tabStyle(activeTab === "1")}
                >
                  TICKET
                </span>
                <span
                  onClick={() => setActiveTab("2")}
                  style={tabStyle(activeTab === "2")}
                >
                  APPOINTMENTS
                </span>
              </div>
              <ATabs tabs={tabs} />
            </div>
            <Table
              pagination={false}
              dataSource={tableData}
              columns={columns}
            />
          </>
        )}
      </Card>
    </Col>
  );
};
export default BottomLeft;
