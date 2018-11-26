import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Page from "./page";
import Filter from "./filter";
import {
  compareTitles,
  compareGenre,
  compareStock,
  compareRate
} from "../utils/compareFunctions";

class Movies extends Component {
  state = {
    movies: [],
    filteredMovies: [],
    noOfMovies: 0,
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      filteredMovies: getMovies(),
      noOfMovies: getMovies().length
    });
  }

  getNoOfMovies() {
    if (this.state.noOfMovies > 0) {
      return (
        <div>
          There are{" "}
          <span className="badge badge-pill badge-primary">
            {this.state.noOfMovies}
          </span>{" "}
          movies in the database
        </div>
      );
    } else {
      return <div>There are no movies in the database</div>;
    }
  }

  handleDelete(obj) {
    deleteMovie(obj.id);
    this.setState({
      movies: getMovies(),
      noOfMovies: this.state.noOfMovies - 1
      // currentPage: this.state.currentPage - 1
    });
  }

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  handleGenreClick(genre) {
    this.setState({
      currentPage: 1
    });
    let filteredMovies = [];
    if (genre) {
      for (let i = 0; i < this.state.movies.length; i++) {
        if (this.state.movies[i].genre.name === genre.name) {
          filteredMovies.push(this.state.movies[i]);
        }
      }
    } else {
      for (let i = 0; i < this.state.movies.length; i++) {
        filteredMovies.push(this.state.movies[i]);
      }
    }
    this.setState({
      filteredMovies: filteredMovies,
      noOfMovies: filteredMovies.length
    });
  }

  handleSort(type) {
    console.log(type);
    if (type === "title") {
      let fMovies = this.state.filteredMovies;
      fMovies.sort(compareTitles);
      this.setState({
        filteredMovies: fMovies
      });
    } else if (type === "genre.name") {
      let fMovies = this.state.filteredMovies;
      fMovies.sort(compareGenre);
      this.setState({
        filteredMovies: fMovies
      });
    } else if (type === "numberInStock") {
      let fMovies = this.state.filteredMovies;
      fMovies.sort(compareStock);
      this.setState({
        filteredMovies: fMovies
      });
    } else if (type === "dailyRentalRate") {
      let fMovies = this.state.filteredMovies;
      fMovies.sort(compareRate);
      this.setState({
        filteredMovies: fMovies
      });
    }
  }

  render() {
    const startIndex = (this.state.currentPage - 1) * this.state.pageSize;
    const endIndex = this.state.currentPage * this.state.pageSize - 1;

    // console.log(this.state.movies.slice(startIndex, endIndex + 1));
    let slicedMovies = this.state.filteredMovies.slice(
      startIndex,
      endIndex + 1
    );

    return (
      <React.Fragment>
        <main className="container">
          <br />
          <div className="row">
            <div className="col">
              <Filter onGenreClick={genre => this.handleGenreClick(genre)} />
            </div>
            <div className="col-8">
              <div>{this.getNoOfMovies()}</div>
              <br />
              <MoviesTable
                slicedMovies={slicedMovies}
                handleDelete={movieObj => this.handleDelete(movieObj)}
                handleSort={type => this.handleSort(type)}
              />
              <Page
                itemsCount={this.state.noOfMovies}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                onPageChange={page => this.handlePageChange(page)}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Movies;
