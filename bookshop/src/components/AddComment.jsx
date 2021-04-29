import { Form, Row, Col, Button } from "react-bootstrap";
import { Component } from "react";

class AddComment extends Component {
  state = {
    newComment: { comment: "", rate: 1, elementId: this.props.asin },
  };

  manipulateData = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state.newComment));
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGI3MmIxZjBmYjAwMTVkOTE3MDAiLCJpYXQiOjE2MTkxODkyNDIsImV4cCI6MTYyMDM5ODg0Mn0.qo8VVZkKeFwmqiPJb5zGl4xfyS3VgS6cQh629szGmH4",
          },
          body: JSON.stringify(this.state.newComment),
        }
      );
      if (response.ok) {
        alert("Your Comment got saved!");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState((state) => {
      return {
        newComment: {
          ...this.state.newComment,
          [id]: parseInt(e.target.value)
            ? parseInt(e.target.value)
            : e.target.value,
        },
      };
    });
  };

  render() {
    return (
      <>
        <h6 className='mt-3'>Add Comments</h6>
        <Form onSubmit={this.manipulateData}>
          <Row>
            <Col>
              <Form.Group controlId='comment'>
                <Form.Label>Your comment</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='rate'>
                <Form.Label>Rating</Form.Label>
                <Form.Control as='select' onChange={this.handleChange} required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
