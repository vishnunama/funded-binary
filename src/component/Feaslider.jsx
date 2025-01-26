import React from "react";
import "./features.css"; // Import the CSS file for styling

const Feaslider = () => {
  return (

    <div>
      <div className="highlight-header-1">
          <h1>Key Highlights</h1>
          <p>Power up your trading success with FundedNext & get maximum profit.</p>
        </div>
    <div className="slider-container">
      <div className="slider">
        {/* Static slides */}
        <div className="slider-item">
          <div className="">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3>Monthly Competition</h3>
          <p>
            FundedNext hosts free monthly competitions where you can compete
            for exclusive rewards.
          </p>
        </div>
        </div>
       <div className="slider-item">
          <div className="">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3>Monthly Competition</h3>
          <p>
            FundedNext hosts free monthly competitions where you can compete
            for exclusive rewards.
          </p>
        </div>
        </div>
       <div className="slider-item">
          <div className="">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3>Monthly Competition</h3>
          <p>
            FundedNext hosts free monthly competitions where you can compete
            for exclusive rewards.
          </p>
        </div>
        </div>
        <div className="slider-item">
          <div className="">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3>Monthly Competition</h3>
          <p>
            FundedNext hosts free monthly competitions where you can compete
            for exclusive rewards.
          </p>
        </div>
        </div>

       
      
      </div>
    </div>
     <div className="additional-info-1">
          <p style={{color:"#706C7E", marginBottom:"30px"}} >THERE IS MORE -</p>
  <ul className="responsive-grid">
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center" }}>
    <img src="img/commision.svg" alt="" style={{ marginRight: "10px" }} /> Low commissions
  </li>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center" }}>
    <img src="img/raw.svg" alt="" style={{ marginRight: "10px" }} /> Raw spreads
  </li>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center" }}>
    <img src="img/packge.svg" alt="" style={{ marginRight: "10px" }} /> Best packages
  </li>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center" }}>
    <img src="img/afford.svg" alt="" style={{ marginRight: "10px" }} /> Affordable
  </li>
</ul>
        </div>
    </div>
  );
};

export default Feaslider;
