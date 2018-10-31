import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import Sections from './components/Sections/Sections';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {
    activeSection: 1
  }


  scrollToSection = () =>{
    let rect = document.body.getBoundingClientRect();
    if(rect.width > 769){
      window.scrollTo(0,715);
    }

  }


  render() {
    return (
      <div className="App">
        <Layout
          scrollTo={this.scrollToSection}>
            <Carousel />
            <Sections />
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default App;
