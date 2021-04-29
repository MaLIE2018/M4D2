import { ListGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { Component } from "react";

class CommentList extends Component {
  state = {
    filterText: "",
  };

  handleFilterTextChange = (FilterText) => {
    this.setState({ filterText: FilterText });
  };

  render() {
    const filterText = this.state.filterText;
    let comments;
    {
      if (filterText !== "") {
        let filteredComments = this.props.comments.map((comment) => {
          return (
            comment.comment.toLowerCase().includes(filterText.toLowerCase()) ||
            comment.author.toLowerCase().includes(filterText.toLowerCase())
          );
        });
        comments = filteredComments;
      } else {
        comments = this.props.comments;
      }
    }

    return this.props.comments.length !== 0 ? (
      <>
        <SearchBar
          value={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ListGroup>
          {comments.map((comment) => {
            return (
              <ListGroup.Item key={comment._id}>
                Author: {comment.author} Rating: {comment.rate}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </>
    ) : (
      <h6>No Comments, add one!</h6>
    );
  }
}

export default CommentList;
