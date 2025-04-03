import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList1 = (props) => {
  return (
    <>
      <div className="content-list1-container thq-section-padding">
        <div className="content-list1-max-width thq-section-max-width">
          <div className="content-list1-content thq-flex-column">
            <ul className="content-list1-ul thq-flex-column">
              <li className="list-item thq-flex-column">
                <h2 className="content-list1-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list1-text14">
                        About the Business Analyst
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list1-text15">
                        With a specialization in Life Sciences Manufacturing,
                        our Business Analyst brings a wealth of experience and
                        expertise to the table. From data visualization to
                        compliance and AI/ML implementation, we offer a
                        comprehensive range of services tailored to meet your
                        specific needs.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="content-list1-text13">
                        Skills and Expertise
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="content-list1-text16">
                        Our Business Analyst is proficient in a variety of BI
                        tools such as Power BI and Tableau, as well as Python
                        programming. With a deep understanding of compliance
                        requirements in the Life Sciences industry and knowledge
                        in AI/ML technologies, we are well-equipped to handle
                        complex projects.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading3 ?? (
                    <Fragment>
                      <span className="content-list1-text20">
                        Detailed Projects Showcase
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="content-list1-text21">
                        Explore our portfolio of detailed projects that
                        highlight our capabilities in data visualization,
                        compliance solutions, and AI/ML implementation. Each
                        project demonstrates our commitment to delivering
                        high-quality results for our clients.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading4 ?? (
                    <Fragment>
                      <span className="content-list1-text10">
                        Pricing Plans
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="content-list1-text11">
                        Choose from different pricing plans tailored to your
                        specific needs. Whether you require data visualization
                        services, compliance solutions, or AI/ML implementation,
                        we have flexible pricing options to suit your budget and
                        requirements.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading5 ?? (
                    <Fragment>
                      <span className="content-list1-text19">Get in Touch</span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="content-list1-text18">
                        Ready to take your Life Sciences Manufacturing projects
                        to the next level? Contact us today to discuss how our
                        Business Analyst can help drive success for your
                        business. We look forward to partnering with you!
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading6 ?? (
                    <Fragment>
                      <span className="content-list1-text17">
                        Client Testimonials
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content6 ?? (
                    <Fragment>
                      <span className="content-list1-text12">
                        Read what our clients have to say about their experience
                        working with our Business Analyst. From improved
                        efficiency to innovative solutions, our clients trust us
                        to deliver exceptional results time and time again.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list1-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list1-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list1-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list1-ul {
            align-items: flex-start;
          }
          .content-list1-heading1 {
            align-self: flex-start;
          }
          .content-list1-text10 {
            display: inline-block;
          }
          .content-list1-text11 {
            display: inline-block;
          }
          .content-list1-text12 {
            display: inline-block;
          }
          .content-list1-text13 {
            display: inline-block;
          }
          .content-list1-text14 {
            display: inline-block;
          }
          .content-list1-text15 {
            display: inline-block;
          }
          .content-list1-text16 {
            display: inline-block;
          }
          .content-list1-text17 {
            display: inline-block;
          }
          .content-list1-text18 {
            display: inline-block;
          }
          .content-list1-text19 {
            display: inline-block;
          }
          .content-list1-text20 {
            display: inline-block;
          }
          .content-list1-text21 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

ContentList1.defaultProps = {
  heading4: undefined,
  content4: undefined,
  content6: undefined,
  heading2: undefined,
  heading1: undefined,
  content1: undefined,
  content2: undefined,
  heading6: undefined,
  content5: undefined,
  heading5: undefined,
  heading3: undefined,
  content3: undefined,
}

ContentList1.propTypes = {
  heading4: PropTypes.element,
  content4: PropTypes.element,
  content6: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  heading6: PropTypes.element,
  content5: PropTypes.element,
  heading5: PropTypes.element,
  heading3: PropTypes.element,
  content3: PropTypes.element,
}

export default ContentList1
