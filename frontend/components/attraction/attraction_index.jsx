import React from 'react';
import AttractionIndexItemContainer from './attraction_index_item_container';

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
        <AttractionIndexItemContainer key={ attraction.id }
          params={ {attractionId: attraction.id} }/>
      ));
    }

    return(
      <container className="attraction-sidebar">
        <ul className="attraction-list">
          { attractionList }
        </ul>
      </container>
    )
  }
}

export default AttractionIndex;
