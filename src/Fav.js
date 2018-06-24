import React from 'react';
let counter=1;
class Fav extends React.Component{

    constructor(){
        super();
        this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(event){
        if(counter === 1){
            event.target.textContent="Hide Favourites"
            event.target.nextElementSibling.style.display="block";
        }
        else{
            event.target.textContent="Show Favourites"
            event.target.nextElementSibling.style.display="none";
        }

        counter=counter*-1;
    }

    render(){
        return (
        <div className="fav"> 
            <button className="button" onClick={this.clickHandler}> Show Favourites </button>
            <div className="list">
            {JSON.parse(localStorage.getItem('favs')).map(item =>{
                return( <a key={item.imdbID} href={`https://www.imdb.com/title/${item.imdbID}/`}> <br/>  {item.title}  </a> )
            })}
            </div>
             </div>
        );
    }

}


export default Fav;