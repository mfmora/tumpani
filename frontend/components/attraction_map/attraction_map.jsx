// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router';
//
// class AttractionMap extends React.Component {
//   //...
//
//   componentDidMount() {
//     // set the map to show SF
//     const mapOptions = {
//       center: { lat: 37.7758, lng: -122.435 }, // this is SF
//       zoom: 13
//     };
//
//     // wrap the mapDOMNode in a Google Map
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//   }
//
//   render() {
//     return (
//       <div ref={ map => this.mapNode = map }>Map</div> // this ref gives us access to the map dom node
//     )
//   }
// }
//
// export default withRouter(AttractionMap);

import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class AttractionMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.center,
      zoom: 4
    };

    this.map = new google.maps.Map(map, options);
  }

  componentWillReceiveProps(nextProps) {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: nextProps.center,
      zoom: 4
    };

    this.map = new google.maps.Map(map, options);
  }

  render() {
    return (
      <div id="map-container">
        <div ref="map" id="google-map" />
      </div>
    );
  }
}

export default withRouter(AttractionMap);
