import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/attraction_actions';

const mapDispatchToProps = (dispatch, ownParams) => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(null, mapDispatchToProps)(ReviewForm);
