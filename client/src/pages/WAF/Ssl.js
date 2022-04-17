
import React, {useState} from 'react';
import {
  Button,
  Label,
} from "reactstrap";
import Widget from '../../components/Widget/Widget';

const Ssl = () => {

  const [domain, setDomain] = useState("");

  const ssl = () => {
    
    fetch("/api/sendssl/"+domain, {
        method: "POST",
    })
    .then(function (response) {
      response.json().then((res)=>{
        if (res.result === 'ok') {
         console.log('Initiated')
      }
      // else {
      //     var error = new Error(response.statusText)
      //     error.response = response
      //     throw error
      // }
      })
        
    }
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}><b>Assess Web Application Firewall</b></h1>
      <br/>
      <h4 style={{textAlign: 'center'}}>Selected Technique: <u>Abuse SSL Cipher</u></h4>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div>
        <Widget className="widget-auth mx-auto">
          <Label for="email">Enter domain</Label>
          <input
          class="form-control"
          placeholder="For example: comsats.edu.pk"
          onChange={ (e) => setDomain(e.target.value) }
          />
          <br />
          {/* <label>Target: {domain}</label> */}
      <br/>
          <Button
              color="success"
            // href="/login"
            size="sm"
            onClick={ssl}
            style={{marginLeft:105}}  
            >
            {"Initiate Assessment"}
          </Button>
        </Widget>
      </div>

    </div>
  );
}

export default Ssl;