import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import CTA1 from '../components/cta1'
import ContentList1 from '../components/content-list1'
import Footer4 from '../components/footer4'

const Legal = (props) => {
  return (
    <>
      <div className="legal-container">
        <Head>
          <title>Legal - Swalih-Portfolio</title>
          <meta property="og:title" content="Legal - Swalih-Portfolio" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="legal-text10">#home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="legal-text11">#projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="legal-text12">#skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="legal-text13">#about</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="legal-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="legal-text15">Projects</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="legal-text16">Skills</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="legal-text17">About</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="legal-text18">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="legal-text19">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="legal-text20">
                Summary of expertise and experience
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="legal-text21">
                Detailed projects showcasing business impact using the STAR
                method
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="legal-text22">
                Skills in BI tools, Python, compliance, and more
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="legal-text23">
                Background, experience, and values
              </span>
            </Fragment>
          }
        ></Navbar8>
        <CTA1
          action1={
            <Fragment>
              <span className="legal-text24">Explore Our Services</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="legal-text25">Get in Touch</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="legal-text26">
                Choose from our range of services to optimize your business
                processes and drive growth.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="legal-text27">
                Unlock the Power of Data in Life Sciences Manufacturing
              </span>
            </Fragment>
          }
        ></CTA1>
        <ContentList1
          content1={
            <Fragment>
              <span className="legal-text28">
                With a specialization in Life Sciences Manufacturing, our
                Business Analyst brings a wealth of experience and expertise to
                the table. From data visualization to compliance and AI/ML
                implementation, we offer a comprehensive range of services
                tailored to meet your specific needs.
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="legal-text29">
                Our Business Analyst is proficient in a variety of BI tools such
                as Power BI and Tableau, as well as Python programming. With a
                deep understanding of compliance requirements in the Life
                Sciences industry and knowledge in AI/ML technologies, we are
                well-equipped to handle complex projects.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="legal-text30">
                Explore our portfolio of detailed projects that highlight our
                capabilities in data visualization, compliance solutions, and
                AI/ML implementation. Each project demonstrates our commitment
                to delivering high-quality results for our clients.
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="legal-text31">
                Choose from different pricing plans tailored to your specific
                needs. Whether you require data visualization services,
                compliance solutions, or AI/ML implementation, we have flexible
                pricing options to suit your budget and requirements.
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="legal-text32">
                Ready to take your Life Sciences Manufacturing projects to the
                next level? Contact us today to discuss how our Business Analyst
                can help drive success for your business. We look forward to
                partnering with you!
              </span>
            </Fragment>
          }
          content6={
            <Fragment>
              <span className="legal-text33">
                Read what our clients have to say about their experience working
                with our Business Analyst. From improved efficiency to
                innovative solutions, our clients trust us to deliver
                exceptional results time and time again.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="legal-text34">About the Business Analyst</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="legal-text35">Skills and Expertise</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="legal-text36">Detailed Projects Showcase</span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="legal-text37">Pricing Plans</span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="legal-text38">Get in Touch</span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="legal-text39">Client Testimonials</span>
            </Fragment>
          }
        ></ContentList1>
        <Footer4
          link1={
            <Fragment>
              <span className="legal-text40">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="legal-text41">Projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="legal-text42">Skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="legal-text43">About</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="legal-text44">Contact</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="legal-text45">Terms of Use</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="legal-text46">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="legal-text47">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .legal-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .legal-text10 {
            display: inline-block;
          }
          .legal-text11 {
            display: inline-block;
          }
          .legal-text12 {
            display: inline-block;
          }
          .legal-text13 {
            display: inline-block;
          }
          .legal-text14 {
            display: inline-block;
          }
          .legal-text15 {
            display: inline-block;
          }
          .legal-text16 {
            display: inline-block;
          }
          .legal-text17 {
            display: inline-block;
          }
          .legal-text18 {
            display: inline-block;
          }
          .legal-text19 {
            display: inline-block;
          }
          .legal-text20 {
            display: inline-block;
          }
          .legal-text21 {
            display: inline-block;
          }
          .legal-text22 {
            display: inline-block;
          }
          .legal-text23 {
            display: inline-block;
          }
          .legal-text24 {
            display: inline-block;
          }
          .legal-text25 {
            display: inline-block;
          }
          .legal-text26 {
            display: inline-block;
          }
          .legal-text27 {
            display: inline-block;
          }
          .legal-text28 {
            display: inline-block;
          }
          .legal-text29 {
            display: inline-block;
          }
          .legal-text30 {
            display: inline-block;
          }
          .legal-text31 {
            display: inline-block;
          }
          .legal-text32 {
            display: inline-block;
          }
          .legal-text33 {
            display: inline-block;
          }
          .legal-text34 {
            display: inline-block;
          }
          .legal-text35 {
            display: inline-block;
          }
          .legal-text36 {
            display: inline-block;
          }
          .legal-text37 {
            display: inline-block;
          }
          .legal-text38 {
            display: inline-block;
          }
          .legal-text39 {
            display: inline-block;
          }
          .legal-text40 {
            display: inline-block;
          }
          .legal-text41 {
            display: inline-block;
          }
          .legal-text42 {
            display: inline-block;
          }
          .legal-text43 {
            display: inline-block;
          }
          .legal-text44 {
            display: inline-block;
          }
          .legal-text45 {
            display: inline-block;
          }
          .legal-text46 {
            display: inline-block;
          }
          .legal-text47 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Legal
