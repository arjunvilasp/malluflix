export const API_KEY = process.env.REACT_APP_MOVIE_API;

export const Image_url='https://image.tmdb.org/t/p/original';

export const Trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`

export const Genre_list = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&with_original_language=ml-IN`;

export const Movie_details =`https://api.themoviedb.org/3/movie/657644?api_key=${API_KEY}&append_to_response=credits&append_to_response=videos`

export const Popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_original_language=ml`

export const Action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;

export const Romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`;

export const Comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`;
