import React from 'react';
import MyProfile from '../images/profile-sm.png';
import EmailIcon from '../icons/email-icon.svg';
import CallIcon from '../icons/call-icon.svg';

function About() {
  return (
    <header className="header">
      <div className="header--container">
        <img src={MyProfile} className="header--img" alt="profile"/>
        <section className="header__section--container">
          <section className="header__section--wrapper">
            <div className="header--wrapper">
            <p className="header--name">Roseline Marie Prisca</p>
            <p className="header--profession">A front-end developer</p>
            </div>
            <div className="header--wrapper">
            <div className="header--email">
            <img src={EmailIcon} className="header--icon" alt="email" />
            <a className="header__link header__link--email" href="mailto:roselinemarieprisca@gmail.com">roselinemarieprisca@gmail.com</a>
            </div>
            <div className="header--number">
            <img src={CallIcon} className="header--icon" alt="call" />
            <a className="header__link header__link--number" href="tel:+261348479051">Call me at (+261) 348479051</a></div>
            </div>
          </section>
          <p className="header--desc">An underdog developer, who is willing to make the world better by creating outstanding UI applications</p>
        </section>
      </div>
    </header>
  )
}

export default About
