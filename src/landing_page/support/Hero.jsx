import React from 'react'

function Hero() {
  return (
    <section className='container-fluid p-5' id='support-hero'>
      <div className="row p-3 m-3">
        <div className="col-5">
        <h3 className="fs-2 my-5">Support Portal</h3>
          <h2 className='mb-4'>Search for an answer or browse help topics to create a ticket</h2>
          <input className='mb-5' type="" placeholder='Eg:How do i activate F&O'/> <br />
          <a href="">Track account opening</a> &nbsp;
          <a href="">Track segment activation</a> &nbsp;
          <a href="">Intraday margins</a> &nbsp; <br />
          <a href="">Kite user manual</a> &nbsp;
        </div>
        <div className="col-2"></div>
        <div className="col-5 my-5">
        <a href="" className='mb-5'>Track Tickets</a>
        <h1 className='mt-5'>Featured</h1>
        <ol>
          <li><a href="">Rights Entitlements listing in November 2024</a> </li>
          <li><a href="">Surveillance measure on scrips - November 2024</a></li>
        </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero
