/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import img from "../../assets/assess.jfif";
import img3 from "../../assets/report.jpg";

const Dashboard = ({ auth: { user } }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <b>Dashboard</b>{" "}
      </h1>
      <br />
      <br />
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="/ongoing">
          <img src={img} width="125" height="125" />
        </a>

        <a
          href="/assessmentresults"
          style={{ marginLeft: "7%", marginRight: "7%" }}
        >
          <img src={img} width="125" height="125" />
        </a>

        <a href="/getreport">
          <img src={img3} width="125" height="125" />
        </a>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
      >
        <Button
          href="/ongoing"
          style={{ backgroundColor: "white", color: "blue" }}
        >
          Ongoing Assessments
        </Button>
        <Button
          href="/assessmentresults"
          style={{
            backgroundColor: "white",
            color: "blue",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          Assessment Results
        </Button>
        <Button
          href="/getreport"
          style={{ backgroundColor: "white", color: "blue" }}
        >
          Get Assessment Report
        </Button>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
