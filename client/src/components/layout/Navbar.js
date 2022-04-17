import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li style={{ marginLeft: 20 }}>
        <li class="dropdown">
          <b>Assess Web Security</b>
          <li class="dropdown-content">
            <li>
              <a href="scan">Run Vulnerability Scan</a>
            </li>
            <li>
              <a href="rescan">Re-run Scan</a>
            </li>
          </li>
        </li>
      </li>
      <li style={{ marginLeft: 25 }}>
        <li class="dropdown">
          <b>Assess Web Application Firewall</b>
          <li class="dropdown-content">
            <li>
              <a href="dns">Abuse DNS History</a>
            </li>
            <li>
              <a href="ssl">Abuse SSL Cipher</a>
            </li>
            <li>
              <a href="payloads">Generate Payloads</a>
            </li>
          </li>
        </li>
      </li>
      <li style={{ marginLeft: 25 }}>
        <li class="dropdown">
          <b>Assess Web Gateway </b>
          <li class="dropdown-content">
            <li>
              <a href="inbound">Assess Inbound Traffic</a>
            </li>
            <li>
              <a href="outbound">Assess Outbound Traffic</a>
            </li>
          </li>
        </li>
      </li>

      <li style={{ marginLeft: 300 }}>
        <a onClick={logout} href="/">
          <i className="fas fa-sign-out-alt" />{' '}
          <b className="hide-sm">Logout</b>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Web OffSec
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
