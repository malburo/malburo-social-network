import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
import UserContext from "../../contexts/UserContext";
import Post from "../../components/Form/Post/Post";
import API from "../../Services/api";
import PostCardContainer from "../../Containers/PostCardContainer";
class NewsfeedPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container style={{ paddingTop: 100 }}>
          <Row>
            <Post />
          </Row>
          <Row>
            <Col>
              <PostCardContainer />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
NewsfeedPage.contextType = UserContext;
export default NewsfeedPage;
