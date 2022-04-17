
import React from 'react';

import Widget from '../components/Widget/Widget';

const Getreport = () => {

  return (
    <div>
      <h1 style={{textAlign: 'center'}}> <b>Your Completed Assessments</b></h1>
      <br/>
      <h4 style={{textAlign: 'center'}}>Get Report</h4>
      
      <br/>
      <br/>
      
      <div>
        <Widget className="widget-auth mx-auto">
            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Domain</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>comsats.com</td>
                        <td>Scan</td>
                        <td>30-11-2020</td>
                        <td>
                            <button style={{backgroundColor:'silver', color:'black'}}>
                                Get report
                            </button>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>abasyn.com</td>
                        <td>Abuse SSl</td>
                        <td>20-01-2021</td>
                        <td>
                            <button style={{backgroundColor:'silver', color:'black'}}>
                            Get report
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>uet.com</td>
                        <td>Recon</td>
                        <td>15-08-2021</td>
                        <td>
                            <button style={{backgroundColor:'silver', color:'black'}}>
                                Get report
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>nust.com</td>
                        <td>Scan</td>
                        <td>05-07-2020</td>
                        <td>
                            <button style={{backgroundColor:'silver', color:'black'}}>
                                Get report
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Widget>
      </div>

    </div>
  );
}

export default Getreport;