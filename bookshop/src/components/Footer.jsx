import {Row, Col} from 'react-bootstrap'
import '../styles/css/footer.css'

const Footer = (params) => {
      return (
        <footer className="d-flex justify-content-center sticky-bottom">
        <Row className="w-75">
          <Col >
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Col>
          <Col >
          <ul>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </Col>
          <Col >
          <ul>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </Col>
        </Row>
        </footer>
      )
}

export default Footer