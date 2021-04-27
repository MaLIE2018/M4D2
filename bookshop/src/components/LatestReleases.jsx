import {Row, Col, CardColumns,Card} from "react-bootstrap"

const LatestReleases = (books) => {
  books = books.books
   return(
      <Row>
         <CardColumns>
            {books.map((book) => {
              console.log(book);
              <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                     {book.category.first}
                    </Card.Text>
                  </Card.Body>
              </Card>
            })}
              
         </CardColumns>
      </Row>
   )
}

export default LatestReleases