import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/application.scss"

import Home from './Home'
import FruitsContainer from './Fruits/FruitsContainer'
import Navbar from './Navbar'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/fruits" component={FruitsContainer} />
        </Router>
      </div>
    );
  }
}

export default App
