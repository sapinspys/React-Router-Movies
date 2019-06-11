import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    this.state.savedList.includes(movie)
      ? alert("This movie is already saved!")
      : this.setState({ savedList: [...this.state.savedList, movie] });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path="/" exact component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
