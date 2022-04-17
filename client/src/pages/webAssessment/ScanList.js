/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
// import Widget from '../../components/Widget/Widget';
import { Link } from 'react-router-dom';

const ScanList = (props) => {
  let [scanList, setScanList] = useState([]);

  useEffect(() => {
    fetch('/api/fetchscan/', {
      method: 'GET'
    }).then(function (response) {
      response.json().then((res) => {
        if (res.length > 0) {
          setScanList(res);
        } else {
          setScanList('0');
        }
      });
    });
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {' '}
        <b>List of Completed Vulnerability Scans</b>{' '}
      </h1>

      <br />
      <br />
      <br />
      <br />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <Widget style={{ width: "30%" }}> */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Domain</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scanList !== '0' ? (
              scanList.map((obj) => (
                <tr>
                  <td>{obj.Domain}</td>
                  <td>
                    <Link
                      to={{
                        pathname: '/scanresults',
                        email: obj.Email,
                        domain: obj.Domain,
                        date: obj.Date,
                        time: obj.Time,
                        dur: obj.Duration
                      }}
                    >
                      <Button size="sm" style={{ color: 'blue' }}>
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
        {/* </Widget> */}
      </div>
    </div>
  );
};

export default ScanList;
