import './MovieContainer.css';
import MovieCard from '../Card/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MovieContainer = ({title, url}) =>{
  
  
  const[movies, setMovies] = useState([]);
  
  useEffect(()=>{
    axios.get(url).then(res=>{
     //console.log(res);
      setMovies(res.data.results);
    }).catch(err=>{
      console.log(err);
    });
  },[url])
  
  
  return(
    <>
    <div className='movie-container'>
    <h2>{title +' '}Movies</h2>
    <div className='movie-cards'>
    {
      movies.map((obj,i)=>{
        return(
        <div key={i}>
        <Link to={`/movie-details/${obj.id}`} >
         <MovieCard image={obj.poster_path }/>
         </Link>
        </div>
        )
      })
    }
    
    </div>
    </div>
  
    </>
    );
}

export default MovieContainer;