import { connect } from 'react-redux';
import AttractionDetail from './attraction_detail';
import { fetchReviews, createReview } from '../../actions/review_actions';
import { selectAttraction } from '../../reducers/selectors';

const mapStateToProps = (state, ownParams) => ({
  attractionDetail: selectAttraction(state, ownParams.params.id),
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: attractionId => dispatch(fetchReviews(attractionId)),
  createReview: review => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractionDetail);
