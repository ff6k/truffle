/**
 * App components
 * 
 * SortTokenBlock.js:
 * 
 * Author: Truong Thinh
 * Create At: 6/ 8/ 2021
 */
import React from "react";

function SortTokenBlock(props) {
  return (
    <div className="panel-block">
      <p className="control has-text-grey is-size-7 has-text-right sortby">
        sort <i className="fas fa-sort has-text-grey-light"></i>
      </p>
    </div>
  );
}

export default SortTokenBlock;
