import React, { Component } from 'react';
import './App.css';
import Header from './pages/header/header'
import Footer from './components/footer/footer'
import Content00 from './pages/content00/content00'
import Content01 from './pages/content01/content01'
import Content02 from './pages/content02/content02'
import Content022 from './pages/content02/content.022'
import Content03 from './pages/content03/content03'
import NavBar from './components/navbar/navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
      < NavBar />

      < Header />
    
      < Content00 />      

      < Content01 />

      < Content02 />

      < Content022 />
      
      
      < Content03 />

      < Footer />
      </div>
    );
  }
}

export default App;
