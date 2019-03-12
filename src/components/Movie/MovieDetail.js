import React, { Component } from 'react'
import {Button, Card, Grid} from 'semantic-ui-react'
import axios from 'axios'

class MovieDetail extends Component {
  // constructor() {
  //   super();
  //
  //   this.props = {
  //     movies: {},
  //     current: 0
  //   };
  //   // Example: https://api.themoviedb.org/3/search/movie?api_key=ec6a61d89d885a0573b3aabfa99890f0&query=avengers
  //   this.baseUrl = 'https://api.themoviedb.org/3/search/movie';
  //   this.apiKey ='ec6a61d89d885a0573b3aabfa99890f0';
  //
  //   this.prevClick = this.prevClick.bind(this);
  //   //this.nextClick = this.nextClick.bind(this);
  //   this.setprops({
  //     movies: this.props.movies,
  //     current: this.props.current
  //   });
  //
  // }

  // prevClick() {
  //     if(this.props.current==0){
  //       this.setprops({
  //         current: this.props.movies.length
  //       });
  //     }
  //     else if (this.props.current==this.props.movies.length) {
  //       this.setprops({
  //         current: 0
  //       });
  //     }
  //     else{
  //       this.setprops({
  //         current: this.props.current-1
  //       });
  //     }
  //
  // }

    // prevClick() {
    //     if(this.props.current==0){
    //       this.props.movies=this.props.movies.length;
    //     }
    //     // else if (this.props.current==this.props.movies.length) {
    //     //   this.props.movies=0;
    //     // }
    //     else{
    //       this.props.movies=this.props.movies-1;
    //
    //     }
    //
    // }

  render() {
    const noMovies = Object.entries(this.props.movies).length === 0
    && this.props.movies.constructor === Object;
    if (noMovies) {
      return (
        <Card >
          <h3>No Movie yet!</h3>
        </Card>
      )
    }
    else{
      if(this.props.movies.length==0){
        return (
          <Card >
            <h3>No Movie Found!</h3>
          </Card>
        )

      }
      else{
        var poster_url=`https://image.tmdb.org/t/p/w185${this.props.movies[this.props.current].poster_path}`;
        console.log(poster_url);
        return (
          <Grid column={3}>
          <Button>
            Previous
          </Button>
          <Card>
          <Card.Content>
              <h1>
                {this.props.movies[this.props.current].title}
              </h1>
              <h3>
                Movie ID #: {this.props.movies[this.props.current].id}
              </h3>


              <img src={poster_url} />

              <h4>Rating</h4>
              {this.props.movies[this.props.current].vote_average}
              <h4>Release Date</h4>
              {this.props.movies[this.props.current].release_date}
            </Card.Content>
          </Card>
          <Button >
            Next
          </Button>
          </Grid>
        );
      }
    }
}

}

export default MovieDetail;
