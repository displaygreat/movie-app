import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import ActorsView from './components/ActorsView/ActorsView';
import Actor from './data-models/Actor';

// function App() {
//   const actorsData = [];
//   actorsData.push(new Actor('George', 'Clooney', 1961, 'https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000123/'));
//   actorsData.push(new Actor('Felicity', 'Jones', 1983, 'img/jones.jpg', 'https://www.imdb.com/name/nm0428065/'));
//   actorsData.push(new Actor('Denzel', 'Washington', 1954, 'img/washington.jpg', 'https://www.imdb.com/name/nm0000243/'));
//   return (
//     <Container className="App">
//         <ActorsView actors={actorsData}/>
//     </Container>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actorsData: []
    };
  }
  render () {
    return (
    <Container className="App">
      <h1>Most Popular Actors</h1>
<div className="d-flex justify-content-between">
      <InputGroup className="mb-5 w-25">
    <FormControl
      placeholder="first name/last name"
    />
    <InputGroup.Append className="d-block">
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
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
      
      
        <ActorsView actors={this.state.actorsData}/>
    </Container>
  );
  }
   componentDidMount(){
    axios.get('/actors.json').then((result) => {
      console.log(result);
      const newActors = result.data.map(actor => new Actor(actor.fname, actor.lname, actor.birthday, actor.image, actor.link))
      console.log(newActors);
      this.setState({actorsData: newActors});
    });
    
    // returns resultn
  }
}

export default App;
