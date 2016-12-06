class MovieContainer extends React.Component {
  render(){
    if (this.props.data.length != 0 && this.props.data[0].Response === "True"){
      return (
        <div className="movieContainer">
          {this.props.data[0].Search.map((movie, i) => {
            return <Movie onSingleClick={this.props.onSingleClick.bind(this)} data={movie} key={i} />
          })}
        </div>
      )
    }
    else{
      return (
        <div></div>
      )
    }
  }
}
