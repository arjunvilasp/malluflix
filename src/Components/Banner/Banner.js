import './Banner.css';
import Navbar from '../Navbar/Navbar'
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Image_url, Popular} from '../../constants'
import { Link } from 'react-router-dom';


const Banner = () => {
  
  const [movieBanner, setMovieBanner] = useState([]);

  

  
  useEffect(()=>{
     axios.get(Popular).then((response)=>{
       setMovieBanner(response.data.results[
     Math.floor(Math.random()*(response.data.results.length-1))
     ])
     }).catch((err)=>{
       console.log(err);
     });
     
  },[])


let overview = movieBanner.overview;
let maxLength = 200;
let description =(overview&& overview.substring(0, maxLength));
description = description&&(description.substring(0, Math.min(description.length, description.lastIndexOf(" ")))+'.....');
  
  return (
    <>
    <div className='banner-container'
    style={{
      backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)),url(${Image_url+(movieBanner.backdrop_path ? 
        movieBanner.backdrop_path :
        movieBanner.poster_path)
      })`
    }}
    >
    <Navbar />
    <div className='banner-movie-details'>
    <h1>{movieBanner.original_title ? movieBanner.original_title : movieBanner.original_name }</h1>
    <p>{movieBanner && description }</p>
    </div>
    <div className='btn-container'>
    <button className='btn'>
    <i className="fa-solid fa-play"></i>
    </button>
    <button className='btn'>
    <Link className='Link' to={`/movie-details/${movieBanner.id}`} >
    <i className="fa-solid fa-ellipsis"></i>
   </Link>
    </button>
    </div>
    <div className='fade'>
    </div>
    </div>
    </>
    );
}

export default Banner;