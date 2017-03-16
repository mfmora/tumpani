import { connect } from 'react-redux';
import { search } from '../../actions/attraction_actions.js';
import Search from './search';

const mapStateToProps = state => ({
  props: state
});

const mapDispatchToProps = dispatch => ({
  search: text => dispatch(search(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
