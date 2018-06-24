import React from 'react';
class Search extends React.Component{
constructor(props){
    super();
    this.state={text:"batman"};
    this.submitHandler=this.submitHandler.bind(this);
    this.changeHandler=this.changeHandler.bind(this);
}

submitHandler(event){
    event.preventDefault();
    const self=this;
    fetch(`http://www.omdbapi.com/?s=${this.state.text}&apikey=60ece986`)
  .then(function(response){
    return response.json();
  }).then(function(jsonData){
    self.props.getMovies(jsonData.Search);
  }).catch(function(error){
    alert("error")
  });

}
changeHandler(event){
    this.setState({text:event.target.value});

}

    render(){
        return (
            <form className="Form" onSubmit={this.submitHandler}>
            <input placeholder="enter" value={this.state.text} onChange={this.changeHandler} placeholder="batman" />
            <button type="submit">submit</button>
          </form>
        )
    }
    
}


export default Search;