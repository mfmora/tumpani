import { connect } from 'react-redux';
import AttractionIndexItem from './attraction_index_item';
import { selectAttraction } from '../../reducers/selectors';

const mapStateToProps = (state, { params }) => ({
  attraction: selectAttraction(state, params.attractionId)
});

export default connect(mapStateToProps, null)(AttractionIndexItem);
