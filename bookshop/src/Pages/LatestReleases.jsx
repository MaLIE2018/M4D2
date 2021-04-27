import {Row, Col, CardColumns,Card} from "react-bootstrap"
import "../styles/css/latestReleases.css"

const LatestReleases = (books) => {
  books = books.books
   return(
      <Row className="bookrow m-0">
         <CardColumns>
            {books.map((book) => (
              <Card key={book.asin}>
                  <Card.Img variant="top float-right" src={book.img} style={{width: 150}}/>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                     {book.category}
                    </Card.Text>
                  </Card.Body>
              </Card>
            ))}
         </CardColumns>
      </Row>
   )
}

export default LatestReleases