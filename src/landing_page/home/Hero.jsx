import React from 'react'

function Hero() {
  return (
    <div className='conatainer p-5 mb-5'>
      <div className="row text-center">
        <img src="images/homeHero.png" alt="Hero Image" className='mb-4' />
        <h1 className='mt-4'>Invest In Everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds and more!</p>
        <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero
