import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class MovieCard extends Component {
    render() {
        return (
            <div className="movieCard">         
        <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={this.props.movie.rating}
        
          />
          <br/>
        <img src={this.props.movie.image} className="img" alt=""/>
        <div className="mov">
        <h3>{this.props.movie.name}</h3> 
        <h3>{this.props.movie.year}</h3>
        </div>
                
            </div>
        );
    }
}

export default MovieCard;