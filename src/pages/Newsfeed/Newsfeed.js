import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
class NewsfeedPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state } = this.context;
    if (!state.isAuthenticate) {
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
NewsfeedPage.contextType = UserContext;
export default NewsfeedPage;
