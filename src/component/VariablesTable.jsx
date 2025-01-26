import React from "react";
import "./VariablesTable.css";

function VariablesTable() {
  return (
    <div>
       <div className="main-funded-next" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop:"80px" }}>
  <div style={{ textAlign: "center" }}>
    <button className="gradient-button" >
      Why FundedNext
    </button>
    <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 5rem)"}}>
      Why Choose FundedNext

    </h1>

    <div style={{color:"#9F9DA9", fontSize:"clamp(0.9rem,2vw,1.3rem)"}}>Accurate | Fast | Stable | Trustworthy</div>

   

  </div>
  
</div>
    <div  className="hard-variables-table-container">
     
      <div className="hard-table-header">
        <h4 style={{color:"#7A7687", letterSpacing:"5px"}} className="hard-table-title">VARIABLES</h4>
        <div className="hard-table-logo">
         <img style={{width:"150px"}} src="img/Binary.png" alt="" />
        </div>
      </div>
      <div  style={{backgroundColor:"#1C1633",borderRadius:" 0px 0px 12px 12px"}} className="hard-table-content">
        <div className="hard-table-row">
          <p className="hard-table-key">Profit Share from Challenge Phase</p>
          <p className="hard-table-value">15%</p>
        </div>
        <div className="hard-table-row">
          <p className="hard-table-key">Account Profit Share</p>
          <p className="hard-table-value">80% | 95% with Add-on</p>
        </div>
        <div className="hard-table-row">
          <p className="hard-table-key">Profit Target</p>
          <p className="hard-table-value">8%/5%</p>
        </div>
        <div className="hard-table-row">
          <p className="hard-table-key">Account Reset Option</p>
          <p className="hard-table-value">✓</p>
        </div>
        <div className="hard-table-row">
          <p className="hard-table-key">One Step Challenge</p>
          <p className="hard-table-value">✓</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default VariablesTable;
