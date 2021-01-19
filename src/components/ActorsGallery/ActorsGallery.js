import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import ActorCard from '../ActorCard/ActorCard';
import './ActorGallery.css';

class ActorsGallery extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      value: '',
      sortValue: 'none'
    }
  }

  handleOnChange = (event) => {
  this.setState({value: event.target.value})
  // console.log(event.target.value);
  }

  setSortValue = (e) => {
    let sorted = e.target.value;
    this.setState({
      sortValue: sorted
    })
  }
 
  render() {
    //solution Maya
    // const filteredActorsGallery = this.props.actors.filter(({fname, lname}) => (`${fname.toLowerCase()} ${lname.toLowerCase()}`).trim().indexOf(this.state.value.toLowerCase()) !==-1);

    const filteredActorsGallery = this.props.actors.filter((actor) => {
      return (actor.fname.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1 
      || actor.lname.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1)
    });

    const compare = (a, b) => {
      if (a<b) {
        return -1;
      }
      if  (a>b) {
        return 1;
      }
      return 0;
    }

    if (this.state.sortValue !== '' || this.state.sortValue === 'none') {
      filteredActorsGallery.sort((a,b) => (this.state.sortValue === "age") ? a.Age() - b.Age() : compare(a[this.state.sortValue], b[this.state.sortValue]))
    }
    
    if (this.state.sortValue !== '' || this.state.sortValue === 'none') {
      filteredActorsGallery.sort((a,b) => (this.state.sortValue === "fname") ? a.fname - b.fname : compare(a[this.state.sortValue], b[this.state.sortValue]))
    } 

    if (this.state.sortValue !== '' || this.state.sortValue === 'none') {
      filteredActorsGallery.sort((a,b) => (this.state.sortValue === "fname") ? a.lname - b.lname : compare(a[this.state.sortValue], b[this.state.sortValue]))
    } 

    return(
      <div>
          <div className="d-flex justify-content-between pb-5 px-5">
            <InputGroup className="w-25">
            <FormControl placeholder="first name/last name" onChange={(event) => {this.handleOnChange(event)}}/>
          </InputGroup>

          <Form className="w-25">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label></Form.Label>
              <Form.Control as="select" custom value={this.state.sortValue} onChange={(e) => this.setSortValue(e)}>
                <option value="fname">Sort by: first name</option>
                <option value="lname">Sort by: last name</option>
                <option value="age">Sort by: age</option>
              </Form.Control>
            </Form.Group>
          </Form>
          </div>
            
          <div className="actors-desk d-flex justify-content-between pb-5">
           {filteredActorsGallery.map((actor, index) => <ActorCard key={index} actor={actor}/>)}
          </div>
          
        </div>
    )
  }
}
export default ActorsGallery;