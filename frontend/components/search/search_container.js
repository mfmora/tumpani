import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  props: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(Search);
