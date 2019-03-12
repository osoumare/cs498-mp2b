import React, { Component } from 'react'
import {Button, Container, Grid, Image, Card} from 'semantic-ui-react'
import axios from 'axios'

class MovieGallery extends Component {
  render() {

    if(this.props.movies.length==0){
      return (
        <Card >
          <h3>No Movie Found Yet!</h3>
        </Card>
      )
    }
    else{
      var rows = [];
      var complete=[];
      for (var i = 0; i < this.props.movies.length; i++) {
        var poster_url=`https://image.tmdb.org/t/p/w185${this.props.movies[i].poster_path}`;
        // if(i%4==0 && i!=0){
        //   complete.push(
        //     <Grid.Row>
        //       {rows}
        //     </Grid.Row>
        //   );
        //   rows=[];
        // }
        rows.push(
          <Grid.Column>
    	 		  <Button>
              <img src={poster_url}/>
            </Button>
    	    </Grid.Column>
        );
      }
      return (
        <div>
        <h1>Gallery</h1>
        <Grid columns={4}>
          {rows}
        </Grid>
        </div>
      );
    }
  }
}

export default MovieGallery;
