import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md"; // For the "Copied" confirmation icon

import "./PayToTrc20.css";
import { FaReply } from "react-icons/fa";
import { GoCopy } from "react-icons/go";

// import qrCodeImage from "./qr.png"; // Make sure qr.png is in the same directory or update the path

function PayToBep20() {

   const [copied, setCopied] = useState(false);
  const address = "0x1ce3670f24a1a956c9acf059486a4ffa28775321";

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true); // Show the "Copied" icon
      setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
    });
  };

    const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, [timeLeft]);

  // Convert seconds to mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

     const [formData, setFormData] = useState({
    email: "",
    traderId: "",
    transactionId: "",
    consent: false,
  });

  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleFileRemove = (e) => {
    e.preventDefault();
    setFileName("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.traderId || isNaN(formData.traderId))
      newErrors.traderId = "Valid Trader ID (numeric) is required.";
    if (!formData.transactionId)
      newErrors.transactionId = "Transaction ID is required.";
    if (!formData.consent)
      newErrors.consent = "You must agree to the terms and conditions.";
    if (!fileName) newErrors.file = "File upload is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsLoading(true);

      // Simulate 3-second processing
      setTimeout(() => {
        setIsLoading(false);
        setShowPopup(true);

        // Hide popup after 3 seconds and redirect to home
        setTimeout(() => {
          setShowPopup(false);
          navigate("/"); // Redirect to home page
        }, 3000);
      }, 3000);
    }
  };
  


  return (
    <div className="pay-to-trc20-container">
        <div className="payment-card">
  

      <div className="payment-form-container">
      {showPopup && (
        <div className="popup">
          <p>Transaction Successful</p>
        </div>
      )}
                 <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 20px"}}>
            <h2 className="Send-payment">Send payment</h2>
            <div className="Send-payment-1" style={{display:"flex", gap:"70px", alignItems:"center", }} >
              <div style={{ fontWeight: "bold" }}>
      {formatTime(timeLeft)}
    </div>
 
                <button style={{background:"none", border:"2px solid #54595F", borderRadius:"20px",display:"flex", gap:"5px", alignItems:"center", padding:"4px 10px"}}><FaReply style={{color:"#54595F"}} />
                <Link style={{textDecoration:"none"}} to="/OTC3DayPackage">Back</Link>
                </button> 

            </div>
            </div>
 <div className="item-payment-inner-1" style={{display:"flex", alignItems:"flex-end", borderBottom:"2px solid #D4D4D4", padding:"0px 20px 40px 20px", gap:"15px"}}>
        <p className="instruction-text-for-payment-and-support-1">
          After Making The Payment Connect To Support Team Via Telegram for
          Software Setup
        </p>
        <div className="button-wrapper-for-support-team-1">
          <a href="https://t.me/+3lFtZHNgFks4NGM1" target='blank'>
          <button className="action-button-for-support-team">
            Support Team
          </button>
          </a>
        </div>
        </div>   

        <div className="qe-code-main" style={{display:"flex", gap:"30px", margin:"50px 20px"}}>
            <img style={{width:"230px", }} src="/img/bep-20qr.jpg" alt="www" />
            <div className="qe-code-main-inner" style={{display:"flex", gap:"20px"}}>
                <img style={{width:"54px", height:"54px"}} src="/img/icon-usdt.png" alt="" />
                <div style={{textAlign:"end"}}>Only send Tether to this address</div>
            </div>
            </div>  

              <div className="trc20-address" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div>
        <p>BEP20 address</p>
        <p className="address-text" style={{ fontWeight: "bold" }}>{address}</p>
      </div>
      <div
        onClick={handleCopy}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: copied ? "green" : "black",
        }}
      >
        {copied ? (
          <>
            <MdCheckCircle size={20} /> <span style={{ fontSize: "14px" }}>Copied</span>
          </>
        ) : (
          <GoCopy size={20} />
        )}
      </div>
    </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            className={`form-input ${errors.email ? "error-border" : ""}`}
            placeholder="Enter Your Correct Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error-text">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>
            Enter Your Platform Trader ID <span style={{ color: "#E04562" }}>*</span>
          </label>
          <input
            type="text"
            name="traderId"
            className={`form-input ${errors.traderId ? "error-border" : ""}`}
            placeholder="Enter Correct Trader ID"
            value={formData.traderId}
            onChange={handleChange}
          />
          <small className="form-note">Only Enter Numeric Value</small>
          {errors.traderId && (
            <small className="error-text">{errors.traderId}</small>
          )}
        </div>

        <div className="form-group">
          <label>
            Transaction ID <span style={{ color: "#E04562" }}>*</span>
          </label>
          <input
            type="text"
            name="transactionId"
            className={`form-input ${errors.transactionId ? "error-border" : ""}`}
            placeholder="Enter Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
          />
          {errors.transactionId && (
            <small className="error-text">{errors.transactionId}</small>
          )}
        </div>

        <div className="form-group">
          <label>
            Upload Payment Screenshot <span style={{ color: "#E04562" }}>*</span>
          </label>
          <div className="custom-file-input-wrapper">
            <label htmlFor="file-upload" className="custom-file-button">
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              className="custom-file-input"
              onChange={handleFileChange}
            />
            {fileName ? (
              <div className="file-info">
                <span className="file-name-display">{fileName}</span>
                <button
                  className="remove-file-button"
                  onClick={handleFileRemove}
                >
                  ✕
                </button>
              </div>
            ) : (
              <span className="file-name-display">No file chosen</span>
            )}
            {errors.file && <small className="error-text">{errors.file}</small>}
          </div>
        </div>

        <div className="form-group">
          <label>
            Consent <span style={{ color: "#E04562" }}>*</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />{" "}
            Yes, I agree with the{" "}
            <a href="#" className="privacy-link">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="terms-link">
              terms and conditions
            </a>.
          </label>
          {errors.consent && (
            <small className="error-text">{errors.consent}</small>
          )}
        </div>

        <button type="submit" className="submit-button">
          {isLoading ? <span className="loading-icon" /> : "Submit"}
        </button>
      </form>
    </div>   
        </div>
        
        
     
    </div>
  );
}

export default PayToBep20;


//  <div className="payment-card">
//         <div className="payment-title">Send payment</div>
//         <div className="countdown-timer">59:10</div>

//         <p className="payment-instruction">
//           After Making The Payment Connect To Support Team Via Telegram for Software Setup
//         </p>

//         <div className="qr-code-section">
//           {/* <img src={qrCodeImage} alt="QR Code" className="qr-code-image" /> */}
//           <div className="qr-code-note">
//             <span className="tether-icon">T</span>
//             Only send Tether to this address
//           </div>
//         </div>

        // <div className="trc20-address">
        //   <label>TRC20 address</label>
        //   <p className="address-text">TQLKC7GsPbLuL3E28bMzHQLWv2Ym5rBEty</p>
        //   <button className="copy-button">Copy</button>
        // </div>

//         <form className="payment-form">
//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               className="form-input"
//               placeholder="Enter Your Correct Email"
//             />
//           </div>

//           <div className="form-group">
//             <label>Enter Your Platform Trader ID *</label>
//             <input
//               type="text"
//               className="form-input"
//               placeholder="Enter Correct Trader ID"
//             />
//             <small className="form-note">Only Enter Numeric Value</small>
//           </div>

//           <div className="form-group">
//             <label>Transaction ID *</label>
//             <input
//               type="text"
//               className="form-input"
//               placeholder="Enter Transaction ID"
//             />
//           </div>

//           <div className="form-group">
//             <label>Upload Payment Screenshot *</label>
//             <input type="file" className="form-file-input" />
//           </div>

//           <div className="form-group">
//             <label>
//               <input type="checkbox" required /> Yes, I agree with the{" "}
//               <a href="#" className="privacy-link">
//                 privacy policy
//               </a>{" "}
//               and{" "}
//               <a href="#" className="terms-link">
//                 terms and conditions
//               </a>.
//             </label>
//           </div>

//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </form>
//       </div>
