import React, { Component } from 'react'
import {Button, Container, Card} from 'semantic-ui-react'
import axios from 'axios'

class MovieList extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     id: '',
  //     movie: {}
  //   };
  //   // Example: https://api.themoviedb.org/3/search/movie?api_key=ec6a61d89d885a0573b3aabfa99890f0&query=avengers
  //   this.baseUrl = 'https://api.themoviedb.org/3/search/movie';
  //   this.apiKey ='ec6a61d89d885a0573b3aabfa99890f0';
  //   this.detailClickHandler = this.detailClickHandler.bind(this);
  // }
  //
  // detailClickHandler() {
  //
  //   let url = `${this.baseUrl}?api_key=${this.apiKey}&query=${this.state.query}`;
  //   console.log(url);
  //   // Get Data
  //   axios.get(url).then((response) => {
  //     console.log(response);
  //
  //     this.setState({
  //       movie: response.data.results,
  //       current: 0
  //     });
  //
  //     console.log(this.state.movies);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }
  //<Button onClick={((event) => this.detailHandleClick(event, this.props.movies[i].id)}>

  detailHandleClick(event, id){
    console.log(id);
  }
  render() {
    if(this.props.movies.length){
      var rows = [];
      for (var i = 0; i < this.props.movies.length; i++) {
        rows.push(
          <Container>
            {i+1}.
    	 		  <Button >
             {this.props.movies[i].title}
            </Button>
    	    </Container>
        );
      }
      return (
        <div>
        <h1>List</h1>
        {rows}
        </div>
      );
    }
    else{
      return (
        <Card >
          <h3>No Movie Found Yet!</h3>
        </Card>
      )
    }
  }
}

export default MovieList;
