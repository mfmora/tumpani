import { connect } from 'react-redux';
import AttractionIndexItem from './attraction_index_item';
import { selectAttraction } from '../../reducers/selectors';
import { createReview } from '../../actions/attraction_actions';

const mapStateToProps = (state, { params }) => ({
  attraction: selectAttraction(state, params.attractionId)
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(AttractionIndexItem);
