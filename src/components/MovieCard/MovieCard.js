import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

class MovieCard extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.movie.moviePoster}/>
        <Card.Body>
          <Card.Title><span>Movie name:</span> {this.props.movie.movieTitle}</Card.Title>
          <Card.Text><span>Length in minutes:</span> {this.props.movie.movieRuntime}
          </Card.Text>
          <Card.Text><span>Director:</span> {this.props.movie.movieDirector}
          </Card.Text>
          <Card.Text><span>Main stars:</span> {this.props.movie.movieStar}
          </Card.Text>
        </Card.Body>
      </Card>
      // imdb_id
      //  Movie name: title
      //   Length in minutes: runtime
      //   Poster: poster_path
      //   Director
      //   Main stars
    )
  }
}
export default MovieCard;