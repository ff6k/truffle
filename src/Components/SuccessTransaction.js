/**
 * App components
 * 
 * SuccessTransaction.js:
 * 
 * Author: Truong Thinh
 * Create At: 6/ 8/ 2021
 */
import React from "react";

function SuccessTransaction(props) {
  return (
    <div className="column is-12 is-ellipsis has-text-centered">
      <div className="notification is-info">
        <button className="delete"></button>
        <a title={props.tx} className="is-size-7">
          {props.tx}
        </a>
      </div>
    </div>
  );
}

export default SuccessTransaction;
