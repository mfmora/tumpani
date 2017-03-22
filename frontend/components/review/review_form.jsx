import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { rating: 5, message: '' };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return(
      <div className="add-review">
        <span className="add-review-header">Add Review</span>
        <form>
          <textarea id="review-message"
                    value={ this.state.message }
                    onChange={ this._handleChange } />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
