import { Card, Col, Row } from "antd";

const TopLeft = ({ loading, data }) => {
  return (
    <div className="m-top-20">
      <Row gutter={14}>
        <Col span={11}>
          <Card
            title={
              loading ? <div className="skelton-small" /> : data.cardOne.title
            }
            bordered={false}
          >
            {loading ? (
              <div className="skelton-large" />
            ) : (
              data.cardOne.subTitle
            )}
          </Card>
        </Col>
        <Col span={11}>
          <Card
            title={
              loading ? <div className="skelton-small" /> : data.cardTwo.title
            }
            bordered={false}
          >
            {loading ? (
              <div className="skelton-large" />
            ) : (
              data.cardTwo.subTitle
            )}
          </Card>
        </Col>
      </Row>
      <Row className="m-top-20" gutter={14}>
        <Col span={11}>
          <Card
            title={
              loading ? <div className="skelton-small" /> : data.cardThree.title
            }
            bordered={false}
          >
            {loading ? (
              <div className="skelton-large" />
            ) : (
              data.cardThree.subTitle
            )}
          </Card>
        </Col>
        <Col span={11}>
          <Card
            title={
              loading ? <div className="skelton-small" /> : data.cardFour.title
            }
            bordered={false}
          >
            {loading ? (
              <div className="skelton-large" />
            ) : (
              data.cardFour.subTitle
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TopLeft;
