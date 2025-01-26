import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div className="highlights-section">
      <div className="grid-container">
        {/* Left Column */}
        <div className="highlight-header">
          <h1>Key Highlights</h1>
          <p>Power up your trading success with FundedNext & get maximum profit.</p>
        </div>

        {/* Right Column */}
       

        {/* Highlight Items */}
        <div className="highlight-item">
            <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3 style={{color:"#fff"}}>15% Profit Share in Challenge Phase</h3>
          <p style={{color:"#9F9DA9"}}>
            The only trading prop firm that offers a 15% profit share from the
            Challenge Phase profits.
          </p>
        </div>
        <div className="highlight-item">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3 style={{color:"#fff"}}>Monthly Competition</h3>
          <p style={{color:"#9F9DA9"}}>
            FundedNext hosts free monthly competitions where you can compete
            for exclusive rewards.
          </p>
        </div>
        <div className="highlight-item">
        <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3 style={{color:"#fff"}}>Competitive Spreads & High Leverage</h3>
          <p style={{color:"#9F9DA9"}}>
            With spreads starting from 0.0 pips and leverage of up to 1:100,
            FundedNext gives traders an unmatched trading experience.
          </p>
        </div>

         <div className="additional-info">
          <p style={{color:"#706C7E"}} >THERE IS MORE -</p>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <img src="img/commision.svg" alt="" style={{ marginRight: "10px" }} /> Low commissions
  </li>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <img src="img/raw.svg" alt="" style={{ marginRight: "10px" }} /> Raw spreads
  </li>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <img src="img/packge.svg" alt="" style={{ marginRight: "10px" }} /> Best packages
  </li>
  <li style={{ color: "#C3C1C9", display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <img src="img/afford.svg" alt="" style={{ marginRight: "10px" }} /> Affordable
  </li>
</ul>

        </div>
        
        <div className="highlight-item">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3 style={{color:"#fff"}}>Daily News Trading</h3>
          <p style={{color:"#9F9DA9"}}>
            Make profits quickly by utilizing big market movements when a
            high-impact news is announced.
          </p>
        </div>
        <div className="highlight-item">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3 style={{color:"#fff"}}>Reset & Top-up</h3>
          <p style={{color:"#9F9DA9"}}>
            Reset or top-up your account to restart your trading journey, even
            if you’ve violated any rules.
          </p>
        </div>
        <div className="highlight-item">
          <img style={{width:"120px"}} src="img/icon1.png" alt="" />
          <h3 style={{color:"#fff"}}>No Time Limits</h3>
          <p style={{color:"#9F9DA9"}}>
            FundedNext puts traders in control, providing full trading freedom
            with no time limits to worry about.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;


