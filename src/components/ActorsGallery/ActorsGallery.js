import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import ActorCard from '../ActorCard/ActorCard';

class ActorsGallery extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      value: ''
    }
  }

  handleOnChange = (event) => {
  this.setState({value: event.target.value})
  // console.log(event.target.value);
  }

  render() {
    // const filteredActorsGallery = this.props.actors.filter((actor) => {
    //   return actor.fname.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1
    // });

    // const filteredActorsGallery = this.props.actors.filter(({fname, lname}) => (`${fname.toLowerCase()} ${lname.toLowerCase()}`).trim().indexOf(this.state.value.toLowerCase()) !==-1);

    const filteredActorsGallery = this.props.actors.filter((actor) => {
      return (actor.fname.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1 
      || actor.lname.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1)
    });

    return(
      <div>
          <div className="d-flex justify-content-between pb-5">
            <InputGroup className="mb-5 w-25">
            <FormControl placeholder="first name/last name" onChange={(event) => {this.handleOnChange(event)}}/>
          </InputGroup>

          <Form className="mb-5 w-25">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label></Form.Label>
              <Form.Control as="select" custom>
                <option>Sort by: first name</option>
                <option>Sort by: last name</option>
                <option>Sort by: age</option>
              </Form.Control>
            </Form.Group>
          </Form>
          </div>
            
          <div className="d-flex justify-content-between pb-5">
           {filteredActorsGallery.map((actor, index) => <ActorCard key={index} actor={actor}/>)}
          </div>
          
        </div>
    )
  }
}
export default ActorsGallery;