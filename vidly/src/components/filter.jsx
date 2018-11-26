import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: getGenres()
    };
  }
  handleGenreClick(genre) {
    console.log(genre);
  }
  render() {
    console.log("Current genres ", this.state.genres);
    return (
      <React.Fragment>
        <ul className="list-group">
          <li
            key="allgenre"
            className="list-group-item"
            onClick={() => this.props.onGenreClick(null)}
          >
            All Genres
          </li>
          {this.state.genres.map(genre => (
            <li
              key={genre._id}
              className="list-group-item"
              onClick={() => this.props.onGenreClick(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Filter;
