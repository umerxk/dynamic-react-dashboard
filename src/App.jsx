import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import {
  render_priorities,
  dataSource,
  order_priorities_left,
  order_priorities_right,
} from "../public/config";
import {
  TopRight,
  TopLeft,
  MidLeft,
  MidRight,
  BottomLeft,
  BottomRight,
} from "./components/grids";
import { Col, Row } from "antd";

const App = () => {
  const priorities = {
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p5: true,
    p6: true,
  };
  const [loading, setLoading] = useState(priorities);
  useEffect(() => {
    const updatePriorities = async () => {
      const priorityOrder = render_priorities;
      for (let i = 0; i <= priorityOrder.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading((prevPriorities) => ({
          ...prevPriorities,
          [priorityOrder[i]]: false,
        }));
      }
    };
    updatePriorities();
  }, []);

  const getOrders = (action) => {
    const orderMap = {
      TopLeft: <TopLeft data={dataSource.topLeft} loading={loading.p1} />,
      MidLeft: (
        <MidLeft
          etabs={dataSource.tabs}
          data={dataSource.midLeft}
          loading={loading.p3}
        />
      ),
      BottomLeft: <BottomLeft etabs={dataSource.tabs} loading={loading.p5} />,
      TopRight: <TopRight data={dataSource.topRight} loading={loading.p2} />,
      MidRight: (
        <MidRight
          etabs={dataSource.tabs}
          data={dataSource.midRight}
          loading={loading.p4}
        />
      ),
      BottomRight: (
        <BottomRight
          etabs={dataSource.tabs}
          data={dataSource.bottomRight}
          loading={loading.p6}
        />
      ),
    };
    return orderMap[action];
  };

  return (
    <>
      <Navbar />
      <div style={{ marginLeft: 90, marginRight: 90 }}>
        <Welcome data={dataSource.welcome} />
        <Row>
          <Col flex={3}>{order_priorities_left.map((el) => getOrders(el))}</Col>
          <Col flex={2}>{order_priorities_right.map((el) => getOrders(el))}</Col>
        </Row>
      </div>
    </>
  );
};

export default App;
