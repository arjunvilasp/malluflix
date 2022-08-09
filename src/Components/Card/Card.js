import './Card.css';
import { Image_url } from '../../constants'



const MovieCard = ({image}) => {
  return(
    <>
    <div className='movie-card'>
    <img src={`${Image_url+image}`}  alt="img"/>
    </div>
    </>
    );
}

export default MovieCard;