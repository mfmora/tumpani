import React from 'react';
import { withRouter } from 'react-router';

class TagIndex extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this._searchTag = this._searchTag.bind(this);
    this._redirect = this._redirect.bind(this);
  }

  componentDidMount() {
    const list = document.getElementById("tag-list");
    if(list.offsetWidth > 900) {
      list.classList.add('extra-wide');
    } else {
      list.classList.remove('extra-wide');
    }
  }

  _searchTag(e) {
    e.preventDefault();
    this.props.searchTag(e.target.id).then(() => this._redirect());
  }

  _redirect() {
    this.props.router.push('/home/search');
  }

  render() {
    const tags = ["landmark", "museum", "art gallery", "park", "movie theater", "zoo"];
    const tagContainer = tags.map((tag, idx) => (
      <div key={idx}
           id={tag}
           onClick={ this._searchTag }>
        {tag}
      </div>
    ));

    return(
      <section id="tag-list">
        { tagContainer }
      </section>
    )
  }
}

export default withRouter(TagIndex);
