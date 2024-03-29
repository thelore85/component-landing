import React from 'react';
import './Hero.css';

const Hero = () => {
  return(
    <section id="hero">
      <div className="wrapper row vertical-align">
        <div className="hero-content col-md-6">
          <h1>Think Big, Think Web</h1>
          <h2>Looking for a web developer? <br />you are in the right place!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
          <button type="button" className="btn btn-secondary">Free Consultancy</button>
          <button type="button" className="btn btn-secondary-alt">Portfolio</button>
        </div>

        <div className="hero-image col-md-6 d-none d-md-block d-lg-block">
          {/* USING IMAGE BACKGROUND - NOT IMG TAG NEEDED */}
        </div>
      </div>
    </section>
  )
}

export default Hero;