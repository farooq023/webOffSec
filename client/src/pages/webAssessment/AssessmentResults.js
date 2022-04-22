
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Button
// } from "reactstrap";
// import img from "../../assets/assess.jfif";


const AssessmentResults = ({ auth: { user } }) => {
  return (
    <div style={{ height:"100vh", width:"100%", backgroundColor:"#F0F2F5" }}>

      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1 style={{marginTop:"7%", color:"#1877f2"}}>Choose Assessment Type</h1>
      </div>
        
        
    </div>
  );
};

AssessmentResults.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AssessmentResults);
