import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Swalih-Portfolio</title>
          <meta property="og:title" content="Contact - Swalih-Portfolio" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="contact-text10">#home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-text11">#projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-text12">#skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-text13">#about</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="contact-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="contact-text15">Projects</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="contact-text16">Skills</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="contact-text17">About</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-text18">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="contact-text19">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="contact-text20">
                Summary of expertise and experience
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="contact-text21">
                Detailed projects showcasing business impact using the STAR
                method
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="contact-text22">
                Skills in BI tools, Python, compliance, and more
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="contact-text23">
                Background, experience, and values
              </span>
            </Fragment>
          }
        ></Navbar8>
        <ContactForm3
          action={
            <Fragment>
              <span className="contact-text24">Submit</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text26">Get in touch with us</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text27">Contact us</span>
            </Fragment>
          }
        ></ContactForm3>
        <Contact14
          link1={
            <Fragment>
              <span className="contact-text28">Start new chat</span>
            </Fragment>
          }
          email1={
            <Fragment>
              <span className="contact-text29">
                info@businessanalystlifesciences.com
              </span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="contact-text30">+1-123-456-7890</span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="contact-text31">
                123 Main Street, City, State, Zip Code
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text33">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-text34">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="contact-text35">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text36">Contact Information</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="contact-text37">Live Chat</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="contact-text38">Phone</span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="contact-text39">Office</span>
            </Fragment>
          }
        ></Contact14>
        <Contact7
          content1={
            <Fragment>
              <span className="contact-text40">
                businessanalyst@lifesciencesmanufacturing.com
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text41">Contact Us</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="contact-text42">Email</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="contact-text43">Phone</span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="contact-text44">
                Reach out to us via email for inquiries or to schedule a
                consultation.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="contact-text45">
                Give us a call during business hours for immediate assistance.
              </span>
            </Fragment>
          }
        ></Contact7>
        <Footer4
          link1={
            <Fragment>
              <span className="contact-text46">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-text47">Projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-text48">Skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-text49">About</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="contact-text50">Contact</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="contact-text51">Terms of Use</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="contact-text52">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="contact-text53">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-text21 {
            display: inline-block;
          }
          .contact-text22 {
            display: inline-block;
          }
          .contact-text23 {
            display: inline-block;
          }
          .contact-text24 {
            display: inline-block;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-text26 {
            display: inline-block;
          }
          .contact-text27 {
            display: inline-block;
          }
          .contact-text28 {
            display: inline-block;
          }
          .contact-text29 {
            display: inline-block;
          }
          .contact-text30 {
            display: inline-block;
          }
          .contact-text31 {
            display: inline-block;
          }
          .contact-text32 {
            display: inline-block;
          }
          .contact-text33 {
            display: inline-block;
          }
          .contact-text34 {
            display: inline-block;
          }
          .contact-text35 {
            display: inline-block;
          }
          .contact-text36 {
            display: inline-block;
          }
          .contact-text37 {
            display: inline-block;
          }
          .contact-text38 {
            display: inline-block;
          }
          .contact-text39 {
            display: inline-block;
          }
          .contact-text40 {
            display: inline-block;
          }
          .contact-text41 {
            display: inline-block;
          }
          .contact-text42 {
            display: inline-block;
          }
          .contact-text43 {
            display: inline-block;
          }
          .contact-text44 {
            display: inline-block;
          }
          .contact-text45 {
            display: inline-block;
          }
          .contact-text46 {
            display: inline-block;
          }
          .contact-text47 {
            display: inline-block;
          }
          .contact-text48 {
            display: inline-block;
          }
          .contact-text49 {
            display: inline-block;
          }
          .contact-text50 {
            display: inline-block;
          }
          .contact-text51 {
            display: inline-block;
          }
          .contact-text52 {
            display: inline-block;
          }
          .contact-text53 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Contact
