import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
          <div>
            <Link to="/create-project">New Project</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
            </div>
            <div>
            <Link to="/community-projects">Community Projects</Link>
            </div>
            <div>
            <Link to="/">Your Projects</Link>
            </div>
            {
            // <div>
            // <Link to="/">Your Projects</Link>
            // </div>
            //should reroute to a component that displayPosts
            //this users specific projects!
          }

      </div>
    );
  }
}

export default withRouter((Dashboard));
