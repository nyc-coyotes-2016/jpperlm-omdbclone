class SingleMovie extends React.Component {
  render(){
    var movie = this.props.data;
    if (movie){
      return (
        <div className='singleMovies'>
          <h1>{movie.Title}</h1>
          <h3>{movie.Actors}</h3>
          <h4>{movie.Genre}</h4>
          <p>Released: {movie.Released}</p>
          <p className='plot'>{movie.Plot}</p>

          <img src={movie.Poster}/>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}
