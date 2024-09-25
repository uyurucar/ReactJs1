import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'




function App() {
  
  const [searchResults, setSearchResults] = useState([]);  //hook
  const [searchText, setSearchText] = useState('');

  useEffect( () => 
  {
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGIwZWJjZTcxYmFmNWNiYTkyZTBiZTZjMDVjMTM4YyIsIm5iZiI6MTcyNDI5MTgwMC4xMjMzMjMsInN1YiI6IjY2YzY5OTc3MWEwMjU1NDBlYWQyMDdlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I9wq6etHzg4ei2nAOvOg1EKsimD7te2BqlfSVVL40BQ'
    }
  };
  if(searchText)
  {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=true&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {setSearchResults(response.results); console.log(response); })
    .catch(err => console.error(err));
  }
    console.log(searchResults);
  }, [searchText])

  

  return (
    <>
    <Navbar searchText={searchText} setSearchText={setSearchText} />
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" Component = {AboutView} >
        <Route path='extra' element={<div>this is extra info</div>} />
        <Route path='bonus' element={<div>this is bonus info</div>} />
      </Route>
      <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      <Route path='*' element = {<div><h1>NOT FOUND</h1></div>} />
      <Route path='/movies/:id' Component={MovieView}/>
    </Routes>
    </>
  )
}

export default App
