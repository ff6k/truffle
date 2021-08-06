/**
 * App components
 *
 * MintHeader.js:
 * Renders the wallet header for the Mint screen.
 * It loads when the user clicks the mint button.
 *
 * Author: Truong Thinh
 * Create At: 5/ 8/ 2021
 */
import React from "react";

function MintHeader(props) {
  return (
    <div className="panel-block">
      <div className="content">
        <h1 className="title is-size-5 is-uppercase">
          Mint {props.token.symbol}
        </h1>
        <h2 className="subtitle is-size-6  has-text-grey-light">
          Only send {props.token.symbol.toUpperCase()} to an Ethereum address.
        </h2>
      </div>
    </div>
  );
}

export default MintHeader;
