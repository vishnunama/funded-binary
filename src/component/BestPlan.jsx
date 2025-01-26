import React from 'react';
import './bestplan.css';
import VariablesTable from './VariablesTable';
import { Link } from 'react-router-dom';

function BestPlan() {
  return (
    <>
    <div className='main-best-page'>
      <p style={{ color: 'transparent' }}>Choose the Best Plan</p>
      <div className='main-best-page-1'>
        <h1 className='choose-best'>Choose the Best Plan</h1>
        <div className="best-plan">
          <div className="plan-table">
            <div className="table-header">
              <div style={{display:"flex", alignItems:"center",justifyContent:"center", borderRadius:"20px 0px 0px 0px", paddingLeft:"20px", fontSize:"1.3rem"}}>Account Size	</div>
              <div>$1,000 Plan
                <div>
                   <Link to="./OTC3DayPackage">
                <button className="plan-button">
                  Get Plan <br />
                  <span className="fee-text">Fee: $69</span>
                </button>
              </Link>
                </div>
              </div>
              <div>$3,000 Plan
                 <div>
                 <Link to="./OTC5DayPackage">
                <button className="plan-button">
                  Get Plan <br />
                  <span className="fee-text">Fee: $129</span>
                </button>
              </Link>
              </div>
              </div>
              <div style={{borderRadius:"0px 20px 0px 0px"}}>$12,000 Plan
                <div>
                 <Link to="./OTC15DayPackage">
                <button className="plan-button">
                  Get Plan <br />
                  <span className="fee-text">Fee: $499</span>
                </button>
              </Link>
              </div>
              </div>
            </div>
            <div className="table-row">
              <div style={{textAlign:"left"}}>15% Profit Share From Challenge Phase</div>
              <div>✓</div>
              <div>✓</div>
              <div>✓</div>
            </div>
            <div className="table-row">
              <div style={{textAlign:"left"}}>Maximum Daily Loss</div>
              <div>5% </div>
              <div>5% </div>
              <div>5% </div>
            </div>
            <div className="table-row">
              <div style={{textAlign:"left"}}>Maximum Overall Loss</div>
              <div>10% </div>
              <div>10% </div>
              <div>10% </div>
            </div>
            <div className="table-row">
              <div style={{textAlign:"left"}}>Minimum Trading Days</div>
              <div>5 Days</div>
              <div>5 Days</div>
              <div>5 Days</div>
            </div>
            <div className="table-row">
              <div style={{textAlign:"left"}}>Profit Split Up to</div>
              <div>95%</div>
              <div>95%</div>
              <div>95%</div>
            </div>
            <div className="table-row">
              <div style={{textAlign:"left"}}>News Trading</div>
              <div>&#10003;</div>
              <div>&#10003;</div>
              <div>&#10003;</div>
            </div>
            <div className="table-row">
              <div style={{borderRadius:"0px 0px 0px 20px",textAlign:"left"}}>First Reward</div>
              <div>Monthly</div>
              <div>Monthly</div>
              <div style={{borderRadius:"0px 0px 20px 0px"}}>Monthly</div>
            </div>
          </div>
        </div>
      </div>
    <VariablesTable/>
    {/* <VariablesTable/> */}
    </div>
    </>
  );
}

export default BestPlan;




  // <div className="table-row">
  //             <div>
  //               <button className="plan-button">
  //                 Get Plan <br />
  //                 <span className="fee-text">Fee: $69</span>
  //               </button>
  //             </div>
  //             <div>
  //               <button className="plan-button">
  //                 Get Plan <br />
  //                 <span className="fee-text">Fee: $149</span>
  //               </button>
  //             </div>
  //             <div>
  //               <button className="plan-button">
  //                 Get Plan <br />
  //                 <span className="fee-text">Fee: $249</span>
  //               </button>
  //             </div>
  //           </div>