import PageNavbar from './components/PageNavbar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import LatestReleases from './components/LatestReleases'

import {Container} from 'react-bootstrap'
import React from 'react';
import books from "./data/fantasy.json"

class App extends React.Component{
  constructor(props){
    super(props);
    this.books = books
  }
  render() {
      return (
        <Container fluid className='m-0 p-0'>
        <PageNavbar />
        <Welcome />
        <LatestReleases books={this.books}/>
        <Footer/>
        </Container>
      );
  }
}

export default App;
