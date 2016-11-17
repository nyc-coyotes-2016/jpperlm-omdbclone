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
        <ul className='list-group'>
          <li className='list-group-item'>
            <div className='left'><img className='smallpicture' src={movie.Poster}/>
</div>
            <a onClick={this.handleClick.bind(this)}><h4><div className='right'>{movie.Title}</div></h4></a>
            <p className='right'>Aired in: {movie.Year}</p>
          </li>
        </ul>
      </div>
    )
  }
}
