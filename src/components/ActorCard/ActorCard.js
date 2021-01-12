import React from 'react';
import Card from 'react-bootstrap/Card';

class ActorCard extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props);
  }

  render() {
    //solution without filter
    
    // const cardItems = [];
    // console.log(this.props.actors);
    // for(let i=0; i<this.props.actor.length; i++) {
    //   const cardContent = <Card style={{ width: '18rem' }}>
    //     <a href={this.props.actor[i].link} target="_blank">
    //       <Card.Img variant="top" src={this.props.actor[i].image} />
    //     </a>
    //     <Card.Body>
    //       <Card.Title>{this.props.actors[i].fname} {this.props.actor[i].lname}</Card.Title>
    //       <Card.Text>Born: {this.props.actor[i].birthday}
    //       </Card.Text>
    //       <Card.Text>Age: {this.props.actor[i].Age()}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   cardItems.push(cardContent);
    // }
    return (
      <Card style={{ width: '18rem' }}>
        <a href={this.props.actor.link} target="_blank">
          <Card.Img variant="top" src={this.props.actor.image} />
        </a>
        <Card.Body>
          <Card.Title>{this.props.actor.fname} {this.props.actor.lname}</Card.Title>
          <Card.Text>Born: {this.props.actor.birthday}
          </Card.Text>
          <Card.Text>Age: {this.props.actor.Age()}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
export default ActorCard;