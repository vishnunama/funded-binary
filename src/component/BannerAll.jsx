import React from 'react'
import "./bannerall.css"

function BannerAll() {
  return (
    <div>
    <div className='banner-inner-main'>
        <div>
            <div className='banner-inner'><img  className='banner-inner-1' src="img/banner1.png" alt="Banner 1" /> </div>
            <div className='banner-inner'><img className='banner-inner-1' src="img/banner2.png" alt="Banner 2" /> </div>
        </div>

     <div className='banner-inner-in'><img className='banner-inner-2'   src="img/banner3.png" alt="Banner 3" /> </div> 
      </div>

<div className="community-support-container">
      <span style={{ letterSpacing: "5px",textTransform: "uppercase",fontWeight:"100", color:"#585469", fontSize:".9rem"  }}>FundedNext Community & Support</span>
<span style={{ letterSpacing: "8px",color:"#585469", fontSize:".9rem", marginLeft:"30px"}}>-----------------------------------------------------</span>
      <div style={{marginTop:"20px"}} className="support-cards">
        <div className="card">
          <h3 style={{lineHeight:"2rem"}}>Empowering Traders in <br /> 170+ Countries</h3>
          <div className="stats">
            <div  style={{borderLeft:"3px solid  #8B55FF"}} className='border-inner'><div className="highlight">$105M+</div> 
            <div style={{color:"#C4C4CC", fontSize:".9rem"}}>Total Rewards</div></div>
            <div style={{borderLeft:"3px solid  #269EEE"}}   className='border-inner'><div className="highlight">97K+</div> 
            <div style={{color:"#C4C4CC", fontSize:".9rem"}}>Traders</div></div>
            <div style={{borderLeft:"3px solid  #F34C99"}}   className='border-inner'><div className="highlight">$5hrs+</div> 
            <div style={{color:"#C4C4CC", fontSize:".9rem"}}>Avg. Reward Time</div></div>
          </div>
        </div>
        <div className="card-1">
          <img src="img/community.webp" alt="" />
          <h3>FundedNext Community</h3>
          <p>Serving over 700,000+ members</p>
          <div className="social-icons">
            <img src="img/discord.svg" alt="Discord" />
            <img src="img/facebook.svg" alt="Facebook" />
            <img src="img/twitter.svg" alt="Twitter" />
            <img src="img/youtube.svg" alt="YouTube" />
          </div>
        </div>
        <div className="card-2">
          <img src="img/customer-support.webp" alt="" />
          <h3>24/7 Pro Support</h3>
          <p>
            With a 50-second average response time, we're a prop trading firm
            that truly cares about our traders.
          </p>
        </div>
      </div>
    </div>
      </div>
  )
}

export default BannerAll