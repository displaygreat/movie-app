import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import ActorsView from './components/ActorsView/ActorsView';
import Actor from './data-models/Actor';

function App() {
  const actorsData = [];
  actorsData.push(new Actor('George', 'Clooney', 1961, 'img/clooney.jpg', 'https://www.imdb.com/name/nm0000123/'));
  actorsData.push(new Actor('Felicity', 'Jones', 1983, 'img/jones.jpg', 'https://www.imdb.com/name/nm0428065/'));
  actorsData.push(new Actor('Denzel', 'Washington', 1954, 'img/washington.jpg', 'https://www.imdb.com/name/nm0000243/'));
  return (
    <Container className="App">
        <ActorsView actors={actorsData}/>
    </Container>
  );
}

export default App;
