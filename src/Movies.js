import React from 'react';
import Movie from "./Movie";
class Movies extends React.Component{
    constructor(props){
        super();

    }

    render(){
    return(
        <div className="movies"> 
        {this.props.movies.map(item => {
            return(
                <Movie key={item.imdbID} movie={item}/>
            )
        } )}
         </div>
    );
}
    
}


export default Movies;