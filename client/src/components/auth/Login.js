
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Button } from 'reactstrap';

const Login = ({ login, auth: { user, isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated === true) {
    if (user?.role === 'admin') {
      console.log('ad');
      return <Navigate to="/admindashboard" />;
    } else if (user?.role === 'agent') {
      console.log('oth');
      return <Navigate to="/dashboard" />;
    }
  } 

  return (
    <div style={{height:"100vh", width:"100%", flexDirection:"row", display:"flex", backgroundColor:"#F0F2F5"}}> 
      <div style={{marginTop:"10%", marginLeft:"13%", height:"25%", width:"35%", display:"flex", flexDirection:"column"}}>
        
        <h1 style={{color: "#17a2b8"}}>
          Web Offensive Security {' '}
          <i class="fas fa-lock" style={{color:"#17a2b8"}} />
        </h1>
        <text style={{fontSize:'125%'}}>Use your registered email to login to Web Offensive Security.</text>
        <div style={{display:"flex", flexDirection:"row", marginTop:"10%", justifyContent:"space-around", height:"100%", width:"100%"}}>
          <i class="fas fa-fingerprint" style={{color:"#17a2b8", fontSize:"15vh"}} />
          <i class="fas fa-key" style={{color:"#17a2b8", fontSize:"15vh"}} />
        </div>

      </div>
      <div style={{marginTop:"12%", marginLeft:"6%", height:"60%", width:"25%", border:"2.5px solid #17a2b8", borderRadius:"5%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2 style={{color:"#17a2b8", marginTop:"8%"}}>
        {/* <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"center"}}> */}
          <i className="fas fa-user" style={{}} /> Sign In
          {/* <text style={{fontSize:'125%', marginLeft:"2%"}}>Become An Agent Now!</text> */}
        {/* </div> */}
        </h2>
        <form style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", width:"100%", marginTop:"10%"}} onSubmit={onSubmit}>
          <input
            style={{border:"2px solid #17a2b8", height:"15%", width:"80%", marginTop:"2%", padding:"4%", borderRadius:"15px"}}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #17a2b8", height:"15%", width:"80%", marginTop:"2%", padding:"4%", borderRadius:"15px"}}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <Button color="primary" style={{height:"15%", width:"80%", backgroundColor:"#17a2b8",  borderRadius:"25px", borderColor:"#17a2b8", marginTop:"15%"}} >
            Sign-in
          </Button>
        </form>
        <p className="my-1">
          Not an agent? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login })(Login);
