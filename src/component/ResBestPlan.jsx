import React from 'react';
import { FiInfo } from 'react-icons/fi'; // Import the info icon
import { Link } from 'react-router-dom';
// import './ResBestPlan.css'; // Import CSS for styling

function ResBestPlan() {
  return (
    <div className="res-best-plan">
      <div className="plan-slider">

        {/* Plan 1 */}
        <div className="plan-card">
         
          <div className="card-header">
            <p>Account Size</p>
            <h2>$1,000</h2>
          </div>
           <Link to ="./OTC3DayPackage">
          <button className="get-plan-button">
            Get Plan <br />
            <span className="fee-text">Fee: $69</span>
          </button>
          </Link>
          <div className="plan-details">
            <div className="detail-row">
              <p>15% Profit Share From Challenge Phase</p>
              <p>✓</p>
            </div>
            <div className="detail-row">
              <p>Profit Target</p>
              <p>10%</p>
            </div>
            <div className="detail-row">
              <p>
                Maximum Daily Loss <FiInfo className="info-icon" />
              </p>
              <p>5%</p>
            </div>
            <div className="detail-row">
              <p>
                Maximum Overall Loss <FiInfo className="info-icon" />
              </p>
              <p>10%</p>
            </div>
            <div className="detail-row">
              <p>Minimum Trading Days</p>
              <p>5 Days</p>
            </div>
            <div className="detail-row">
              <p>Profit Split Upto</p>
              <p>95%</p>
            </div>
            <div className="detail-row">
              <p>News Trading</p>
              <p>✓</p>
            </div>
            <div className="detail-row">
              <p>First Reward</p>
              <p>Monthly</p>
            </div>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="plan-card">
          <div className="card-header">
            <p>Account Size</p>
            <h2>$3,000</h2>
          </div>
           <Link to ="./OTC5DayPackage">
          <button className="get-plan-button">
            Get Plan <br />
            <span className="fee-text">Fee: $129</span>
          </button>
          </Link>
          <div className="plan-details">
            <div className="detail-row">
              <p>15% Profit Share From Challenge Phase</p>
              <p>✓</p>
            </div>
            <div className="detail-row">
              <p>Profit Target</p>
              <p>12%</p>
            </div>
            <div className="detail-row">
              <p>
                Maximum Daily Loss <FiInfo className="info-icon" />
              </p>
              <p>6%</p>
            </div>
            <div className="detail-row">
              <p>
                Maximum Overall Loss <FiInfo className="info-icon" />
              </p>
              <p>12%</p>
            </div>
            <div className="detail-row">
              <p>Minimum Trading Days</p>
              <p>7 Days</p>
            </div>
            <div className="detail-row">
              <p>Profit Split Upto</p>
              <p>90%</p>
            </div>
            <div className="detail-row">
              <p>News Trading</p>
              <p>✓</p>
            </div>
            <div className="detail-row">
              <p>First Reward</p>
              <p>Monthly</p>
            </div>
          </div>
        </div>

        {/* Plan 3 */}
        <div className="plan-card">
          <div className="card-header">
            <p>Account Size</p>
            <h2>$12,000</h2>
          </div>
            <Link to ="./OTC15DayPackage">
          <button className="get-plan-button">
            Get Plan <br />
            <span className="fee-text">Fee: $499</span>
          </button>
          </Link>
          <div className="plan-details">
            <div className="detail-row">
              <p>15% Profit Share From Challenge Phase</p>
              <p>✓</p>
            </div>
            <div className="detail-row">
              <p>Profit Target</p>
              <p>15%</p>
            </div>
            <div className="detail-row">
              <p>
                Maximum Daily Loss <FiInfo className="info-icon" />
              </p>
              <p>7%</p>
            </div>
            <div className="detail-row">
              <p>
                Maximum Overall Loss <FiInfo className="info-icon" />
              </p>
              <p>15%</p>
            </div>
            <div className="detail-row">
              <p>Minimum Trading Days</p>
              <p>10 Days</p>
            </div>
            <div className="detail-row">
              <p>Profit Split Upto</p>
              <p>85%</p>
            </div>
            <div className="detail-row">
              <p>News Trading</p>
              <p>✓</p>
            </div>
            <div className="detail-row">
              <p>First Reward</p>
              <p>Monthly</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ResBestPlan;
