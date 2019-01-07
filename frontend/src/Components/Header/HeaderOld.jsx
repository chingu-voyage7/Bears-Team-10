import { clearProjectData } from '../../redux/projects';

class Header extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <div className="header-div">
        <div className="logo">
          <FaPaw />
          <Link to="/">
            <h1 className="header-title">Bairs</h1>
          </Link>
        </div>
        <p>
          <span>Welcome! </span>
          {user && user.isLoggedIn ? (
            <span>
              {user.user.username}
              <Button
                className=""
                href="#"
                onClick={async e => {
                  e.preventDefault();
                  await this.props.logout();
                  this.props.clearProjectData();
                  this.props.history.push('/');
                }}
              >
                <span> Logout?</span>
              </Button>
            </span>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

Header.propTypes = {
  clearProjectData: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout, clearProjectData }
  )(Header)
);
