import { connect } from 'react-redux';
import { searchTag } from '../../actions/attraction_actions';
import TagIndex from './tag_index';

const mapStateToProps = state => ({
  props: state
});

const mapDispatchToProps = dispatch => ({
  searchTag: tag => dispatch(searchTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);
