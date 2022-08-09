import './MovieDetails.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Image_url, API_KEY } from '../../constants'
import Cast from './Cast';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';




const MovieDetails = ()=>{
  
  const [movieDetails, setMovieDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [castList, setCastList] =useState([]);
  const [videos, setVideos] =useState([]);
  const { id } = useParams();
  
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`).then(res=>{
      setMovieDetails(res.data);
      setGenres(res.data.genres);
      setCastList(res.data.credits.cast);
      setVideos(res.data.videos.results);
    }).catch(err=>{
      console.log(err);
    });
  },[id])
 
   
   const opts = {
      height: '350',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };


  return(
    <>
    <div className='movie-details'
    style={{
      backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.21)),url(${Image_url+(movieDetails.backdrop_path
        ? movieDetails.backdrop_path:
        movieDetails.poster_path
      )})`
    }}
    >
    <h2>{movieDetails.original_title ? movieDetails.original_title: movieDetails.original_name}</h2>
    <div className='movie-poster'>
    <img src={`${Image_url+movieDetails.poster_path}`} alt="poster"/>
    </div>
    <div className='genres'>
        {
      genres.map((val,index)=>{
        return(
        <p key={index}>{val.name}</p>
        )
      })
    }
    </div>
    <div className='fade'>
    </div>
    </div>
    <div className='overview'>
    <h2>{movieDetails.title ? movieDetails.title : movieDetails.name }</h2>
    <p>'{movieDetails ? movieDetails.overview : '' }'</p>
    <div className='basic-information'>
    <p>Release-Status:'{movieDetails.status}'</p>
    <p>Release-Date:'{movieDetails.release_date}'</p>
    <p>Rating:'{movieDetails.vote_average}'</p>
    </div>
    </div>

    <div className='cast-section'>
    <h2>Cast</h2>
    <div className='castList'>
   {
     castList.map((obj,index)=>{
       return(
           <Cast
           key={index+1}
           name={obj.name}
           character={obj.character}
           image={obj.profile_path}
           />
         )
     })
   }
     </div>
     <hr />
     <div id='videos' className='videos-section'>
     <h2>Related Videos</h2>
     {
       videos.map((val,index)=>{
         return(
         <YouTube key={index+1} videoId={val.key}  opts={opts} className='youtube-player'/>
         );
       })
     }
     </div>
     </div>
    </>
    );
}

export default MovieDetails;