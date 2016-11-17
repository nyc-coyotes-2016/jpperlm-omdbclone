class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies:[]
    }
  }
  updateMovie(movies){
    this.setState({
      movies: [movies],
      singleMovie: undefined
    })
  }

  displayMovie(movie){
    this.setState({
      movies: [],
      singleMovie: movie
    })
  }
  render(){

    return (
      <div className='body'>
        <h2 className="header123">Movie Database</h2>

        <SearchForm onSearch={this.updateMovie.bind(this)}/>
        <section className="singleMovieContainer">
          <SingleMovie data={this.state.singleMovie}/>
        </section>
        <section className="container">
          <MovieContainer onSingleClick={this.displayMovie.bind(this)} data={this.state.movies}/>
        </section>
      </div>

    )
  }
}
