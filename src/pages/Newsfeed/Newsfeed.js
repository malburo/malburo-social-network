import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import { Container, Row, Col } from "reactstrap";
import UserContext from "../../contexts/UserContext";
import Post from "../../components/Form/Post/Post";
import API from "../../Services/api";
class NewsfeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  async componentWillUpdate() {
    try {
      const result = await API.call("get", "post");
      this.setState({
        posts: result.posts,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  render() {
    // const { state } = this.context;
    // console.log(state);
    const data = this.state.posts;
    let posts;
    if (data) {
      posts = data.map((post) => {
        return <PostCard post={post} />;
      });
    }
    return (
      <React.Fragment>
        <Header user={this.state.user} />
        <Container style={{ paddingTop: 100 }}>
          <Row>
            <Post />
          </Row>
          <Row>
            <Col>{posts}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
NewsfeedPage.contextType = UserContext;
export default NewsfeedPage;
