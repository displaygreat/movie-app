import React from 'react';
import { FormControl, ListGroup } from 'react-bootstrap';
import './LiveSearchBox.css';

class LiveSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
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
  }

  render() {
    const {searchText} = this.state;

    const resultsTitles = this.props.titles.map((item, index) => {
      return <ListGroup.Item
       onClick={() => {this.handleClick(index)}}
       key={index}>
        {item}
      </ListGroup.Item>
    })
    return(
      <div className="movies-wrap">
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