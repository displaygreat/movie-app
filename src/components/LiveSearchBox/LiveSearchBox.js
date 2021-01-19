import React from 'react';
// import axios from 'axios';
import { FormControl, ListGroup } from 'react-bootstrap';
import './LiveSearchBox.css';

class LiveSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      
      // isLoaded: false,
      // items: []
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
   this.props.searchTextChanged(event.target.value);
  }

  handleClick = (index) => {
    // console.log(index);
    this.props.resultSelected(index);
    this.setState({
        searchText: ''
    });
    // const api_key = '88ed0bf1277ae4fc655a409bbd11dcbe';
    // fetch(`https://api.themoviedb.org/3/movie/${this.props.resultsId}?api_key=${api_key}&language=en-US`)
            // .then((res) => {
            //   console.log(res);
            //   const dataForCard = res.data.map((item) => {
            //     return item.runtime;
            //   });
            //   this.setState({
            //     resultsDataForCard: dataForCard
            //   })
            // })

            // .then(res => res.json())
            // .then(
            //   (result) => {
            //   this.setState({
            //     isLoaded: true,
            //     items: result.items
            //   });
            // })
  }

  render() {
    // const {items} = this.state
    const {searchText} = this.state;
    // const {placeholderText} = this.props;

    const resultsTitles = this.props.titles.map((item, index) => {
      return <ListGroup.Item
       onClick={() => {this.handleClick(index)}}
       key={index}>
        {item}
      </ListGroup.Item>
    })
    return(
      <div>
        <FormControl 
         type="search"
         placeholder="search movie by title"
         onChange={this.handleInputChange}
         value={searchText} />
        <ListGroup>
          {resultsTitles}
        </ListGroup>
      </div>
    )
  }
}

export default LiveSearchBox;