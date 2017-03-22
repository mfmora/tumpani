import React from 'react';
import AttractionIndexItemContainer from './attraction_index_item_container';
import AttractionMap from '../attraction_map/attraction_map';

class AttractionIndex extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { attractionsPages: [], currentPage: 0};
    this._next10 = this._next10.bind(this);
    this._prev10 = this._prev10.bind(this);
  }

  componentWillMount() {
    let { attractions } = this.props;
    if(attractions.length > 0) {
      let pages = [];
      let index = 0;
      while(attractions.length > index) {
        pages.push(attractions.slice(index,index+10));
        index += 10;
      }

      this.setState({ attractionsPages: pages});
    }
  }

  componentWillReceiveProps(newProps) {

    let { attractions } = newProps;
    if(attractions.length > 0) {
      let pages = [];
      let index = 0;
      while(attractions.length > index) {
        pages.push(attractions.slice(index,index+10));
        index += 10;
      }

      this.setState({ attractionsPages: pages});
    }
  }

  _next10(e) {
    if(this.state.currentPage + 1 < this.state.attractionsPages.length) {
      this.setState({currentPage: this.state.currentPage + 1});
    }
  }

  _prev10(e) {
    if(this.state.currentPage - 1 >= 0) {
      this.setState({currentPage: this.state.currentPage - 1});
    }
  }

  render() {
    let attractionList;
    let { attractions } = this.props;
    let page;
    if(this.state.attractionsPages.length > 0) {

      page = this.state.attractionsPages[this.state.currentPage];

      attractionList = page.map(attraction => (
        <AttractionIndexItemContainer
          key={ attraction.id }
          params={{ attractionId: attraction.id }}/>
      ));
    } else {
      attractionList = (
        <div className="no-attractions">
          <li className="no-attractions-message">
            There are not attractions that match your criteria, try something different
          </li>
          <i className="no-attractions-icon material-icons">warning</i>
        </div>
      );
    }

    return(
      <div className="attraction-search">
        <section className="map-container">
          <AttractionMap zoom={13}
            center={{lat: 37.7624195, lng: -122.4849695}}
            attractions={ page }/>
        </section>
        <section className="attraction-sidebar">
          <section className="attraction-index-header"></section>
          <ul className="attraction-list">
            { attractionList }
          </ul>
          <section className="attraction-index-footer">
            <i id="prev-page"
               onClick={ this._prev10 }
               className="material-icons">
               keyboard_arrow_left
            </i>
            <i id="next-page"
               onClick={ this._next10 }
               className="material-icons">
              keyboard_arrow_right
            </i>
          </section>
        </section>
        { this.props.children }
      </div>
    )
  }
}

export default AttractionIndex;
