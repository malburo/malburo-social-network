import React from "react";
import Search from "./Search";
import Icon from "./Icon";
import Avatar from "./Avatar";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
const Header = (props) => {
  return (
    <header className="header d-flex align-items-center">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="col-3">
            <h3>Malburo</h3>
          </Col>
          <Col className="col-3">
            <Search />
          </Col>
          <Col className="col-3">
            <div className="d-flex justify-content-between align-items-center">
              <Icon img="https://image.flaticon.com/icons/svg/1077/1077035.svg" />
              <Icon img="https://image.flaticon.com/icons/svg/1077/1077035.svg" />
              <Icon img="https://image.flaticon.com/icons/svg/2462/2462719.svg" />
              <Icon img="https://image.flaticon.com/icons/png/512/1932/1932893.png" />
              <Avatar
                img="https://res.cloudinary.com/malburo/image/upload/v1588831342/trkuncv3xuxwjgn5a6wy.jpg"
                size="small"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
