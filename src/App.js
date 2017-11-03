import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentDashboard from './components/Student/StudentContainer'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="Main">
          <StudentDashboard/>
        </div>

      </div>

    );
  }
}

export default App;
