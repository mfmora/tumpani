import React from 'react';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { rate_id: 5,
                   message: '',
                   attraction_id: this.props.attractionId };

    this._handleChange = this._handleChange.bind(this);
    this._ratingChanged = this._ratingChanged.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }

  _ratingChanged(newRating) {
    this.setState({ rate_id: newRating});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  render() {
    return(
      <div className="add-review">
        <span className="add-review-header">Add Review</span>
        <form className="add-review-form">
          <ReactStars count={5}
                      onChange={this._ratingChanged}
                      size={24}
                      half={false}
                      color2={'#ffd700'}
                      value={this.state.rate_id} />
          <textarea id="review-message"
                    value={ this.state.message }
                    onChange={ this._handleChange } />
          <button onClick={ this._handleSubmit }>Add Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
