import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const postsURL = "https://jsonplaceholder.typicode.com/posts";
    let promise = axios.get(postsURL);
    // console.log(promise);
    const response = await promise;
    console.log(response.data);
    this.setState({
      posts: response.data
    });
  }

  async handleAdd() {
    // console.log("Added");
    const obj = { title: "a", body: "b" };
    const endPoint = "https://jsonplaceholder.typicode.com/posts";
    const promise = await axios.post(endPoint, obj);
    // console.log(promise.data);
    let newPosts = this.state.posts;
    newPosts.unshift(promise.data);
    this.setState({
      posts: newPosts
    });
  }

  handleUpdate = post => {
    console.log("Update", post);
  };

  handleDelete = post => {
    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={() => this.handleAdd()}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
