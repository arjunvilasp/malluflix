import './MovieDetails.css';
import {Image_url} from '../../constants'


const Cast = (props)=>{
  return (
    <>
    <div className='cast-details'>
    <img src={`${Image_url+props.image}`} alt='cast-img' />
    <p>{props.name}</p>
    <h6>{props.character}</h6>
    </div>
    </>
    );
}

export default Cast;
