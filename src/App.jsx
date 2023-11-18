import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Slider from './components/Slider'
import ProductionList from './components/ProductionList'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      <ProductionList/>
      <GenreMovieList />
    </>
  )
}

export default App
