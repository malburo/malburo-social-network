import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
class NewsfeedPage extends React.Component {
  constructor(props) {
    super(props);
    let isLogin = true;
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken === null) {
      isLogin = false;
    }
    this.state = {
      isLogin,
    };
  }
  render() {
    if (this.state.isLogin === false) {
      return <Redirect to={`/accounts/login`} />;
    }
    return (
      <React.Fragment>
        <Header />
        <Container style={{ paddingTop: 100 }}>
          <Row>
            <Col>
              <PostCard />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewsfeedPage;
