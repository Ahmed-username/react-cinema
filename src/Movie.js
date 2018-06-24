import React from 'react';
let counter=-1;
class Movie extends React.Component{
    constructor(){
        super();
        this.state={link:"https://www.imdb.com/title/"}
        this.clickHandler=this.clickHandler.bind(this);
        this.favHandler=this.favHandler.bind(this);
        this.state= {actors :"", awards:"",director:"",plot:"",imdbRating:"",fetched:false, counter:1 };
    }

    favHandler(event){
        let favs= JSON.parse(localStorage.getItem('favs'));
        let search = favs.find(item => item.imdbID == this.props.movie.imdbID);
       if(search == undefined) {
        favs.push({title: this.props.movie.Title,
          imdbID:  this.props.movie.imdbID})
        localStorage.setItem('favs', JSON.stringify(favs));
        console.log(JSON.parse(localStorage.getItem('favs')));
       
       }
       else{
        alert("you must really like this movie");
       }
    }

    clickHandler(event){
        this.setState({counter: this.state.counter*-1});
        if(this.state.counter ===1){

            if(!this.state.fetched){  
                console.log("test");
                const self=this;
           fetch(`http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=60ece986`)
            .then(function(response){
              return response.json();
            }).then(function(jsonData){
             self.setState( {actors :jsonData.Actors,
              awards:jsonData.Awards,
              director:jsonData.Director,
              plot:jsonData.Plot,
              imdbRating:jsonData.imdbRating, fetched:true });
            }).catch(function(error){
              alert("error")
            });
            
            }

            event.target.textContent= "-Show Less-";
            event.target.nextElementSibling.style.display="block";
            
           }
            else{
            event.target.textContent= "+Show More+";
            event.target.nextElementSibling.style.display="none";
            }

    }

    render(){
        return(
            
            <div className="movie"> 
            <button className="button" onClick={this.favHandler}> Add to favourite </button>
           <a href={`https://www.imdb.com/title/${this.props.movie.imdbID}/`} > <h2> {this.props.movie.Title} </h2> </a>
           <h3> {this.props.movie.Year} </h3>
            <img className="img" src={this.props.movie.Poster} />
            <button onClick={this.clickHandler}>+Show More+ </button>
            <div className="info" > 
            <p> <strong> Actors:</strong> {this.state.actors}  <br/> </p>
            <p> <strong> Awards:</strong> {this.state.awards}  <br/> </p>
            <p> <strong> Director:</strong> {this.state.director}  <br/> </p>
            <p> <strong> Plot:</strong> {this.state.plot}  <br/> </p>
            <p> <strong> imdb Rating:</strong> {this.state.imdbRating}  <br/> </p>
           
            </div>

            </div>
        )
    }
    
}


export default Movie;