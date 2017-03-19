import React from 'react';
import AttractionIndexItemContainer from './attraction_index_item_container';
import AttractionMap from '../attraction_map/attraction_map';

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
        <AttractionIndexItemContainer
          key={ attraction.id }
          params={{ attractionId: attraction.id }}/>
      ));
    }

    return(
      <div className="attraction-search">
        <section className="map-container">
          <AttractionMap zoom={13}
            center={{lat: 37.7624195, lng: -122.4849695}}
            attractions={ attractions }/>
        </section>
        <section className="attraction-sidebar">
          <section className="attraction-index-header"></section>
          <ul className="attraction-list">
            { attractionList }
          </ul>
          <section className="attraction-index-footer"></section>
        </section>
      </div>
    )
  }
}

export default AttractionIndex;
