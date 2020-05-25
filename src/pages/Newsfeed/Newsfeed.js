import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import Post from "../../components/Form/Post/Post";
const NewsfeedPage = () => {
  const { state } = useContext(UserContext);
  // let history = useHistory();
  // if (!state.isAuthenticate) {
  //   history.push("/accounts/login");
  // }
  // axios
  //   .get("http://localhost:8080/api/post")
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  return (
    <React.Fragment>
      <Header user={state.user} />
      <Container style={{ paddingTop: 100 }}>
        <Row>
          <Post></Post>
        </Row>
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
