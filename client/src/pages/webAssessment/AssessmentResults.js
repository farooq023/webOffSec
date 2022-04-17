/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import img from "../../assets/assess.jfif";

const AssessmentResults = () => {
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <b>Assessment Types</b>{" "}
      </h1>
      <br />
      <br />
      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginLeft: "4%",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            width: "15%",
          }}
        >
          <a href="/scanlist">
            <img src={img} width="125" height="125" />
          </a>
          {/* <Button
            href="/scanlist"
            style={{
              backgroundColor: "white",
              color: "blue",
              marginTop: "20%",
            }}
          >
            Web Assessments
          </Button> */}
          <UncontrolledDropdown>
            <DropdownToggle
              style={{
                backgroundColor: "white",
                color: "blue",
                marginTop: "20%",
              }}
            >
              Web Assessments <span class="caret"></span>
            </DropdownToggle>
            <DropdownMenu style={{ backgroundColor: "blue" }}>
              <DropdownItem href="/scanlist">Web Assessments</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>

        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            width: "15%",
          }}
        >
          <a>
            <img src={img} width="125" height="125" />
          </a>
          <UncontrolledDropdown>
            <DropdownToggle
              style={{
                backgroundColor: "white",
                color: "blue",
                marginTop: "20%",
              }}
            >
              Web Application Firewall <span class="caret"></span>
            </DropdownToggle>
            <DropdownMenu style={{ backgroundColor: "blue" }}>
              <DropdownItem href="dnslist">Abused SSL Cipher</DropdownItem>
              <DropdownItem href="ssllist">Abused SSL Cipher</DropdownItem>
              <DropdownItem href="">Generated Payloads</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>

        <div style={{ flexDirection: "column", width: "15%" }}>
          <a>
            <img src={img} width="125" height="125" />
          </a>

          <UncontrolledDropdown>
            <DropdownToggle
              style={{
                backgroundColor: "white",
                color: "blue",
                marginTop: "20%",
              }}
            >
              Web Gateway <span class="caret"></span>
            </DropdownToggle>
            <DropdownMenu style={{ backgroundColor: "blue" }}>
              <DropdownItem href="">Assessed Inbound Traffic</DropdownItem>
              <DropdownItem href="">Assessed Outbound Traffic</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;
