import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { fetchBookmarks } from '../../actions/attraction_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBookmarks: () => dispatch(fetchBookmarks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
