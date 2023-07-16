import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <h1 style={{ color: "white" }}>
        {" "}
        <i>Repair desk</i>{" "}
      </h1>
      <div className="flex justify-end">
        <Menu
          style={{ display: "flex", justifyContent: "flex-end" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </div>
    </Header>
  );
};

export default Navbar;
