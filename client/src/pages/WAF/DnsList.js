/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Widget from "../../components/Widget/Widget";
// import img from "../assess.jfif"
// import img3 from "../report.jpg"
// import { results } from '../../actions/results.js';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {Redirect} from 'react-router-dom'
import { Link } from "react-router-dom";

const DnsList = (props) => {
  let [dnsList, setDnsList] = useState([]);

  useEffect(() => {
    fetch("/api/fetchdns/", {
      method: "GET",
      // body: JSON.stringify(domain),
      // header: {
      //     "Content-Type": "application/json"
      // }
    }).then(function (response) {
      response.json().then((res) => {
        if (res.length > 0) {
          setDnsList(res);
        } else {
          setDnsList("0");
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
        <b>List of Abused DNS History</b>{" "}
      </h1>

      <br />
      <br />
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Widget style={{ width: "30%" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dnsList !== "0" ? (
                dnsList.map((obj) => (
                  <tr>
                    <td>{obj.Domain}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/dnsresults",
                          email: obj.Email,
                          domain: obj.Domain,
                          date: obj.Date,
                          time: obj.Time,
                          dur: obj.Duration,
                        }}
                      >
                        <Button size="sm" style={{ color: "blue" }}>
                          View Results
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <td>No Results Found</td>
              )}
            </tbody>
          </table>
        </Widget>
      </div>
    </div>
  );
};

export default DnsList;
