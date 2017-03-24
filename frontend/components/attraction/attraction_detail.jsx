import React from 'react';
import Modal from 'react-modal';
import PhotoGallery from './photo_gallery';
import ModalStyle from './modal_style';
import ReviewFormContainer from '../review/review_form_container';
import { hashHistory, withRouter } from 'react-router';
import ReviewIndex from '../review/review_index';
import ReactStars from 'react-stars';
// import AttractionDetailMap from '../attraction_map/attraction_detail_map';

class AttractionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: true, photos: ''};
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this._userWroteReview = this._userWroteReview.bind(this);
    this._addBookmark = this._addBookmark.bind(this);
    this._removeBookmark = this._removeBookmark.bind(this);
  }

  componentDidMount() {
    let service = new google.maps.places.PlacesService(document.createElement('section'));
    service.getDetails({ placeId: this.props.attractionDetail.place_id }, (place, status) => {
      let photos = [];
      place.photos.forEach( photo => {
        photos.push(photo.getUrl({maxHeight: '400'}));
      });
      this.setState({photos: photos});
    });
  }

  _userWroteReview() {
    let reviews = this.props.attractionDetail.reviews;
    return reviews.some( review => {
      return review.user_id == this.props.userId;
    });
  }

  componentWillReceiveProps(newProps) {
    let service = new google.maps.places.PlacesService(document.createElement('section'));
    service.getDetails({ placeId: newProps.attractionDetail.place_id }, (place, status) => {
      let photos = [];
      place.photos.forEach( photo => {
        photos.push(photo.getUrl({maxHeight: '400'}));
      });
      this.setState({photos: photos});
    });
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false, photos: [] });
    hashHistory.goBack();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  _addBookmark(e) {
    e.preventDefault();
    this.props.addBookmark({attraction_id: this.props.attractionDetail.id});
    e.stopPropagation();
  }

  _removeBookmark(e) {
    e.preventDefault();
    this.props.deleteBookmark(this.props.attractionDetail.id);
    e.stopPropagation();
  }

  render() {
    let attraction = this.props.attractionDetail;
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

    return(
      <Modal
        isOpen={ this.state.modalOpen }
        onRequestClose={ this.closeModal }
        style={ ModalStyle }
        contentLabel="Modal">
        <PhotoGallery photos={ this.state.photos } />
        <div className="attraction-detail-resume">
          <div className="attraction-detail-info">
            <span id="attraction-detail-header">
              { bookmark }
              <span>{ attraction.name }</span>
            </span>
            <span>{ attraction.street_address}</span>
            <span>{ attraction.city}</span>
            <span className="attraction-detail-rating">
              <span className="attraction-detail-rating-number">
                { (Math.round(attraction.rating * 10) / 10).toFixed(1) }
              </span>
              <ReactStars
                edit={false}
                color2={'#F44504'}
                value={ Math.round(attraction.rating) }/>
            </span>
          </div>
          <ReviewFormContainer attraction={attraction}/>
          <ReviewIndex reviews={ attraction.reviews }/>
        </div>

      </Modal>
    );
  }
}

export default withRouter(AttractionDetail);
