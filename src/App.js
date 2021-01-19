import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import './App.css';
import ActorsGallery from './components/ActorsGallery/ActorsGallery';
import Actor from './data-models/Actor';
import MoviePage from './components/MoviePage/MoviePage';

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
      <Container className="App">
        <h1>Most Popular Actors</h1>
        <ActorsGallery actors={this.state.actorsData}/>
        <MoviePage />
      </Container>
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

// https://developers.themoviedb.org/3/search/person?api_key=axios&query=

// https://api.themoviedb.org/3/search/person?api_key=88ed0bf1277ae4fc655a409bbd11dcbe&query=Felicity%20Jones