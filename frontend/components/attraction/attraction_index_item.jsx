import React from 'react';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router';

class AttractionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { photo_url: '' };
    this._openAttractionDetail = this._openAttractionDetail.bind(this);
    this._loadReviews = this._loadReviews.bind(this);
    this._addBookmark = this._addBookmark.bind(this);
    this._removeBookmark = this._removeBookmark.bind(this);
  }

  _openAttractionDetail(e) {
    this.props.router.push(`/home/search/attraction/${this.props.attraction.id}`);
  }

  componentDidMount() {
    if(!this.state.photo_url) {
      let service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId: this.props.attraction.place_id }, (place, status) => {
        if(place) {
          // this._loadReviews(place);
          this.setState({ photo_url: place.photos[0].getUrl({maxWidth: 400})});
        }
      });
    }
  }

  _loadReviews(place) {
    place.reviews.forEach(review => {
      let username = review.author_name;
      let rate_id = review.rating;
      let message = review.text;
      let attraction_id = this.props.attraction.id
      let finishedReview = { username, rate_id, message, attraction_id};
      this.props.createReview(finishedReview);
    });
  }

  _addBookmark(e) {
    e.preventDefault();
    this.props.addBookmark({attraction_id: this.props.attraction.id});
    e.stopPropagation();
  }

  _removeBookmark(e) {
    e.preventDefault();
    this.props.deleteBookmark(this.props.attraction.id);
    e.stopPropagation();
  }

  render() {
    let { attraction } = this.props;

    let tags;
    if(attraction.tags) {
      tags = attraction.tags.map(tag => (
        <li key={ tag.id }>{ tag.public_name }</li>
      ));
    }

    let bookmark;
    if(attraction.bookmark) {
      bookmark =
      <i className="material-icons bookmarked"
         onClick={ this._removeBookmark }>
        bookmark
      </i>;
    } else {
      bookmark =
      <i className="material-icons no-bookmarked"
         onClick={ this._addBookmark }>
        bookmark_border
      </i>;
    }

    return (
      <li className="attraction-item"
          id={ "attraction-item-" + attraction.id }
          onClick={ this._openAttractionDetail }>
        <container className="attraction-info">

          <span className="attraction-item-title">
            { bookmark }
            { attraction.name }
          </span>
          <span className="attraction-item-rating">
            <span>{ (Math.round(attraction.rating * 10) / 10).toFixed(1) }</span>
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
