import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Swalih-Portfolio</title>
          <meta property="og:title" content="About - Swalih-Portfolio" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="about-text10">#home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="about-text11">#projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-text12">#skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-text13">#about</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="about-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="about-text15">Projects</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="about-text16">Skills</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="about-text17">About</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="about-text18">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="about-text19">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="about-text20">
                Summary of expertise and experience
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="about-text21">
                Detailed projects showcasing business impact using the STAR
                method
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="about-text22">
                Skills in BI tools, Python, compliance, and more
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="about-text23">
                Background, experience, and values
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero8
          action1={
            <Fragment>
              <span className="about-text24">Learn More</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="about-text25">Explore Services</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text26">
                Showcasing expertise in BI tools, Python, compliance, and more
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text27">
                Welcome to the World of Life Sciences Manufacturing Analysis
              </span>
            </Fragment>
          }
        ></Hero8>
        <Stats2
          stat1={
            <Fragment>
              <span className="about-text28">
                Business Analyst Specializing in Life Sciences Manufacturing
              </span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="about-text29">
                Skills in BI Tools, Python, Compliance, and More
              </span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="about-text30">Project Showcases</span>
            </Fragment>
          }
          stat4={
            <Fragment>
              <span className="about-text31">
                AI/ML Implementation Experience
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text32">Customer Feedback</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-text33">
                Business improvements emphasized with numbers to increase
                creadibility
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text34">Expertise and Experience</span>
            </Fragment>
          }
          stat1Description={
            <Fragment>
              <span className="about-text35">
                Bringing in-depth knowledge and experience in the life sciences
                manufacturing industry to drive impactful insights and
                strategies.
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="about-text36">
                Proficient in utilizing various BI tools, Python programming,
                ensuring compliance with GMP and FDA regulations, and more to
                deliver high-quality analytical solutions.
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="about-text37">
                Demonstrating successful project implementations and outcomes in
                the life sciences manufacturing sector.
              </span>
            </Fragment>
          }
          stat4Description={
            <Fragment>
              <span className="about-text38">
                Hands-on experience in implementing artificial intelligence and
                machine learning solutions to enhance operational efficiency and
                decision-making processes.
              </span>
            </Fragment>
          }
        ></Stats2>
        <Logos1
          heading1={
            <Fragment>
              <span className="about-text39">
                Trusted by the world&apos;s best companies social proof to build
                credibility
              </span>
            </Fragment>
          }
        ></Logos1>
        <Features1
          slogan={
            <Fragment>
              <span className="about-text40">
                Driving Impactful Insights and Strategies
              </span>
            </Fragment>
          }
          mainAction={
            <Fragment>
              <span className="about-text41">Project Showcases</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="about-text42">Key Features</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="about-text43">Expertise in BI Tools</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="about-text44">Python Proficiency</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="about-text45">
                Compliance with GMP and FDA Regulations
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="about-text46">Pricing Plans</span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="about-text47">
                Explore the key features that set our Business Analyst apart in
                the Life Sciences Manufacturing industry.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="about-text48">
                Utilize advanced Business Intelligence tools to extract valuable
                insights from data.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="about-text49">
                Harness the power of Python programming for data analysis and
                automation.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="about-text50">
                Ensure adherence to Good Manufacturing Practices (GMP) and FDA
                regulations for quality assurance.
              </span>
            </Fragment>
          }
        ></Features1>
        <Team1
          member1={
            <Fragment>
              <span className="about-text51">John Doe</span>
            </Fragment>
          }
          member2={
            <Fragment>
              <span className="about-text52">Jane Smith</span>
            </Fragment>
          }
          member3={
            <Fragment>
              <span className="about-text53">Michael Johnson</span>
            </Fragment>
          }
          member4={
            <Fragment>
              <span className="about-text54">Emily Brown</span>
            </Fragment>
          }
          member5={
            <Fragment>
              <span className="about-text55">Full name</span>
            </Fragment>
          }
          member6={
            <Fragment>
              <span className="about-text56">Full name</span>
            </Fragment>
          }
          member7={
            <Fragment>
              <span className="about-text57">Full name</span>
            </Fragment>
          }
          member8={
            <Fragment>
              <span className="about-text58">Full name</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text59">Join Our Team Today!</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-text60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="about-text61">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text62">Meet Our Expert Team</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="about-text63">We’re hiring!</span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="about-text64">Business Analyst</span>
            </Fragment>
          }
          member2Job={
            <Fragment>
              <span className="about-text65">Data Scientist</span>
            </Fragment>
          }
          member3Job={
            <Fragment>
              <span className="about-text66">Compliance Specialist</span>
            </Fragment>
          }
          member4Job={
            <Fragment>
              <span className="about-text67">AI/ML Specialist</span>
            </Fragment>
          }
          member5Job={
            <Fragment>
              <span className="about-text68">Job title</span>
            </Fragment>
          }
          member6Job={
            <Fragment>
              <span className="about-text69">Job title</span>
            </Fragment>
          }
          member7Job={
            <Fragment>
              <span className="about-text70">Job title</span>
            </Fragment>
          }
          member8Job={
            <Fragment>
              <span className="about-text71">Job title</span>
            </Fragment>
          }
          actionContent={
            <Fragment>
              <span className="about-text72">Open positions</span>
            </Fragment>
          }
          member1Content={
            <Fragment>
              <span className="about-text73">
                John is a seasoned Business Analyst with a strong background in
                Life Sciences Manufacturing. He excels in leveraging data
                analytics to drive impactful insights and strategies for our
                clients.
              </span>
            </Fragment>
          }
          member2Content={
            <Fragment>
              <span className="about-text74">
                Jane is a skilled Data Scientist proficient in Python and BI
                tools. She specializes in developing advanced analytics
                solutions tailored to the unique needs of the life sciences
                industry.
              </span>
            </Fragment>
          }
          member3Content={
            <Fragment>
              <span className="about-text75">
                Michael brings expertise in compliance with GMP and FDA
                regulations, ensuring that our clients meet industry standards
                and regulations effectively.
              </span>
            </Fragment>
          }
          member4Content={
            <Fragment>
              <span className="about-text76">
                Emily is an AI/ML expert who focuses on implementing
                cutting-edge technologies to enhance decision-making processes
                and operational efficiency in life sciences manufacturing.
              </span>
            </Fragment>
          }
          member5Content={
            <Fragment>
              <span className="about-text77">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          member6Content={
            <Fragment>
              <span className="about-text78">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          member7Content={
            <Fragment>
              <span className="about-text79">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          member8Content={
            <Fragment>
              <span className="about-text80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
        ></Team1>
        <Footer4
          link1={
            <Fragment>
              <span className="about-text81">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="about-text82">Projects</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-text83">Skills</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-text84">About</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="about-text85">Contact</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="about-text86">Terms of Use</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="about-text87">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="about-text88">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-text10 {
            display: inline-block;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
          }
          .about-text13 {
            display: inline-block;
          }
          .about-text14 {
            display: inline-block;
          }
          .about-text15 {
            display: inline-block;
          }
          .about-text16 {
            display: inline-block;
          }
          .about-text17 {
            display: inline-block;
          }
          .about-text18 {
            display: inline-block;
          }
          .about-text19 {
            display: inline-block;
          }
          .about-text20 {
            display: inline-block;
          }
          .about-text21 {
            display: inline-block;
          }
          .about-text22 {
            display: inline-block;
          }
          .about-text23 {
            display: inline-block;
          }
          .about-text24 {
            display: inline-block;
          }
          .about-text25 {
            display: inline-block;
          }
          .about-text26 {
            display: inline-block;
          }
          .about-text27 {
            display: inline-block;
          }
          .about-text28 {
            display: inline-block;
          }
          .about-text29 {
            display: inline-block;
          }
          .about-text30 {
            display: inline-block;
          }
          .about-text31 {
            display: inline-block;
          }
          .about-text32 {
            display: inline-block;
          }
          .about-text33 {
            display: inline-block;
          }
          .about-text34 {
            display: inline-block;
          }
          .about-text35 {
            display: inline-block;
          }
          .about-text36 {
            display: inline-block;
          }
          .about-text37 {
            display: inline-block;
          }
          .about-text38 {
            display: inline-block;
          }
          .about-text39 {
            display: inline-block;
          }
          .about-text40 {
            display: inline-block;
          }
          .about-text41 {
            display: inline-block;
          }
          .about-text42 {
            display: inline-block;
          }
          .about-text43 {
            display: inline-block;
          }
          .about-text44 {
            display: inline-block;
          }
          .about-text45 {
            display: inline-block;
          }
          .about-text46 {
            display: inline-block;
          }
          .about-text47 {
            display: inline-block;
          }
          .about-text48 {
            display: inline-block;
          }
          .about-text49 {
            display: inline-block;
          }
          .about-text50 {
            display: inline-block;
          }
          .about-text51 {
            display: inline-block;
          }
          .about-text52 {
            display: inline-block;
          }
          .about-text53 {
            display: inline-block;
          }
          .about-text54 {
            display: inline-block;
          }
          .about-text55 {
            display: inline-block;
          }
          .about-text56 {
            display: inline-block;
          }
          .about-text57 {
            display: inline-block;
          }
          .about-text58 {
            display: inline-block;
          }
          .about-text59 {
            display: inline-block;
          }
          .about-text60 {
            display: inline-block;
          }
          .about-text61 {
            display: inline-block;
          }
          .about-text62 {
            display: inline-block;
          }
          .about-text63 {
            display: inline-block;
          }
          .about-text64 {
            display: inline-block;
          }
          .about-text65 {
            display: inline-block;
          }
          .about-text66 {
            display: inline-block;
          }
          .about-text67 {
            display: inline-block;
          }
          .about-text68 {
            display: inline-block;
          }
          .about-text69 {
            display: inline-block;
          }
          .about-text70 {
            display: inline-block;
          }
          .about-text71 {
            display: inline-block;
          }
          .about-text72 {
            display: inline-block;
          }
          .about-text73 {
            display: inline-block;
          }
          .about-text74 {
            display: inline-block;
          }
          .about-text75 {
            display: inline-block;
          }
          .about-text76 {
            display: inline-block;
          }
          .about-text77 {
            display: inline-block;
          }
          .about-text78 {
            display: inline-block;
          }
          .about-text79 {
            display: inline-block;
          }
          .about-text80 {
            display: inline-block;
          }
          .about-text81 {
            display: inline-block;
          }
          .about-text82 {
            display: inline-block;
          }
          .about-text83 {
            display: inline-block;
          }
          .about-text84 {
            display: inline-block;
          }
          .about-text85 {
            display: inline-block;
          }
          .about-text86 {
            display: inline-block;
          }
          .about-text87 {
            display: inline-block;
          }
          .about-text88 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default About
