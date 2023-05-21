// import { useState } from 'react'
// import './App.css'
import SearchComponent from "./Components/Search"
import DisplayComponent from "./Components/Display"
import { useEffect, useState, useCallback } from "react"



function App() {
  // const [count, setCount] = useState(0)
  const [country, setCountry] = useState("")
  const [universities, setUniversities] = useState([])
  
  const setter = useCallback(async () => {
    if (country) {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
      const data = await response.json()
      setUniversities(data)
      
    }
  }, [country])
  
  useEffect(() => {
    setter()
    // console.log(universities[0]);
  }, [setter])

  return (
    <>
      <h1>Universities</h1>

      <SearchComponent 
        onSubmit={event=>{
          event.preventDefault()
          setCountry(event.target.country.value)
        }}/>
      <DisplayComponent universities={universities} country={country}/>
      
    </>
  )
}

export default App
