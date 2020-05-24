import React from "react";
import Search from "../Search/Search";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
const Header = (props) => {
  return (
    <header className="header d-flex align-items-center justify-content-between">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="col-auto">
            <h3>Malburo</h3>
          </Col>
          <Col className="col-auto">
            <Search />
          </Col>
          <Col className="col-2">
            <div className="d-flex justify-content-between align-items-center">
              <Icon img="https://image.flaticon.com/icons/svg/1077/1077035.svg" />
              <Avatar img={props.user.avatarImage} size="small" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
