import React from 'react'
import HeaderLandingPage from '../../../components/HeaderLandingPage'
import Jumbotron from './Jumbotron'
import OurService from './OurService'
import WhyUs from './WhyUs'
import Testimonial from './Testimonial'
import CtaBanner from './CtaBanner'
import FAQ from './FAQ'
import FooterLandingPage from '../../../components/FooterLandingPage'

const Home = () => {
  return (
    <>
      <section id='home'>
        <HeaderLandingPage/>
        <Jumbotron/>
      </section>
      <section id='our-service'>
        <OurService/>
      </section>
      <section id='why-us'>
        <WhyUs/>
      </section>
      <section id="testimonial">
        <Testimonial/>
      </section>
      <section id='cta-banner'>
        <CtaBanner/>
      </section>
      <section id='faq'>
        <FAQ/>
      </section>
      <section id='footer'>
        <FooterLandingPage/>
      </section>
    </>
  )
}

export default Home
