class SingleMovie extends React.Component {
  render(){
    var movie = this.props.data;
    debugger
    if (movie){
      return (
        <div className='singleMovie'>
          <h1>{movie.Title}</h1>
          <h2>{movie.Actors}</h2>
          <h3>{movie.Genre}</h3>
          <p>Released: {movie.Released}</p>
          <p> Plot: {movie.Plot}</p>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}
