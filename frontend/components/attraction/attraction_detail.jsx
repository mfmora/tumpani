import React from 'react';
import Modal from 'react-modal';
import PhotoGallery from './photo_gallery';
import ModalStyle from './modal_style';
import ReviewFormContainer from '../review/review_form_container';
import { hashHistory, withRouter } from 'react-router';
import ReviewIndex from '../review/review_index';
// import AttractionDetailMap from '../attraction_map/attraction_detail_map';

class AttractionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: true, photos: '' };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this._userWroteReview = this._userWroteReview.bind(this);
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
    // hashHistory.goBack();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    let reviewForm;
    if(this._userWroteReview()) {
      reviewForm = <div className="review-exist">You already wrote a review</div>
    } else {
      reviewForm = <ReviewFormContainer attractionId={this.props.attractionDetail.id}/>
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
              { this.props.attractionDetail.name }
            </span>
            <span>{ this.props.attractionDetail.street_address}</span>
            <span>{ this.props.attractionDetail.city}</span>
          </div>
          { reviewForm }
          <ReviewIndex reviews={ this.props.attractionDetail.reviews }/>
        </div>

      </Modal>
    );
  }
}

export default withRouter(AttractionDetail);
