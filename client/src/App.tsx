import React, { useEffect, useState } from 'react'

const App = () => {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      } 
    )
  },[])
  
  return (
    <div className="app">app</div>
  )
}

export default App