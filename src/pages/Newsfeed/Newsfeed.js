import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
const NewsfeedPage = (props) => {
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
};

export default NewsfeedPage;
