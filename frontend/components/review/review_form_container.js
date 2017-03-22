import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mapDispatchToProps = (dispatch, ownParams) => ({
  createReview: review => dispatch(ownParams.createReview(review))
});

export default connect(null, mapDispatchToProps)(ReviewForm);
