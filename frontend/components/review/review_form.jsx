import React from 'react';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    if(this.props.attraction.userReview.length > 0) {
      let review = this.props.attraction.userReview[0];
      this.state = { rate_id: review.rate_id,
        message: review.message,
        attraction_id: review.attraction_id };
    } else {
      this.state = { rate_id: 5,
        message: '',
        attraction_id: this.props.attraction.id };
    }


    this._handleChange = this._handleChange.bind(this);
    this._ratingChanged = this._ratingChanged.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._formInfo = this._formInfo.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }

  _ratingChanged(newRating) {
    document.getElementById("review-message").focus();
    this.setState({ rate_id: newRating});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
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
    let info = this._formInfo();
    return(
      <div className="add-review">
        <span className="add-review-header">{ info.header }</span>
        <form className="add-review-form">
          <ReactStars count={5}
                      onChange={this._ratingChanged}
                      size={24}
                      half={false}
                      color2={'#F44504'}
                      value={this.state.rate_id} />
          <textarea id="review-message"
                    value={ this.state.message }
                    onChange={ this._handleChange } />
          <button onClick={ this._handleSubmit }>{ info.header }</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
