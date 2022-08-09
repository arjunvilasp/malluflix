import './App.css';
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import MovieContainer from './Components/MovieContainer/MovieContainer'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import { Routes, Route } from 'react-router-dom';
import  { Action, Romance, Comedy, Popular } from './constants'



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={
    <>
    <Banner />
    <MovieContainer url={Popular} title='Popular' />
    <MovieContainer url={Action} title='Action' />
    <MovieContainer url={Romance} title='Romance' />
    <MovieContainer url={Comedy} title='Comedy' />
    <Footer />
    </>
    } />
    <Route path='/movie-details/:id' element={
      <MovieDetails />
    }/>
    </Routes>
    </div>
  );
}

export default App;
