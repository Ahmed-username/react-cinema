import React from 'react';
import Search from "./Search";
import Fav from "./Fav";
import Movies from "./Movies";

class App extends React.Component {
  constructor(){
    super();
    this.state={movies:[],fav:[]};
    this.getMovies=this.getMovies.bind(this);
  }
  getMovies(movies){
    const mapped= movies.map(item => item);
    this.setState({movies: mapped});
  }

  componentWillMount()
  {
    const list = JSON.parse(localStorage.getItem('favs'));
    if(list == null)
     localStorage.setItem('favs', JSON.stringify([]));
  }

  render(){
    return (
      <div>
        <header className="header"> <h2> IMBd </h2> </header>
        <Search getMovies={this.getMovies} />
        <Movies  movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
