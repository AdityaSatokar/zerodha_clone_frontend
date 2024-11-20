import React from 'react'

function Brokerage() {
  return (
    <div className='container'>
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className='text-muted mt-3 fs-5'>List of all Pricing and taxes</h3>
      </div>
      <div className="row">
        <div className="col-8">
          <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage Calculator</h3></a>
          <ul className='text-muted' style={{lineHeight:"3rem"}}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of Charges</h3></a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
