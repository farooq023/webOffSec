
import React from 'react';
import {
  Button,
  Label,
} from "reactstrap";
import Widget from '../../components/Widget/Widget';

const Outbound = (props) => {


  return (
    <div>
      <h1 style={{textAlign: 'center'}}> <b>Assess Web Gateway</b></h1>
      <br/>
      <h4 style={{textAlign: 'center'}}>Selected Technique: <u>Assess Outbound Traffic</u></h4>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div>
        <Widget className="widget-auth mx-auto">
          <Label for="email">Enter domain</Label>
          <input class="form-control" placeholder="For example: comsats.edu.pk"/>
          <br />
          <Button
              color="success"
            // href="/login"
            size="sm"
            style={{marginLeft:105}}  
            >
            {"Initiate Assessment"}
          </Button>
        </Widget>
      </div>

    </div>
  );
}

export default Outbound;