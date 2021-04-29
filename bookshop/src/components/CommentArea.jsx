import React, { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "../styles/css/commentArea.css";
import { Button, Row, Col, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  handleReturnKeyPress = () => {
    this.props.onReturnKeyPress(false);
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.currentBook.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGI3MmIxZjBmYjAwMTVkOTE3MDAiLCJpYXQiOjE2MTkxODkyNDIsImV4cCI6MTYyMDM5ODg0Mn0.qo8VVZkKeFwmqiPJb5zGl4xfyS3VgS6cQh629szGmH4",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        this.setState((state) => {
          return { comments: data, isLoading: false };
        });
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  render() {
    const spinner = (
      <Spinner animation='border' role='status' className='mt-5'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
    return (
      <div className='commentArea overflow-auto mt-5'>
        <Row className='mx-2'>
          <Col sm={5} md={2} lg={2}>
            <img
              src={this.props.currentBook.img}
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col sm={7} md={10} lg={10}>
            <h4>{this.props.currentBook.title}</h4>
            {this.state.isLoading ? (
              spinner
            ) : (
              <CommentList comments={this.state.comments} />
            )}
            <Row className=''>
              <Col>
                <AddComment asin={this.props.currentBook.asin} />
                <Button
                  variant='outline-secondary'
                  onClick={this.handleReturnKeyPress}>
                  Go Back
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentArea;
