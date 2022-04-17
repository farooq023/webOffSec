/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Button } from 'reactstrap';
import img from '../../assets/assess.jfif';
import img2 from '../../assets/agent.jpeg';
import img3 from '../../assets/report.jpg';
import { results } from '../../actions/results.js';
import { agents } from '../../actions/agents.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ADashboard = ({ results, isResults, agents, isAgents }) => {
  const onSubmit = async () => {
    await results();
  };
  if (isResults) {
    return <Navigate to="/completed" />;
  }
  const getagents = async () => {
    await agents();
  };
  if (isAgents) {
    return <Navigate to="/agents" />;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {' '}
        <b>Admin Dashboard</b>{' '}
      </h1>
      <br />
      <br />
      <br />
      <br />

      <div style={{ textAlign: 'center' }}>
        <a href="/dashboard">
          <img src={img} width="125" height="125" />
        </a>

        <a href="/dashboard">
          <img
            style={{ marginLeft: 120 }}
            src={img2}
            width="125"
            height="125"
          />
        </a>

        <a href="/getreport">
          <img
            style={{ marginLeft: 120 }}
            src={img3}
            width="125"
            height="125"
          />
        </a>
      </div>

      <div>
        <br />
        <br />
        <Button
          onClick={onSubmit}
          style={{
            marginLeft: 470,
            backgroundColor: '#FFA500',
            color: '#000000'
          }}
        >
          Scan Results
        </Button>
        <Button
          onClick={getagents}
          style={{
            marginLeft: 130,
            backgroundColor: '#FFA500',
            color: '#000000'
          }}
        >
          Manage Agents
        </Button>
        <Button
          href="/getreport"
          style={{
            marginLeft: 100,
            backgroundColor: '#FFA500',
            color: '#000000'
          }}
        >
          Get Assessment Report
        </Button>
      </div>
    </div>
  );
};

ADashboard.propTypes = {
  results: PropTypes.func.isRequired,
  isResults: PropTypes.bool.isRequired,
  agents: PropTypes.func.isRequired,
  isAgents: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isResults: state.results.isResults,
  isAgents: state.agents.isAgents
});

export default connect(mapStateToProps, { results, agents })(ADashboard);
