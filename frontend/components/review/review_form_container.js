import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/attraction_actions';

const mapStateToProps = state => ({
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
