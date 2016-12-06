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
        <div className='container'>
          <h2 className="mainHeader">Movie Database Search</h2>
          <h3 className="secondaryHeader">Coded by: jpperlm</h3>
          <SearchForm onSearch={this.updateMovie.bind(this)}/>
          <section className="singleMovieContainer">
            <SingleMovie data={this.state.singleMovie}/>
          </section>
          <section className="containerSmall container">
            <MovieContainer onSingleClick={this.displayMovie.bind(this)} data={this.state.movies}/>
          </section>
        </div>
      </div>
    )
  }
}
