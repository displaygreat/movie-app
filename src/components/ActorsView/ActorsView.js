import React from 'react';
import Card from 'react-bootstrap/Card';

class ActorsView extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const cardItems = [];
    console.log(this.props.actors);
    for(let i=0; i<this.props.actors.length; i++) {
      const cardContent = <Card style={{ width: '18rem' }}>
        <a href={this.props.actors[i].link} target="_blank">
          <Card.Img variant="top" src={this.props.actors[i].image} />
        </a>
        <Card.Body>
          <Card.Title>{this.props.actors[i].fname} {this.props.actors[i].lname}</Card.Title>
          <Card.Text>Born: {this.props.actors[i].birthday}
          </Card.Text>
          <Card.Text>Age: {this.props.actors[i].Age()}
          </Card.Text>
        </Card.Body>
      </Card>
      cardItems.push(cardContent);
    }
    return (
      <div className="d-flex justify-content-between pb-5">{cardItems}</div>
    )
  }
}
export default ActorsView;