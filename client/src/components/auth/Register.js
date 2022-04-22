
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
// import img from '../../assets/cyber.jpg';


const Register = ({ setAlert, register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    }
    else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
     <div style={{height:"100vh", width:"100%", flexDirection:"row", display:"flex", backgroundColor:"#F0F2F5"}}> 
      <div style={{marginTop:"12%", marginLeft:"13%", height:"25%", width:"35%", display:"flex", flexDirection:"column"}}>
        <h1 style={{color:"#1877F2"}}>
          Web Offensive Security {' '}
          <i class="fas fa-lock" style={{color:"#1877F2"}} />
        </h1>
        <text style={{fontSize:'125%'}}>Web Offensive Security is useful for penetration testers and bug bounty hunters as it helps in finding out weakpoints in any Web System and its Security Controls.</text>
        
        <div style={{display:"flex", flexDirection:"row", marginTop:"10%", justifyContent:"space-around", height:"100%", width:"100%"}}>
          <i class="fas fa-bug" style={{color:"#1877F2", fontSize:"15vh"}} />
          <i class="fas fa-id-card" style={{color:"#1877F2", fontSize:"15vh"}} />
          {/* <img src={img} height="135%" width="15vw" /> */}
        </div>

      </div>
      <div style={{marginTop:"12%", marginLeft:"6%", height:"60%", width:"25%", border:"2.5px solid #1877F2", borderRadius:"5%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2 style={{color:"#1877F2", marginTop:"8%"}}>
        {/* <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"center"}}> */}
          <i className="fas fa-user" /> Become An Agent Now!
          {/* <text style={{fontSize:'125%', marginLeft:"2%"}}>Become An Agent Now!</text> */}
        {/* </div> */}
        </h2>
        <form style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", width:"100%", marginTop:"10%"}} onSubmit={onSubmit}>
          <input
            style={{border:"2px solid #1877F2", height:"15%", width:"80%", padding:"4%", borderRadius:"15px"}}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #1877F2", height:"15%", width:"80%", marginTop:"2%", padding:"4%", borderRadius:"15px"}}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #1877F2", height:"15%", width:"80%", marginTop:"2%", padding:"4%", borderRadius:"15px"}}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <input
            style={{border:"2px solid #1877F2", height:"15%", width:"80%", marginTop:"2%", marginBottom:"10%", padding:"4%", borderRadius:"15px"}}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
          <input type="submit" style={{height:"15%", width:"80%", backgroundColor:"#1877f2", color:"white", borderRadius:"25px", borderColor:"#1877f2"}} value="Become an Agent" />
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
