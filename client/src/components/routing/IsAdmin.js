import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const IsAdmin = ({
  component: Component,
  auth: { isAuthenticated, loading, user }
}) => {
  if (loading) return <Spinner />;
  if (isAuthenticated === true) {
    if (user?.role === 'admin') {
      return <Component />;
    } else if (user?.role === 'agent') {
      return <Navigate to="/dashboard" />;
    }
  }
  // isAuthenticated === true ? (
  //   user.role === 'admin' ? (
  //     <Component />
  //   ) : (
  //     <Navigate to="/dashboard" />
  //   )
  // ) : (
  //   <Navigate to="/login" />
  // );
  // return <Navigate to="/login" />;
};

IsAdmin.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(IsAdmin);