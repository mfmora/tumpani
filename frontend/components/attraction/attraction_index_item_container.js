import { connect } from 'react-redux';
import AttractionIndexItem from './attraction_index_item';
import { selectAttraction } from '../../reducers/selectors';
import { createReview, addBookmark, deleteBookmark } from '../../actions/attraction_actions';

const mapStateToProps = (state, { params }) => ({
  attraction: selectAttraction(state, params.attractionId)
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  addBookmark: bookmark => dispatch(addBookmark(bookmark)),
  deleteBookmark: bookmark => dispatch(deleteBookmark(bookmark))
})

export default connect(mapStateToProps, mapDispatchToProps)(AttractionIndexItem);
