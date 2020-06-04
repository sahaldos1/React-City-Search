import React, { Component } from "react";
import './CodeRow.css';



class CodeRow extends Component {
  render() {
    const codeRow = <li> Zipcode = {this.props.codes}</li>
    return (
      <div>
        {codeRow}
        <br></br>
      </div>
    ); 
  }
}



export default CodeRow