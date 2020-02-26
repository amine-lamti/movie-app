import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ListMovies from './ListMovies';
import AddModal from './AddModal';
import Search from './Search';
import Rating from './Rating';


class App extends Component {
  state = {
    movies: [
      {
          id: uuidv4(),
          name: "DORA",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh99NQ5Fa7-iKR3FBJwoL9-71l52Mtn1--T4OzWERnJsNpurg1",
          rating:4,
          year:"2011"
      },
      {
          id: uuidv4(),
          name: "LION",
          image:"https://fr.web.img4.acsta.net/c_215_290/pictures/20/01/07/09/01/1113711.jpg",
          rating:5,
          year:"2018"
      },
      {
          id: uuidv4(),
          name: "ALITA",
          image:"https://media.senscritique.com/media/000018296111/325/Alita_Battle_Angel.jpg",
          rating:3,
          year:"2005"
      },
      
  ],
          keyword : "",
          rate : ""
  }

addMovie = movie => {
  this.setState({
    movies: this.state.movies.concat(movie)
  });
};
getKeyword = (word) => {
  this.setState({
    keyword: word
  });
};
getRating = (rate) => {
  this.setState({
    rating: rate
  });
};

  render() {
    return (
      <div className="App">
        <Search search={y =>this.getKeyword(y)}/>
        <Rating rating={z =>this.getRating(z)}/>
       <ListMovies movies={this.state.movies.filter(el => el.rating>=this.state.rating && el.name.toLowerCase().includes(this.state.keyword.toLowerCase()))}/>
       <br/>
       <AddModal add={x =>this.addMovie(x)}/>   
      </div>
    );
  }
}

export default App;
