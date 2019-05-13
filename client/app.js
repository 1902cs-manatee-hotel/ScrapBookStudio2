import React from 'react'

import {Navbar, LaunchPage} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <LaunchPage />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
