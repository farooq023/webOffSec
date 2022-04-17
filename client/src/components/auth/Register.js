import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import wall from '../../assets/mywall.jpg';


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div style={{ height:"100%", width:"100%", position:"absolute", flexDirection:"row", display:"flex", backgroundColor:"#F0F2F5"}}>
      <div style={{marginTop:"12%", marginLeft:"13%", height:"25%", width:"35%"}}>
        <h1 style={{color:"#1877F2"}}>Web Offensive Security</h1>
        <text style={{fontSize:'125%'}}>Web Offensive Security is useful for penetration testers and bug bounty hunters as it helps in finding out weakpoints in any Web System and its Security Controls.</text>
      </div>
      <div style={{marginTop:"12%", marginLeft:"6%", height:"60%", width:"25%", border:"2.5px solid #1877F2", borderRadius:"5%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1 style={{color:"#1877F2", marginTop:"8%"}}>Sign Up</h1>
        <text style={{fontSize:'125%'}}>Become An Agent Now!</text>
        <form style={{display:"flex", flexDirection:"column", alignItems:"center"}} onSubmit={onSubmit}>
          <input
            style={{border:"2px solid #1877F2", height:"40%", width:"180%", marginTop:"10%"}}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #1877F2", height:"20%", width:"180%", marginTop:"10%"}}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #1877F2", height:"20%", width:"180%", marginTop:"10%"}}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #1877F2", height:"20%", width:"180%", marginTop:"10%", marginBottom:"25%"}}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
