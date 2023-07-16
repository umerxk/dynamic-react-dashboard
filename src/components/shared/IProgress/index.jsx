import React from "react";
import { Progress } from "antd";

const IProgress = ({ __array = [] }) =>
  __array.map((item, index) => (
    <div key={index} className="flex items-center">
      {item.title && <p style={{ width: 120 }}>{item.title}</p>}
      <Progress
        percent={item.percent}
        showInfo={item.showInfo}
        status={item.status}
        trailColor={item.color}
      />
    </div>
  ));

export default IProgress;
