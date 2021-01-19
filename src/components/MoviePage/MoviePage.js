import React from 'react';
import LiveSearchBox from '../LiveSearchBox/LiveSearchBox';
import './MoviePage.css';
import MovieCard from '../MovieCard/MovieCard';
import Movie from '../../data-models/Movie';
import axios from 'axios';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // resultsTitle: [],
      // resultsId: [],
      // selectedMovies: [],
      // selectedMoviesId: []
      searchResults: [],
      movies: []
    }
  }

  addMovie = (index) => {
    let  movieTitle, moviePoster, movieId, movieRuntime, movieStar, movieDirector;
    movieTitle = this.state.searchResults[index].original_title;
    moviePoster = this.state.searchResults[index].poster_path;
    movieId = this.state.searchResults[index].id;
    const api_key = '88ed0bf1277ae4fc655a409bbd11dcbe';

    axios.get(`https:api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((response) => {
        movieRuntime = response.data.runtime;
      })

    axios.get(`https:api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=en-US`)
      .then((response) => {
        console.log(response);
        let mainStars = response.data.cast.slice(0, 3).map(i => i.name).join(', ');
        movieStar = response.data.cast.length ? mainStars : null;
        movieDirector = response.data.crew.length ? response.data.crew[0].name: null;

        this.setState({
        movies: this.state.movies.concat(new Movie(movieTitle, moviePoster, movieId, movieRuntime, movieStar, movieDirector)),
        searchResults: []
        })
      })
}

  searchMovie = (searchText) => {
    if(!searchText) {
      this.setState({
        // resultsTitle: []
        searchResults: []
      })
      return;
    }

    const api_key = '88ed0bf1277ae4fc655a409bbd11dcbe';
    
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`)
            .then((response) => {
              const movieData = response.data.results;
              this.setState({
                searchResults: movieData
              })
              // console.log(res);
              //   const title = res.data.results.map((item) => {
              //       return item.title;
              //   });
              //   const id = res.data.results.map((item) => {
              //       return item.id;
              //   });
              //   this.setState({
              //       resultsTitle: title,
              //       resultsId: id
              //   })
            });
    
    //  axios.get(`https://api.themoviedb.org/3/movie/<<movie_id>>/credits?api_key=${api_key}&language=en-US`)

    // axios.get(`https://api.themoviedb.org/3/movie/${this.props.resultsId}?api_key=${api_key}&language=en-US`)

  }

  render() {
    // const MoviesCard = this.state.selectedMovies.map((movie, id) => {
    //   return <MovieCard key={id} movie={movie} />
    // })
    const {searchResults, movies} = this.state;
    const resultTitles = searchResults.map(searchResults => searchResults.original_title);
    const moviesGallery = movies.map((movie) => {
      return <MovieCard key={searchResults.id} movie={movie} />
    })
    return(
      <div className="c-movie-page">
        <h1>Most Popular Movies</h1>
        <LiveSearchBox 
          searchTextChanged={this.searchMovie}
          resultSelected={this.addMovie}
          placeholder="Search movie"
          titles={resultTitles}
          searchResults = {searchResults}
          // resultsTitle={this.state.resultsTitle}
          // resultsId={this.state.resultsId} 
          />
        <div className="movies-desk">{moviesGallery}</div>
      </div>
    )
  }
}

export default MoviePage;