import React from "react";
import { Tabs } from "antd";
import Appointments from "../appointments/Appointments";
import MyInformation from "../account-information/MyInformation";
import "./MyAccountPage.scss";

const { TabPane } = Tabs;

const MyAccountPage = (props) => {
  return (
    <div className="container">
      <Tabs defaultActiveKey="1">
        <TabPane tab="My appointments" key="1">
          <Appointments />
        </TabPane>
        <TabPane tab="My information" key="2">
          <MyInformation />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MyAccountPage;
