import React from 'react';
import Modal from 'react-modal';
import PhotoGallery from './photo_gallery';
import ModalStyle from './modal_style';

class AttractionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: true, photos: '' };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
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
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return(
      <Modal
        isOpen={ this.state.modalOpen }
        onRequestClose={ this.closeModal }
        style={ ModalStyle }>
        <PhotoGallery photos={ this.state.photos } />
        { this.props.attractionDetail.name }
      </Modal>
    );
  }
}

export default AttractionDetail;
