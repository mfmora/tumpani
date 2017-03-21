import React from 'react';

class AttractionDetailMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    { attraction } = this.props;
    const options = {
      center: { lat: attraction.lat, lng: attraction.lng }
      zoom: this.props.zoom,
      mapTypeControl: false
    };
    this.map = new google.maps.Map(this.mapNode, options);

    let marker = new google.maps.Marker({
      map: this.map,
      position: attraction.position,
      animation: google.maps.Animation.DROP
    });

    const infoMessage = (
      "<section class='info-message'>" +
      `<h1>${attraction.street_address}</h1>` +
      "</section>"
    );

    const info = new google.maps.InfoWindow({
      content: infoMessage,
      maxWidth: 200
    });

    info.open(this.map, marker);
  }

  componentWillReceiveProps(newProps) {
    { attraction } = newProps;
    const options = {
      center: { lat: attraction.lat, lng: attraction.lng }
      zoom: newProps.zoom,
      mapTypeControl: false
    };
    this.map = new google.maps.Map(this.mapNode, options);

    let marker = new google.maps.Marker({
      map: this.map,
      position: attraction.position,
      animation: google.maps.Animation.DROP
    });

    const infoMessage = (
      "<section class='info-message'>" +
      `<h1>${attraction.street_address}</h1>` +
      "</section>"
    );

    const info = new google.maps.InfoWindow({
      content: infoMessage,
      maxWidth: 200
    });

    info.open(this.map, marker);
  }

  render() {
    <div ref={map => this.mapNode = map } id="google-detail-map">Detail Map</div>
  }
}

export default AttractionDetailMap;
