import React from "react";
import { Tabs } from "antd";
import IProgress from "../IProgress";

const onChange = (key) => {
  console.log(key);
};

const progressArray = [
  {
    percent: 30,
    showInfo: false,
    status: "active",
    title: "facebook",
    color: "skyblue",
  },
  {
    percent: 50,
    showInfo: false,
    status: "active",
    title: "You Tube",
    color: "lightgreen",
  },
  {
    percent: 70,
    showInfo: false,
    status: "active",
    title: "Newsletter",
    color: "lightgray",
  },
  {
    percent: 10,
    showInfo: false,
    status: "active",
    title: "Google Ads",
    color: "lightred",
  },
];

const Child = ({ action }) => {
  return (
    <>
      <p style={{ marginTop: 4 }}>
        <b>Store: BAD APPLE</b>
      </p>
      <p style={{ marginTop: -17, color: "lightgray" }}>6 Aug, 2023</p>
      <div
        style={{ marginTop: -20, display: "flex", justifyContent: "center" }}
      >
        {action}
      </div>
      <IProgress __array={progressArray} />
    </>
  );
};

const ATabs = ({ tabs }) => {
  let items = [];
  tabs.map((tab) => {
    const obj = {
      key: tab.key,
      label: (
        <div
          style={{
            color: "white",
            backgroundColor: "skyblue",
            padding: 5,
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          {tab.heading}
        </div>
      ),
      children: tab.comp ? <Child action={tab.comp} /> : null,
    };
    items.push(obj);
  });

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default ATabs;
