import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import "../styles/css/Posts.css";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) this.props.posts.unshift(nextProps.newPost);
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <hr />
      </div>
    ));

    return (
      <div className="card">
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
  newPost: propTypes.object
};

const actions = {
  fetchPosts
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, actions)(Posts);
