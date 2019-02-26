import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    if(this.state.savedList.includes(movie)) {
      return alert('This movie is already saved!')
    } else {
      const savedList = this.state.savedList;
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path='/' exact component={MovieList} />
        {/* <Route path='/movies/:id' component={Movie} /> */}
        <Route path='/movies/:id' render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
