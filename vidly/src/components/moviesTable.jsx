import React, { Component } from "react";
import Like from "./like";

class MoviesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => this.props.handleSort("title")}>
              Title
            </th>
            <th scope="col" onClick={() => this.props.handleSort("genre.name")}>
              Genre
            </th>
            <th
              scope="col"
              onClick={() => this.props.handleSort("numberInStock")}
            >
              Stock
            </th>
            <th
              scope="col"
              onClick={() => this.props.handleSort("dailyRentalRate")}
            >
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.slicedMovies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <Like />
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.props.handleDelete({ id: movie._id })}
                >
                  <i className="fa fa-remove" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
