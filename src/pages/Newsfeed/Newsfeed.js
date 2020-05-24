import React, { useContext } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
import { UserContext } from "../../contexts/UserContext";
const NewsfeedPage = () => {
  const { state } = useContext(UserContext);
  let history = useHistory();
  if (!state.isAuthenticate) {
    history.push("/accounts/login");
  }
  return (
    <React.Fragment>
      <Header user={state.user} />
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
