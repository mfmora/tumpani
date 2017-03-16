import { connect } from 'react-redux';
import AttractionIndex from './attraction_index';

const mapStateToProps = state => ({
  attractions: Object.values(state.attractions)
});

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect(mapStateToProps, null)(AttractionIndex);
