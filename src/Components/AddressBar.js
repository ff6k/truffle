/**
 * App components
 * 
 * AddressBar.js:
 * 
 * Author: Truong Thinh
 * Create At: 6/ 8/ 2021
 */

import React from "react";

function addressBar(props) {
  return (
    <p
      className={
        props.tx
          ? "is-hidden"
          : "panel-heading has-text-centered is-clipped is-size-7"
      }
    >
      ETH Account:
      <strong>{'\u2728' + props.account + '\u2728'}</strong>
    </p>
  );
}

export default addressBar;
