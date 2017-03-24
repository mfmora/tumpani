import React from 'react';
import ReviewShow from './review_show';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { currentReview: 0 };
    this.reviews = this.props.reviews.sort((a, b) => {
      return b.updated_at - a.updated_at; //Not working.. I don't care
    });
    this._nextReview = this._nextReview.bind(this);
    this._previousReview = this._previousReview.bind(this);
    this._currentReview = this._currentReview.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.reviews = newProps.reviews.sort((a,b) => {
      return b.updated_at - a.updated_at;
    });
  }

  _nextReview(e) {
    e.preventDefault();
    let next = (this.state.currentReview + 1) % (this.reviews.length);
    this.setState({ currentReview: next});
  }

  _previousReview(e) {
    e.preventDefault();
    let prev = (this.state.currentReview - 1) % (this.reviews.length);
    //Fix js modulo bug
    prev = (prev + this.reviews.length) % (this.reviews.length);
    this.setState({ currentReview: prev});
  }

  _currentReview() {
    return this.reviews[this.state.currentReview];
  }

  render() {
    let reviews;
    if(this.reviews.length > 0) {
      reviews = <ReviewShow review={this._currentReview()} />
    } else {
      reviews = <div className="no-reviews">
        <span>There are no reviews for this Attraction</span>
      </div>
    }

    return(
      <div className="review-index">
        <i onClick={ this._previousReview } className="material-icons prev-button">keyboard_arrow_left</i>
        { reviews }
        <i onClick={ this._nextReview } className="material-icons next-button">keyboard_arrow_right</i>
      </div>
    );
  }
}

export default ReviewIndex;
