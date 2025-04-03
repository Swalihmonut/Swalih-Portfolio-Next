import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Swalih-Portfolio</title>
          <meta property="og:title" content="Swalih-Portfolio" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10">#home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">#projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">#skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">#about</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15">Projects</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16">Skills</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17">About</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text20">
                Summary of expertise and experience
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21">
                Detailed projects showcasing business impact using the STAR
                method
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22">
                Skills in BI tools, Python, compliance, and more
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23">
                Background, experience, and values
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text24">View Projects</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text25">Contact Me</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text26">
                Bringing more than a decade and a half of experience in business
                analysis within the life sciences manufacturing sector, I offer
                a rich blend of knowledge and expertise to deliver meaningful
                insights and strategic solutions.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text27">
                Expert Business Analyst specializing in Life Sciences
                Manufacturing
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1639154968821-6dbc3efb8d23?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDc0NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image8Src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDcxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text28">BI Tools Proficiency</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text29">Python Proficiency</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text30">Compliance Expertise</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text31">
                Skilled in creating interactive visualizations using Power BI
                and Tableau
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text32">
                Proficient in Python for data analysis and automation
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text33">
                Experience in data governance and compliance with GMP and FDA
                regulations
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text34">View Projects</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text35">
                Explore my projects and skills to see how I can drive impact for
                your organization.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text36">
                Ready to elevate your business analysis?
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text37">Expertise in BI Tools</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text38">AI/ML Knowledge</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text39">
                Compliance with GMP and FDA Regulations
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text40">
                Proficient in using Power BI and Tableau for data visualization
                and analysis.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text41">
                Experience in implementing AI/ML solutions to drive insights and
                decision-making.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text42">
                In-depth understanding of Good Manufacturing Practices (GMP) and
                FDA regulations to ensure compliance.
              </span>
            </Fragment>
          }
        ></Features25>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text43">Initial Assessment</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text44">Implementation of BI Tools</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text45">AI/ML Integration</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text46">Ensuring Compliance</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text47">
                Conduct a thorough analysis of the current business processes
                and data infrastructure in the life sciences manufacturing
                domain.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text48">
                Utilize Power BI and Tableau to create interactive dashboards
                and reports for key stakeholders, providing actionable insights
                for decision-making.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text49">
                Implement AI/ML algorithms to optimize production processes,
                predictive maintenance, and quality control within the
                manufacturing environment.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text50">
                Ensure adherence to GMP and FDA regulations by establishing
                robust data governance frameworks and compliance protocols.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text51">
                Highly recommend their services!
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text52">
                The Business Analyst&apos;s insights and data governance
                strategies have been instrumental in streamlining our operations
                and driving efficiency. A true professional in the field!
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text53">
                Impressed by the depth of knowledge and attention to detail
                demonstrated by the Business Analyst. Their ability to navigate
                complex regulatory requirements while leveraging AI/ML
                technologies is commendable.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text54">
                Exceptional skills in data visualization and project management.
                The Business Analyst&apos;s contributions have had a tangible
                impact on our business outcomes. Truly a valuable asset to any
                team.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text55">
                Working with the Business Analyst was a game-changer for our
                organization. Their expertise in BI tools and compliance with
                regulations significantly improved our decision-making
                processes.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text56">Client Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text57">John Smith</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text58">Emily Johnson</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text59">Michael Lee</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text60">Sarah Thompson</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text61">CEO, PharmaTech Inc.</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text62">
                VP of Operations, BioPharma Co.
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text63">
                Director of Quality Assurance, MedLife Corp.
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text64">CTO, Health Innovations Ltd.</span>
            </Fragment>
          }
        ></Testimonial17>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text65">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text66">Projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text67">Skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text68">About</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text69">Contact</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text70">Terms of Use</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text71">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text72">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
