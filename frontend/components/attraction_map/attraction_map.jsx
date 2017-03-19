import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class AttractionMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = {
      center: this.props.center,
      zoom: this.props.zoom,
      mapTypeControl: false
    };
    this.map = new google.maps.Map(this.mapNode, options);
    this.props.attractions.forEach((attraction) => this._placeMarker(attraction, this.map));
  }

  componentWillReceiveProps(newProps) {
    const options = {
      center: newProps.center,
      zoom: newProps.zoom,
      mapTypeControl: false
    };
    this.map = new google.maps.Map(this.mapNode, options);
    newProps.attractions.forEach((attraction) => this._placeMarker(attraction, this.map));
  }

  _placeMarker(attraction, map) {
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    let marker = new google.maps.Marker({
      map: map,
      position: attraction.position,
      animation: google.maps.Animation.DROP
    });
  }

  render() {
    return (
      <div ref={map => this.mapNode = map } id="google-map">Map</div>
    );
  }
}

export default withRouter(AttractionMap);
