import React from 'react';
import Search from "./Search";
import Fav from "./Fav";
import Movies from "./Movies";

class App extends React.Component {
  constructor(){
    super();
    this.state={movies:[]};
    this.getMovies=this.getMovies.bind(this);
  }
  getMovies(movies){
    const mapped= movies.map(item => item);
    this.setState({movies: mapped});
  }

  componentWillMount()
  {
    //localStorage.setItem('favs', JSON.stringify([]));
    const list = JSON.parse(localStorage.getItem('favs'));
    if(list == null)
     localStorage.setItem('favs', JSON.stringify([]));
     

  }

  render(){
    return (
      <div>
        < Fav />
        <h1 className="header">  IMBd </h1>
        <Search getMovies={this.getMovies} />
        <Movies  movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
