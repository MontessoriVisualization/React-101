import React from 'react'
import useFetch from '../hooks/useFetch'

const Weather = () => {
    const { data, loading, error } = useFetch(40.7128, -74.0060); // Example coordinates for New York City
    console.log(data?.sys?.country);
  return (
 
    
    <div>
        Weather
        </div>

  )
}

export default Weather