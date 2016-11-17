class Movie extends React.Component {
  handleClick(evet){
    event.preventDefault();
    var imdbID = this.props.data.imdbID;
    $.ajax({
      url: "http://www.omdbapi.com/?i="+imdbID,
      method: 'get',
    })
      .done(function(response){
        this.props.onSingleClick(response);
      }.bind(this))
  }
  render(){
    var movie = this.props.data;
    return (
      <div className='singleMovie'>
        <ul>
          <li><h1><a onClick={this.handleClick.bind(this)}>{movie.Title}</a></h1></li>
          <li>Aired in: {movie.Year}</li>
        </ul>
      </div>
    )
  }
}
