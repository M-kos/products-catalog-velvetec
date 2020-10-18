import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'hooks/useRoutes'
import './App.scss'

function App() {
  const routes = useRoutes(true)

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  )
}

export default App
