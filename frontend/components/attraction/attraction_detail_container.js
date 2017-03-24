import { connect } from 'react-redux';
import AttractionDetail from './attraction_detail';
import { selectAttraction } from '../../reducers/selectors';
import { addBookmark, deleteBookmark } from '../../actions/attraction_actions';

const mapStateToProps = (state, ownParams) => {
  return ({
    attractionDetail: selectAttraction(state, ownParams.params.id),
    userId: state.session.currentUser.id
  })
};

const mapDispatchToProps = dispatch => ({
  addBookmark: bookmark => dispatch(addBookmark(bookmark)),
  deleteBookmark: bookmark => dispatch(deleteBookmark(bookmark))
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractionDetail);
