import React from "react";
import Widget from "../../components/Widget/Widget";

const Ongoing = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <b>Your Ongoing Assessments</b>
      </h1>
      <br />
      <br />
      <br />
      <br />

      <div>
        <Widget className="widget-auth mx-auto">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Domain</th>
                <th scope="col">Type</th>
                <th scope="col">Since</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>comsats.com</td>
                <td>Scan</td>
                <td>18 minutes</td>
                <td>
                  <button style={{ backgroundColor: "red", color: "white" }}>
                    Abort
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>abasyn.com</td>
                <td>Abuse SSl</td>
                <td>10 minutes</td>
                <td>
                  <button style={{ backgroundColor: "red", color: "white" }}>
                    Abort
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>nust.com</td>
                <td>Scan</td>
                <td>2 minutes</td>
                <td>
                  <button style={{ backgroundColor: "red", color: "white" }}>
                    Abort
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Widget>
      </div>
    </div>
  );
};

export default Ongoing;
