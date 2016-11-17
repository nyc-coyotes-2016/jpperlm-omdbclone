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
      <div>
        <header id="top-nav">
          <div id="brand">Search Movie</div>
          <SearchForm onSearch={this.updateMovie.bind(this)}/>
          <i className="fa fa-search"></i>
        </header>
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
