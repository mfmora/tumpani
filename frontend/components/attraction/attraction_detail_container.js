import { connect } from 'react-redux';
import AttractionDetail from './attraction_detail';
import { selectAttraction } from '../../reducers/selectors';

const mapStateToProps = (state, ownParams) => ({
  attractionDetail: selectAttraction(state, ownParams.params.id)
});

export default connect(mapStateToProps, null)(AttractionDetail);
