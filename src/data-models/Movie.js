class Movie {
  constructor(movieTitle, moviePoster, movieId, movieRuntime, movieStar, movieDirector) {
    this.movieTitle = movieTitle;
    this.moviePoster = "https://image.tmdb.org/t/p/w500" + moviePoster;
    this.movieId = movieId;
    this.movieRuntime = movieRuntime;
    this.movieStar = movieStar;
    this.movieDirector = movieDirector;
  }
}

export default Movie;
