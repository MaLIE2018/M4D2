import { Card } from "react-bootstrap";
import React from "react";
class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.STYLE = {
      selected: {
        backgroundColor: "#EEEEF0",
        transform: "scale(1.04)",
        transition: "all 0.2s ease",
      },
    };
  }

  state = {
    selected: false,
  };

  handleOpenCommentsClick = () => {
    this.props.onOpenCommentsClick(true, this.props.book);
  };

  render() {
    return (
      <Card
        style={this.state.selected ? this.STYLE.selected : {}}
        onClick={this.handleOpenCommentsClick}>
        <Card.Img variant='top' src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
