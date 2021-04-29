import { Row, CardColumns } from "react-bootstrap";
import "../styles/css/latestReleases.css";
import React from "react";
import CommentArea from "../components/CommentArea";
import SingleBook from "../components/SingleBook";
class LatestReleases extends React.Component {
  state = {
    showComment: false,
    currentBook: {},
  };

  onReturnKeyPress = (showComment) => {
    this.setState((state) => {
      return { showComment: showComment };
    });
  };

  handleClick = (showComment, currentBook) => {
    this.setState((state) => {
      return { showComment: true, currentBook: currentBook };
    });
  };

  render() {
    return this.state.showComment ? (
      <CommentArea
        onReturnKeyPress={this.onReturnKeyPress}
        currentBook={this.state.currentBook}
      />
    ) : (
      <Row className='bookrow m-0'>
        <CardColumns>
          {this.props.books.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              onOpenCommentsClick={this.handleClick}
            />
          ))}
        </CardColumns>
      </Row>
    );
  }
}

export default LatestReleases;
