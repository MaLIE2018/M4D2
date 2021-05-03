import { Row, CardColumns, Col } from "react-bootstrap";
import "../styles/css/latestReleases.css";
import React from "react";
import CommentArea from "../components/CommentArea";
import SingleBook from "../components/SingleBook";
class LatestReleases extends React.Component {
  state = {
    currentBook: {},
  };

  handleClick = (currentBook) => {
    this.setState((state) => {
      return { currentBook: currentBook };
    });
  };

  render() {
    return (
      <Row className='bookrow m-0'>
        <Col md={7}>
          <CardColumns>
            {this.props.books.map((book) => (
              <SingleBook
                key={book.asin}
                book={book}
                onDetailClick={this.handleClick}
              />
            ))}
          </CardColumns>
        </Col>
        <Col md={5}>{<CommentArea currentBook={this.state.currentBook} />}</Col>
      </Row>
    );
  }
}

export default LatestReleases;
