import React from 'react';
import AttractionDetail from './attraction_detail';

class AttractionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { openDetail: false }
    this._openAttractionDetail = this._openAttractionDetail.bind(this);
  }

  _openAttractionDetail(e) {
    this.setState({ openDetail: true });
  }

  render() {
    let { attraction } = this.props;

    let tags;
    if(attraction.tags) {
      tags = attraction.tags.map(tag => (
        <li key={ tag.id }>{ tag.public_name }</li>
      ));
    }
    // let photo_url;
    // let service = new google.maps.places.PlacesService(document.createElement('div'));
    // console.log(service);
    // service.getDetails({ placeId: attraction.place_id }, (place, status) => {
    //   photo_url = place.photos[0].getUrl({maxWidth: 200});
    // });

    let photo_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=" +
                    attraction.image_url +
                    "&key=AIzaSyAu11AKZEEKdeEh9xNRL5oq5JKpYucnaR4";

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
          <img src={photo_url} />
        </container>
        { attractionDetail }
      </li>
    );
  }
}

export default AttractionIndexItem;
