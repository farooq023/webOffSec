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

const SslList = (props) => {
  let [sslList, setSslList] = useState([]);

  useEffect(() => {
    fetch("/api/fetchssl/", {
      method: "GET",
      // body: JSON.stringify(domain),
      // header: {
      //     "Content-Type": "application/json"
      // }
    }).then(function (response) {
      response.json().then((res) => {
        if (res.length > 0) {
          setSslList(res);
        } else {
          setSslList("0");
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
        <b>List of Abused SSL Cipher</b>{" "}
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
              {sslList !== "0" ? (
                sslList.map((obj) => (
                  <tr>
                    <td>{obj.Domain}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/sslresults",
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

export default SslList;
