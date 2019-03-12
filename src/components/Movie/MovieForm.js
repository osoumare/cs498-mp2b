import React, { Component } from "react";
import { Button, Input, Grid, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import MovieGallery from './MovieGallery'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'


class MovieForm extends Component{

  constructor() {
    super();

    this.state = {
      query: '',
      movies: {},
      current: 0
    };
    // Example: https://api.themoviedb.org/3/search/movie?api_key=ec6a61d89d885a0573b3aabfa99890f0&query=avengers
    this.baseUrl = 'https://api.themoviedb.org/3/search/movie';
    this.apiKey ='ec6a61d89d885a0573b3aabfa99890f0';

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.asc_dsc = this.asc_dsc.bind(this);
    this.rating = this.rating.bind(this);
    this.id= this.id.bind(this);
    this.alpha= this.alpha.bind(this);
    this.release= this.release.bind(this);




  }
//   function prevClick() {
//     if(this.props.current==0){
//          this.setstate({
//            current: this.props.movies.length
//          });
//        }
//        // else if (this.props.current==this.props.movies.length) {
//        //   this.setprops({
//        //     current: 0
//        //   });
//        // }
//        else{
//          this.setstate({
//            current: this.props.current-1
//          });
//        }
// }

  clickHandler() {

    let url = `${this.baseUrl}?api_key=${this.apiKey}&query=${this.state.query}`;
    console.log(url);
    // Get Data
    axios.get(url).then((response) => {
      console.log(response);

      this.setState({
        movies: response.data.results,
        current: 0
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
  }

  inputChangeHandler(event) {
    this.setState({ query: event.target.value });
    let url = `${this.baseUrl}?api_key=${this.apiKey}&query=${this.state.query}`;
    console.log(url);
    // Get Data
    axios.get(url).then((response) => {
      console.log(response);

      this.setState({
        movies: response.data.results,
        current: 0
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
    this.setState({ query: event.target.value });
  }

  asc_dsc() {
    if(this.state.movies){
      this.setState({
        movies: this.state.movies.reverse(),
        current: 0
      });
    }
  }
  alpha() {
    if(this.state.movies){

      this.setState({
        movies: this.state.movies.sort(function(a,b) {
          if ( a.title < b.title )
              return -1;
          if ( a.title > b.title )
              return 1;
          return 0;
      } )
      });
      console.log(this.state.movies);
    }
  }
  release() {
    if(this.state.movies){

      this.setState({
        movies: this.state.movies.sort(function(a,b) {
          if ( a.release_date  < b.release_date )
              return -1;
          if ( a.release_date > b.release_date )
              return 1;
          return 0;
      } )
      });
      this.setState({
        movies: this.state.movies.reverse()
      });

      console.log(this.state.movies);
    }

  }
  rating() {
    if(this.state.movies){

      this.setState({
        movies: this.state.movies.sort((a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average))
      });
      this.setState({
        movies: this.state.movies.reverse()
      });

      console.log(this.state.movies);
    }

  }
  id() {

    if(this.state.movies){

      this.setState({
        movies: this.state.movies.sort((a, b) => Number(a.id) - Number(b.id))
      });
      this.setState({
        movies: this.state.movies.reverse()
      });

      console.log(this.state.movies);
    }

  }



  render(){
    return(
      <Router>
      <div>
        <div>
          <Input
            onChange={this.inputChangeHandler}
            label='Enter a Movie'
            placeholder='Search Movie....'
            query={this.state.query}
          />
          <Button positive onClick={this.clickHandler}>
            Search
          </Button>
        </div>

        <div>
          <Grid columns={3}>
            <span> View: </span>
            <Link to={process.env.PUBLIC_URL + '/'}>
              <Button> Gallery </Button>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/list'}>
              <Button> List </Button>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/detail'}>
              <Button> Detail</Button>
            </Link>
          </Grid>
        </div>
        <div>
        <Grid columns={3}>
            <span>Filter By: </span>
            <Button onClick={this.clickHandler}> Best Match </Button>
            <Button onClick={this.alpha}> Title </Button>
            <Button onClick={this.release}> Release Date </Button>
            <Button onClick={this.rating}> Rating </Button>
            <Button onClick={this.id}> Movie ID </Button>



        </Grid>
        </div>
          <Button onClick={this.asc_dsc}>
          Ascend/Descend
          </Button>

          <Route exact path={process.env.PUBLIC_URL + '/'} render={(props) =>
            <MovieGallery {...props} movies={this.state.movies}/>}
          />

          <Route exact path={process.env.PUBLIC_URL + '/detail'} render={(props) =>
            <MovieDetail {...props} current={this.state.current}
                                    movies={this.state.movies}/>}
          />

          <Route exact path={process.env.PUBLIC_URL + '/list'} render={(props) =>
            <MovieList {...props} movies={this.state.movies}/>}
          />
        </div>
      </Router>
    );
  }
}

export default MovieForm;
