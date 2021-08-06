/**
 * App components
 * 
 * ApproveHeader.js:
 * Renders the wallet header for the Approve screen.
 * It loads when the user clicks the approve button.
 * 
 * Author: Truong Thinh
 * Create At: 5/ 8/ 2021
 */
import React from "react";

function ApproveHeader(props) {
  <div className="panel-block">
    <div className="content">
      <h1 className="title is-size-5 is-uppercase">
        Approve {props.token.symbol}
      </h1>
      <h2 className="subtitle is-size-6 has-text-grey-light">
        Approve an Ethereum address to send {props.token.symbol.toUpperCase()}{" "}
        from your adderss.
      </h2>
    </div>
  </div>;
}

export default ApproveHeader;
