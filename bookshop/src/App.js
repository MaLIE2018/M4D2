import PageNavbar from './components/PageNavbar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

import {Container} from 'react-bootstrap'


function App() {
  return (
     <Container fluid>
     <PageNavbar />
     <Welcome />
     <Footer/>
     </Container>
  );
}

export default App;
