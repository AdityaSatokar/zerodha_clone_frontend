import React from 'react'

function Pricing() {
  return (
    <div  className='container border'>
      <div className='col-4 border'>
        <h1 className='mb-5'>Unbeatable pricing</h1>
        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a href=""  style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <div className="col-2 " style={{display:"inline"}}>
      </div>
      <div className="col-6 border" style={{display:"inline"}}>
          <div className="row text-center">
          <div className="col border p-2">
            <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
            <p>Free equity delivery and <br /> direct mutual fund.</p>
          </div>
          <div className="col border p-2"></div>
            <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
            <p>Free equity delivery and <br /> direct mutual fund.</p>
          </div>
      </div>
    </div>
  )
}

export default Pricing
