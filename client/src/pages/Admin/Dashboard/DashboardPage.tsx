import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
// import type { CountdownProps } from "antd";

// const { Countdown } = Statistic;

// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

// const onFinish: CountdownProps["onFinish"] = () => {
//   console.log("finished!");
// };

// const onChange: CountdownProps["onChange"] = (val) => {
//   if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
//     console.log("changed!");
//   }
// };

const DashboardPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Row style={{ width: "50%" }} gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* <Row style={{ width: "50%", marginLeft: 40 }} gutter={16}>
        <Col span={12}>
          <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
        </Col>
        <Col span={12}>
          <Countdown
            title="Million Seconds"
            value={deadline}
            format="HH:mm:ss:SSS"
          />
        </Col>
        <Col span={24} style={{ marginTop: 32 }}>
          <Countdown
            title="Day Level"
            value={deadline}
            format="D ngày H giờ m phút s giây:"
          />
        </Col>
        <Col span={12}>
          <Countdown
            title="Countdown"
            value={Date.now() + 10 * 1000}
            onChange={onChange}
          />
        </Col>
      </Row> */}
    </div>
  );
};

export default DashboardPage;
