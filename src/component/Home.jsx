import React from 'react';
import "./Home.css";
import Features from './Features';
import Feaslider from './Feaslider';
import Trade from './Trade';
import BannerAll from './BannerAll';
import BestPlan from './BestPlan';
import ResBestPlan from './ResBestPlan';
import VariablesTable from './VariablesTable';
import VariablesTable1 from './VariablesTable1';

function Home() {
  return (
    <div>
      <div className='main-app-contaniner'>
      <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 4rem)", width: "100%", maxWidth: "800px" }}>
        Empowering Promising Traders Worldwide
      </h1>
      
      {/* Container for feature items */}
      <div className="feature-container">
        <div className="feature-item">
          <img src="img/profit-split-feature.svg" alt="" />
          <div style={{ fontWeight: "700", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", margin: "10px 0px" }}>Up to 95%</div>
          <div style={{fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>of Profit Split</div>
        </div>

        <div className="feature-item">
          <img src="img/upto-account-feature.svg" alt="" />
          <div style={{ fontWeight: "700", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", margin: "10px 0px" }}>Up to 95%</div>
          <div style={{fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>of Profit Split</div>
        </div>

        <div className="feature-item">
          <img src="img/addons-feature.svg" alt="" />
          <div style={{ fontWeight: "700", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", margin: "10px 0px" }}>Up to 95%</div>
          <div style={{fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>of Profit Split</div>
        </div>

        <div className="feature-item">
          <img src="img/time-limit-feature.svg" alt="" />
          <div style={{ fontWeight: "700", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", margin: "10px 0px" }}>Up to 95%</div>
          <div style={{fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>of Profit Split</div>
        </div>
      </div>

      <div className="section">
        <div className="buttons">
          <button className="btn-primary">Start Challenge <span>→</span></button>
          <button className="btn-secondary">Free Trial</button>
        </div>
        <div className="trustpilot">
          <p>
            Excellent 
            <img className="stars" src="img/reviewall.png" alt="Stars" />
            <span>25,531 reviews on</span> 
            <img className="trustpilot-logo" src="img/singlestar.png" alt="Trustpilot" />
            <span>Trustpilot</span>
          </p>
        </div>
      </div>

      <Features/>
      <Feaslider/>
      <Trade/>
      <BannerAll/>
      </div>
       
      <BestPlan/>
        
      <ResBestPlan/>
      <VariablesTable1/>
     
       

    </div>
  );
}

export default Home;
