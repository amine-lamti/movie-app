import React, { Component } from "react";
import MovieCard from "./MovieCard";
import HOC from './HOC'

class ListMovies extends Component {
    render() {
        return (
            <div className="listMovie">
               {this.props.movies.map(el => (<MovieCard movie={el} key={el.id}/>))} 
            </div>
        );
    }
}

export default HOC(ListMovies);