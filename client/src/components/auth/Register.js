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
        {/* <text style={{fontSize:'125%'}}>Web Offensive Security helps you in finding out weakpoints </text> */}
        <text style={{fontSize:'125%'}}>.........</text>
      </div>
      <div style={{marginTop:"12%", marginLeft:"6%", height:"50%", width:"25%", border:"2.5px solid #1877F2", borderRadius:"5%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1 style={{color:"#1877F2"}}>Sign Up</h1>
        <text style={{fontSize:'125%'}}>Become An Agent</text>
        
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
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
