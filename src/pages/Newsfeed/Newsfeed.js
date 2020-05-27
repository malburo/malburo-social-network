import React from "react";
import Header from "../../components/Header/Header";
import { Container, Row, Col } from "reactstrap";
import FormNewPostContainer from "../../Containers/FormNewPostContainer";
import PostCardContainer from "../../Containers/PostCardContainer";
import PostProvider from "../../contexts/PostProvider";
class NewsfeedPage extends React.PureComponent {
  render() {
    return (
      <PostProvider>
        <Header />
        <Container style={{ paddingTop: 100 }}>
          <Row>
            <FormNewPostContainer />
          </Row>
          <Row>
            <Col>
              <PostCardContainer />
            </Col>
          </Row>
        </Container>
      </PostProvider>
    );
  }
}

export default NewsfeedPage;
