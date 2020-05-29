import React, { useContext } from "react";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import UserContext from "../../contexts/UserContext";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
const Header = () => {
  const { state, onLogout } = useContext(UserContext);
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
              <span onClick={onLogout} className="logout">
                Logout
              </span>
              {state.user && (
                <Avatar img={state.user.avatarImage} size="small" />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
