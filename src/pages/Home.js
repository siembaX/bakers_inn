import 'bootstrap/dist/css/bootstrap.css';
import IMAGES from '../images/index1'
import { Navbar } from '../js/components/Navbar'
import Content from '../js/components/Content'
import { useState } from 'react'
import Columns from '../js/components/Columns'
import CardTabs from '../js/components/CardTabs';
import {  Uitabs } from '../js/components/Uitabs'
import { position } from '@chakra-ui/react';
import { Footer } from '../js/components/Footer'

export default function Home() {
  const [cardimages, /* setCardimages */]= useState([
    {card_images: <img src={ IMAGES.card1} alt="bread" className='card1' />,title: 'pie',id:1 },
    {card_images: <img src={ IMAGES.card2} alt="bread" className='card1' />,title: 'pie',id:2 },
    {card_images: <img src={ IMAGES.card3} alt="bread" className='card1' />,title: 'pie',id:3 },
    {card_images: <img src={ IMAGES.card4} alt="bread" className='card1' />,title: 'pie',id:4 }
  ]);

    return (
       <div className="wrapper">
       <Navbar />
        <section className="Hero-Section">
            <div className="row">
              <div className="col-lg-4" id='hero-txt'>
                <h1>Bringing you the 
                <br /> best value at the 
                <br />best prices.</h1>
                <p>The freshest sandwiches you can make are
                <br /> with Baker’s inn soft white loaf.</p>
                <button>READ MORE</button>
              </div>

              <div className="col-lg-5" id='bread-images'>
                  <div className="sliding-images grid">
                    <img src={ IMAGES.soft_bread_white } alt="bread" />
                    <img src={ IMAGES.low_gi } alt="bread" />
                    <img src={ IMAGES.High_Energy } alt="bread" />
                    <img src={ IMAGES.whole_grain } alt="bread" />
                  </div>
              </div>
            </div>
        </section>
        <section className="Hero-About">
            <div className="row" id='Hero-AboutContect'> 
              <div className="col-lg-6">
                  <h2>About Baker’s Inn</h2>
              </div>

              <div className="col-lg-6">
                <p>It all started back in the eighties when Baker's Inn 
                was just a small confectionery company that employed 40 
                people and produced about 30,000 loaves a day. We now aim 
                to provide a nourishing, convenient and accessible answer to 
                hunger’s call.</p>
                
                <button className="">READ MORE</button>
              </div>
            </div>

              <div className="all-cards">
                  {cardimages.map((cardimg) => (
                  <div className="card" key={cardimg.id}>

                    <div className="card-body">
                      {cardimg.card_images}
                      
                    </div>
                  </div>
                ))}
              </div>

        </section>

        <section className="ProductRange-Section">
          <h2>Our Product Range</h2>
          <div className="product-range">
            <Content images={ IMAGES.card5} title='bread' />
            <Content images={ IMAGES.card6} title='Meat Pies'/>
            <Content images={ IMAGES.card7} title='Scones'/>
            <Content images={ IMAGES.card8} title='Donuts'/>
          </div>
          <a href="./about" className='my-btns'>VIEW PRODUCT RANGE</a>
        </section>

        <section className='Booking-FactoryTour'>
          <div className="row">
            <div className="col-lg-6" id='booking-txtcontent'>
              <Columns h2='Book A Factory Tour'/>
              <Columns p="Keen on seeing how Baker’s inn products are made? 
              Are you interested in a field trip day for your school’s class? 
              Get in touch with us to book a tour of our factory that is closest 
              to you. Fill in the booking form and we will get back to you." />
              <a href='/products' className='mybtn'>BOOK FACTORY TOUR</a>
            </div>

            <div className="col-lg-6">
              <Columns images={ IMAGES.unsliced_loaves } />
            </div>
            
          </div>
        </section>

        <section className='Request-DonationSection'>
          <div className="row">
          <div className="col-lg-6">
              <Columns images={ IMAGES.workers_packing } />
            </div>
            <div className="col-lg-6" id='booking-txtcontent'>
              <Columns h2='Request A Donation'/>
              <Columns p="If you are holding an event that you wish to have us 
              donate to, we’re more than glad to help. Fill in the donation request 
              form for us to best understand how we can increase your event’s impact 
              in the local community" />
              <a href='./' className='mybtn'>REQUEST DONATION</a>
            </div>
            
          </div>
        </section>
        
        <section className='Kidz-cornerSection'>
              <div className="row">
                    <div className="col-lg-6">
                        <img src={  IMAGES.mariobros  } alt="mariobros" />
                    </div>

                    <div className="col-lg-6" id='kidz-txt'>
                        <h2>Kids Corner</h2>
                        <p>Let your children join the fun. 
                        Explore a place with exciting games 
                        and the top winners stand a chance to win 
                        exciting monthly prizes!</p>
                        <a href='./' className='mybtn'>PLAY GAMES</a>
                    </div>
              </div>
        </section>

        <section>
              <div className="tabs">
                  <Uitabs />

              </div>
        </section>
        
        <section className='newsletter-section'>
          <div className="row">
            <div className="col-lg-6">
                <div className='breadsettxt'>
                    <h2>Get Notified about promotions we offer</h2>
                    <div>
                      <input type="text" placeholder='your email'/>
                      <button type='submit'>SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="breadset">
                  <img src={IMAGES.whole_grain} alt="" />
                  <img src={IMAGES.soft_bread_white} alt="" />
                  <img src={IMAGES.High_Energy} alt="" />
                </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
 
    );
  }