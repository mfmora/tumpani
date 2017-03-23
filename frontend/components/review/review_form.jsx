import React from 'react';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    if(this.props.attraction.userReview.length > 0) {
      let review = this.props.attraction.userReview[0];
      this.state =
      { review: {
        rate_id: review.rate_id,
        message: review.message,
        id: review.id,
        attraction_id: review.attraction_id },
        notEdit: true };
    } else {
      this.state =
      { review: {
        rate_id: 5,
        message: '',
        attraction_id: this.props.attraction.id },
        notEdit: true };
    }


    this._handleChange = this._handleChange.bind(this);
    this._ratingChanged = this._ratingChanged.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._editReview = this._editReview.bind(this);
    this._formInfo = this._formInfo.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.attraction.userReview.length > 0) {
      let review = newProps.attraction.userReview[0];
      this.setState(
      { review: {
        rate_id: review.stars,
        message: review.message,
        id: review.id,
        attraction_id: review.attraction_id },
        notEdit: true });
    } else {
      this.setState(
      { review: {
        rate_id: 5,
        message: '',
        attraction_id: newProps.attraction.id },
        notEdit: true });
    }
  }

  _handleChange(e) {
    e.preventDefault();
    let newReview = this.state.review;
    newReview.message = e.target.value;
    this.setState({ review: newReview});
  }

  _editReview() {
    this.setState({ notEdit: false});
  }

  _ratingChanged(newRating) {
    document.getElementById("review-message").focus();
    let newReview = this.state.review;
    newReview.rate_id = newRating;
    this.setState({ review: newReview});
  }

  _handleSubmit(e) {
    e.preventDefault();
    if(this.props.attraction.userReview.length > 0) {
      this.props.editReview(this.state.review);
    } else {
      this.props.createReview(this.state.review);
    }
    this.setState({ notEdit: true});
  }

  _formInfo() {
    let info = {};
    if(this.props.attraction.userReview.length > 0) {
      info = {
        header: "Edit Review"
      }
    } else {
      info = {
        header: "Add Review"
      }
    }
    return info;
  }

  render() {
    let reviewForm;

    if((this.props.attraction.userReview.length > 0) && this.state.notEdit) {
      reviewForm =
      <div className="review-exist">
        <span>You already wrote a review</span>
        <button onClick={ this._editReview }>Edit Review</button>
      </div>
    } else {
      let info = this._formInfo();
      reviewForm =
      <div className="add-review">
        <span className="add-review-header">{ info.header }</span>
        <form className="add-review-form">
          <ReactStars count={5}
                      onChange={this._ratingChanged}
                      size={24}
                      half={false}
                      color2={'#F44504'}
                      value={this.state.review.rate_id} />
          <textarea id="review-message"
                    value={ this.state.review.message }
                    onChange={ this._handleChange } />
          <button onClick={ this._handleSubmit }>{ info.header }</button>
        </form>
      </div>
    }

    return(
      <div>
        { reviewForm }
      </div>
    );
  }
}

export default ReviewForm;
