import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import './App.css';
import ActorsGallery from './components/ActorsGallery/ActorsGallery';
import Actor from './data-models/Actor';
import MoviePage from './components/MoviePage/MoviePage';
import { Jumbotron, Nav } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';

//solution without json
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
      <HashRouter>
        <Container className="App">
          <Nav className="justify-content-center py-5" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="nav-link" href="/#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/#/actors">Actors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/#/movies">Movies</Nav.Link>
            </Nav.Item>
          </Nav>
          <Switch>
            <Route exact path="/">
              <Jumbotron className="home-page">
                <h1>Welcome to movie finder</h1>
                <p>
                  This is a super hero project, that calling
                  extra attention to featured content or information.
                </p>
              </Jumbotron>
            </Route>
            <Route exact path="/actors">
              <h1>Most Popular Actors</h1>
              <ActorsGallery actors={this.state.actorsData}/>
            </Route>
            <Route exact path="/movies">
              <MoviePage />
            </Route>
          </Switch>
        </Container>
      </HashRouter>
    );
  }

  componentDidMount(){
    axios.get('/actors.json').then((result) => {
      // console.log(result);
      const newActors = result.data.map(actor => new Actor(actor.fname, actor.lname, actor.birthday, actor.image, actor.link))
      // console.log(newActors);
      this.setState({actorsData: newActors});
    });
  }

}

export default App;