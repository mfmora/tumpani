import React from 'react';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: props.photos, currentPhoto: 0 };
    this._nextPhoto = this._nextPhoto.bind(this);
    this._previousPhoto = this._previousPhoto.bind(this);
    this._currentPhoto = this._currentPhoto.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ photos: newProps.photos});
  }

  _nextPhoto(e) {
    let next = (this.state.currentPhoto + 1) % (this.state.photos.length);
    this.setState({ currentPhoto: next});
  }

  _previousPhoto(e) {
    let prev = (this.state.currentPhoto - 1) % (this.state.photos.length);
    //Fix js modulo bug
    prev = (prev + this.state.photos.length) % (this.state.photos.length);
    this.setState({ currentPhoto: prev});
  }

  _currentPhoto() {
    return this.state.photos[this.state.currentPhoto];
  }

  render() {
    return(
      <div className="photo-gallery">
        <button onClick={ this._previousPhoto }>Prev</button>
        <section className="image-container">
          <img src={this.state.photos[this.state.currentPhoto]} />
        </section>
        <button onClick={ this._nextPhoto }>Next</button>
      </div>
    );
  }
}

export default PhotoGallery;