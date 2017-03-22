import React from 'react';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router';

class AttractionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { photo_url: '' };
    this._openAttractionDetail = this._openAttractionDetail.bind(this);
  }

  _openAttractionDetail(e) {
    this.props.router.push(`/home/attraction/${this.props.attraction.id}`);
  }

  componentDidMount() {
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({ placeId: this.props.attraction.place_id }, (place, status) => {
      if(place) {
        this.setState({ photo_url: place.photos[0].getUrl({maxWidth: 400})});
      }
    });
  }

  render() {
    let { attraction } = this.props;

    let tags;
    if(attraction.tags) {
      tags = attraction.tags.map(tag => (
        <li key={ tag.id }>{ tag.public_name }</li>
      ));
    }

    return (
      <li className="attraction-item"
          id={ "attraction-item-" + attraction.id }
          onClick={ this._openAttractionDetail }>
        <container className="attraction-info">
          <span className="attraction-item-title">{ attraction.name }</span>
          <span className="attraction-item-rating">
            <span>{attraction.rating}</span>
            <ReactStars edit={false}
                        color2={'#F44504'}
                        value={ Math.round(attraction.rating) }/>
          </span>
          <span className="attraction-item-address">{ attraction.street_address }</span>
          <ul className="attraction-item-tags">{ tags }</ul>
        </container>
        <container className="attraction-photo">
          <img src={this.state.photo_url} />
        </container>
      </li>
    );
  }
}

export default withRouter(AttractionIndexItem);
