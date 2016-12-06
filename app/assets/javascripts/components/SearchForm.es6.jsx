class SearchForm extends React.Component {
  handleSubmit(event){
    event.preventDefault();
    // let form = this.refs.tweetTextArea.value;
    let data = this.refs.searchKeyword.value;
    let type = "&type="+this.refs.typeKeyword.selectedOptions[0].value
"series";

    $.ajax({
      url: "http://www.omdbapi.com/?s="+data+type,
      method: 'get',
    })
      .done(function(response){
        this.props.onSearch(response);
      }.bind(this))
  }

  render(){
    return (
      <form className="navbar-form center" role="search" id="search-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input className="form-control" placeholder='Search Key Word/Title' ref='searchKeyword' id="search" type="text" name="query"/>
          <select className="form-control" ref = 'typeKeyword' name="type">
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </div>
      </form>
    )
  }
}
