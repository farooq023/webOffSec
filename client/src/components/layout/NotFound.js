import React from 'react';

const NotFound = () => {
  return (
    <div style={{height:"100vh", width:"100%", backgroundColor:"#F0F2F5"}}>
      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1 className="x-large text-primary" style={{marginTop:"7%"}}>
          <i className="fas fa-exclamation-triangle" /> Page Not Found
        </h1>
        <p className="large">Sorry, this page does not exist.</p>
      </div>

    </div>
  );
};

export default NotFound;
