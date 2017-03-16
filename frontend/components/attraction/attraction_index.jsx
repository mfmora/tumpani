import React from 'react';

class AttractionIndex extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let attractionList;
    let { attractions } = this.props;
    if(attractions) {
      attractionList = attractions.map(attraction => (
        <li>{attraction.name}</li>
      ));
    }

    return(
      <div className="attraction-sidebar">
        <ul className="attraction-list">
          { attractionList }
        </ul>
      </div>
    )
  }
}

export default AttractionIndex;
