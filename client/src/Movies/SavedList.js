import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import removeLinkStyle from './ReusableStyles';

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} 
            key={movie.id}
            style={removeLinkStyle}>
              {movie.title}
          </NavLink>
        ))}
        <Link to='/' style={removeLinkStyle}>
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
