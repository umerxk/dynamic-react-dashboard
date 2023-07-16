import React from "react";
import { Card, Col } from "antd";
import { Input } from "antd";

const { Search } = Input;

const Welcome = ({ data }) => {
  const onSearch = (value) => console.log(value);

  return (
    <Col span={24} style={{ marginTop: 20 }}>
      <Card bordered={false}>
        <div className="flex justify-between items-center">
          <h3>{data.title}</h3>
          <div className="gap flex">
            {[
              data.input.heading1,
              data.input.heading2,
              data.input.heading3,
              data.input.heading4,
            ].map((el) => (
              <div className="n-m-top-30" key={el}>
                <p>{el}</p>
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Welcome;
