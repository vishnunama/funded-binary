import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./OTC3DayPackage.css";

const OTC15DayPackage = () => {
  return (
    <div className="main-container-for-qnex-package-setup">
      <div className="card-wrapper-for-qnex-otc-package">
        <h1
          style={{ padding: "50px 20px 0px 20px" }}
          className="header-title-text-for-qnex-otc-package"
        >
          QNEX OTC 3DAY PACKAGE
        </h1>
        <div
          className="item-payment-inner"
          style={{
            display: "flex",
            alignItems: "flex-end",
            borderBottom: "1px solid #D4D4D4",
            padding: "0px 20px 40px 20px",
          }}
        >
          <p className="instruction-text-for-payment-and-support">
            After Making The Payment Connect To Support Team Via Telegram for
            Software Setup
          </p>
          <div className="button-wrapper-for-support-team">
            <a href="https://t.me/+3lFtZHNgFks4NGM1" target="blank">
              <button className="action-button-for-support-team">
                Support Team
              </button>
            </a>
          </div>
        </div>

        <div className="pricing-information-for-qnex-package">USD 499</div>
        <div className="information-section-heading-for-package">
          Information
        </div>
        <div className="list-of-payment-methods-for-qnex">
          <Link to="/OTC3DayPackage/PayToTrc20" className="individual-payment-method-wrapper">
            <img
              src="img/icon-usdt.png"
              alt="Tether"
              className="icon-for-payment-method-logo"
            />
            <div>
              <div style={{ color: "#333333" }} className="payment-method-name-display-text">
                Tether
              </div>
              <div className="payment-method-type-tag">TRC 20</div>
            </div>
          </Link>
            <Link to="/OTC3DayPackage/PayToBep20" className="individual-payment-method-wrapper">
            <img
              src="img/icon-usdt.png"
              alt="Tether"
              className="icon-for-payment-method-logo"
            />
            <div>
            <div style={{color:"#333333"}} className="payment-method-name-display-text">Tether</div>
            <div className="payment-method-type-tag">BEP 20</div>
            </div>
          </Link>
           <Link to="/OTC3DayPackage/PayTobtc" className="individual-payment-method-wrapper">
            <img
              src="img/icon-btc.png"
              alt="Tether"
              className="icon-for-payment-method-logo"
            />
            <div>
            <div style={{color:"#333333"}} className="payment-method-name-display-text">Bitcoin</div>
            <div className="payment-method-type-tag">BTC</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OTC15DayPackage;
