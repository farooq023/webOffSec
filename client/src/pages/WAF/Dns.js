import React, { useState } from 'react';

import { Button, Label } from 'reactstrap';

import Widget from '../../components/Widget/Widget';

const Dns = () => {
  let [domain, setDomain] = useState('');

  const abuse = () => {
    fetch('/api/senddns/' + domain, {
      method: 'POST'
      // body: JSON.stringify(domain),

      // header: {
      //     "Content-Type": "application/json"
      // }
    }).then(function (response) {
      response.json().then((res) => {
        if (res.result === 'ok') {
          console.log('Initiated');
        }
        // else {
        //     var error = new Error(response.statusText)
        //     error.response = response
        //     throw error
        // }
      });
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <b>Assess Web Application Firewall</b>
      </h1>
      <br />
      <h4 style={{ textAlign: 'center' }}>
        Selected Technique: <u>Abuse DNS History</u>
      </h4>
      <br />
      <br />
      <br />
      <br />

      <div>
        <Widget className="widget-auth mx-auto">
          <Label for="email">Enter domain</Label>

          <input
            class="form-control"
            type="text"
            placeholder="For example: comsats.edu.pk"
            onChange={(e) => setDomain(e.target.value)}
          />

          <br />
          {/* <label>Target: {domain}</label> */}
          <br />

          <Button
            color="success"
            size="sm"
            onClick={abuse}
            style={{ marginLeft: 105 }}
          >
            {'Initiate Assessment'}
          </Button>
        </Widget>
      </div>
    </div>
  );
};

export default Dns;
