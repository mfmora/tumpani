import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import AttractionDetail from '../attraction/attraction_detail';

class AttractionMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this._openAttractionDetail = this._openAttractionDetail.bind(this);
    this._addInfo = this._addInfo.bind(this);
    this._placeMarker = this._placeMarker.bind(this);
    this._setOpacityMarkers = this._setOpacityMarkers.bind(this);
    this._calcRoute = this._calcRoute.bind(this);
  }

  _openAttractionDetail(attraction, e) {
    this.props.router.push(`/home/search/attraction/${attraction.id}`);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.props.attractions !== nextProps.attractions) {
  //     return true;
  //   }
  //   if(this.state.attractions !== nextState.attractions) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    const options = {
      center: this.props.center,
      zoom: this.props.zoom,
      mapTypeControl: false
    };
    this.map = new google.maps.Map(this.mapNode, options);
    if(this.props.attractions) {
      this.props.attractions.forEach((attraction) => this._placeMarker(attraction, this.map));
    }


    const generateRoute = document.getElementById("generate-route");
    if (generateRoute) {
      generateRoute.onclick = () => {
        this._calcRoute(this.map);
      };
    }
  }

  _calcRoute(map) {

    let directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    let directionsPanel = document.getElementById('directionsPanel');
    directionsDisplay.setPanel(directionsPanel);

    let waypoints = [];
    this.markers.forEach(marker => {
      waypoints.push({
        location: marker.value.getPosition(),
        stopover: true
      });
    });

    let start = waypoints.shift().location;
    let end = waypoints.pop().location;
    let request = {
      origin: start,
      destination: end,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    };
    let directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });

    directionsPanel.classList.add("show");
  }

  componentWillUpdate(newProps) {
    if(!this.map) {
      const options = {
        center: this.props.center,
        zoom: this.props.zoom,
        mapTypeControl: false
      };
      this.map = new google.maps.Map(this.mapNode, options);
    }
    if((JSON.stringify(newProps.attractions) !== JSON.stringify(this.props.attractions))) {
      this.markers.forEach(marker => {
        marker.value.setMap(null);
      });
      this.markers = [];
      newProps.attractions.forEach((attraction) => this._placeMarker(attraction, this.map));

      const generateRoute = document.getElementById("generate-route");
      if (generateRoute) {
        generateRoute.onclick = () => {
          this._calcRoute(this.map);
        };
      }
    }
  }

  _placeMarker(attraction, map) {
    let marker;
    if(attraction.bookmark) {
      let blueIcon = 'http://maps.google.com/mapfiles/ms/micons/ltblu-pushpin.png';

      marker = new google.maps.Marker({
        map: map,
        position: attraction.position,
        animation: google.maps.Animation.DROP,
        icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          fillColor: "#00A3A7",
          strokeColor: "rgba(0,163,167,.35)",
          strokeWeight: 1,
          fillOpacity: 1,
          scale: 6
        }
      });
    } else {
      marker = new google.maps.Marker({
        map: map,
        position: attraction.position,
        animation: google.maps.Animation.DROP
      });
    }


    this.markers.push({ value: marker, attraction: attraction.id });

    marker.addListener('click', () => {
      this._openAttractionDetail(attraction);
    });

    this._addInfo(attraction, marker);
  }

  _setOpacityMarkers(opacity) {
    this.markers.forEach(marker => {
      marker.value.setOpacity(opacity);
    });
  }

  _addInfo(attraction, marker) {
    const infoMessage = (
      "<section class='info-message'>" +
      `<h1>${attraction.name}</h1>` +
      `<h2>${attraction.street_address}</h2>` +
      `<h2>${attraction.city}</h2>` +
      "</section>"
    );

    const info = new google.maps.InfoWindow({
      content: infoMessage,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      info.open(this.mapNode, marker);
    });

    marker.addListener('mouseout', () => {
      info.close(this.mapNode, marker);
    });

    const attractionItem = document.getElementById(`attraction-item-${attraction.id}`);
    if (attractionItem) {
      attractionItem.onmouseover = () => {
        this.markers.forEach(otherMarker => {
          otherMarker.value.setOpacity(0.3);
        });
        marker.setOpacity(1);
        info.open(this.map, marker);
      };

      attractionItem.onmouseout = () => {
        this.markers.forEach(otherMarker => {
          otherMarker.value.setOpacity(1);
        });
        info.close(this.map, marker);
      };
    }
  }

  render() {
    return (
      <div>
        <div ref={map => this.mapNode = map } id="google-map">Map</div>
        <div id="directionsPanel" className="hide">
          <section className="direction-header">
            <span>Directions</span>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(AttractionMap);
