/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react"

const CitiesContext = createContext();

function CitiesProvider() {
    const BASE_URL = 'http://localhost:8000'

  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function() {
    async function fetchCities() {
      try {
    setIsLoading(true)
    const response = await fetch(`${BASE_URL}/cities`)
       const data = await response.json()
    setCities(data) }
    catch (error) {
      alert('There was an error loading data...')
    } finally {
      setIsLoading(false)
    }
  }
    fetchCities()
}, [])
    return (
        <div>
            
        </div>
    )
}

export default CitiesProvider
