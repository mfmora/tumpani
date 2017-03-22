import React from 'react';
import AttractionDetail from './attraction_detail';

class AttractionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { openDetail: false, photo_url: '' };
    this._openAttractionDetail = this._openAttractionDetail.bind(this);
  }

  _openAttractionDetail(e) {
    this.setState({ openDetail: true });
  }

  componentWillMount() {
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({ placeId: this.props.attraction.place_id }, (place, status) => {
      if(place) {
        this.setState({ photo_url: place.photos[0].getUrl({maxWidth: 400})});
      }
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ openDetail: false });
  }

  render() {
    let { attraction } = this.props;

    let tags;
    if(attraction.tags) {
      tags = attraction.tags.map(tag => (
        <li key={ tag.id }>{ tag.public_name }</li>
      ));
    }

    let attractionDetail;
    if(this.state.openDetail) {
      attractionDetail = <AttractionDetail
                            attractionDetail={ attraction }/>
    }
    return (
      <li className="attraction-item"
          id={ "attraction-item-" + attraction.id }
          onClick={ this._openAttractionDetail }>
        <container className="attraction-info">
          <span className="attraction-item-title">{ attraction.name }</span>
          <span className="attraction-item-rating">{ attraction.rating }</span>
          <span className="attraction-item-address">{ attraction.street_address }</span>
          <ul className="attraction-item-tags">{ tags }</ul>
        </container>
        <container className="attraction-photo">
          <img src={this.state.photo_url} />
        </container>
        { attractionDetail }
      </li>
    );
  }
}

export default AttractionIndexItem;
