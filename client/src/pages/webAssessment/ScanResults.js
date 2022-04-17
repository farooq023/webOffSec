/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Widget from "../../components/Widget/Widget";
import generatePDF from "../../pdfReporting/webscan/PdfReport.js";

// import img from "../assess.jfif"
// import img3 from "../report.jpg"
// import { results } from '../../actions/results.js';
// import {connect} from 'react-redux';
// import props from 'prop-types';
// import {Link} from 'react-router-dom'

const ScanResults = (props) => {
  let [scanResults, setScanResults] = useState([]);

  let [email, setEmail] = useState(props.location.email);
  let [domain, setDomain] = useState(props.location.domain);
  let [date, setDate] = useState(props.location.date);
  let [time, setTime] = useState(props.location.time);
  let [duration, setDuration] = useState(props.location.dur);

  let user = [email, domain, date, time, duration];

  useEffect(() => {
    fetch("/api/fetchscan/" + domain, {
      method: "GET",
      // body: JSON.stringify(domain),
      // header: {
      //     "Content-Type": "application/json"
      // }
    }).then(function (response) {
      response.json().then((res) => {
        if (res.length > 0) {
          setScanResults(res);
        }
        // else {
        //     var error = new Error(response.statusText)
        //     error.response = response
        //     throw error
        // }
      });
    });
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <b>Found Vulnerabilities on {domain}</b>{" "}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "3%",
          marginLeft: "15%",
        }}
      >
        <Widget style={{ width: "42%" }}>
          <h2>
            <b>
              Assessment Details:{"   "}
              <button
                className="btn btn-primary"
                onClick={() => generatePDF(scanResults, user)}
              >
                Get report
              </button>
            </b>
          </h2>
          <h4 style={{ marginTop: "6%" }}>
            <u>Assessment Type</u>: Vulnerability Scan
          </h4>
          <h4>
            <u>Date</u>: {date}
          </h4>
          <h4>
            <u>Time</u>: {time}
          </h4>
          <h4>
            <u>Duration</u>: {duration}
          </h4>
        </Widget>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Widget style={{ width: "70%" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Vulnerability</th>
                <th scope="col">Severity</th>
                <th scope="col">URL</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {scanResults ? (
                scanResults.map((obj) => (
                  <tr>
                    <td>{obj.Vulnerability}</td>
                    <td>{obj.Severity}</td>
                    <td>{obj.URL}</td>
                    <td>
                      <button>Re-run</button>
                    </td>
                  </tr>
                ))
              ) : (
                <td></td>
              )}
            </tbody>
          </table>
        </Widget>
      </div>
    </div>
  );
};

export default ScanResults;
