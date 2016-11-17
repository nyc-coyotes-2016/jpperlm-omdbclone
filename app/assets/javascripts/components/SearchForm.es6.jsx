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
      <form id="search-form" onSubmit={this.handleSubmit.bind(this)}>
        <input ref='searchKeyword' id="search" type="text" name="query"/>
        <select ref = 'typeKeyword' name="type">
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
      </form>
    )
  }
}
