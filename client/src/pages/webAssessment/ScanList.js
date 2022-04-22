
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ScanList = () => {
  let [scanList, setScanList] = useState([]);

  useEffect(() => {
    fetch('/api/fetchscan/', {
      method: 'GET'
    }).then(function (response) {
      response.json().then((res) => {
        if (res.length > 0) {
          setScanList(res);
        }
        else {
          setScanList('0');
        }
      });
    });
  });

  return (
    <div style={{height:"100vh", width:"100%", backgroundColor:"#F0F2F5", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1 style={{ marginTop:"7%", color:"#1877f2" }}>
        List of Completed Vulnerability Scans
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Domain</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* <tbody>
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
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ScanList;
