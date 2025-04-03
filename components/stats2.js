import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats2 = (props) => {
  return (
    <>
      <div className="stats2-container1 thq-section-padding">
        <div className="stats2-max-width thq-section-max-width">
          <div className="stats2-container2 thq-flex-column">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-1-1 stats2-image"
            />
          </div>
          <div className="stats2-container3 thq-flex-column">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats2-text30">Customer Feedback</span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats2-text21">
                    Expertise and Experience
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="stats2-text29">
                    Business improvements emphasized with numbers to increase
                    creadibility
                  </span>
                </Fragment>
              )}
            </p>
            <div className="stats2-container4 thq-grid-2">
              <div className="stats2-container5">
                <h2 className="thq-heading-2">
                  {props.stat1 ?? (
                    <Fragment>
                      <span className="stats2-text27">
                        Business Analyst Specializing in Life Sciences
                        Manufacturing
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat1Description ?? (
                    <Fragment>
                      <span className="stats2-text31">
                        Bringing in-depth knowledge and experience in the life
                        sciences manufacturing industry to drive impactful
                        insights and strategies.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats2-container6">
                <h2 className="thq-heading-2">
                  {props.stat2 ?? (
                    <Fragment>
                      <span className="stats2-text26">
                        Skills in BI Tools, Python, Compliance, and More
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat2Description ?? (
                    <Fragment>
                      <span className="stats2-text25">
                        Proficient in utilizing various BI tools, Python
                        programming, ensuring compliance with GMP and FDA
                        regulations, and more to deliver high-quality analytical
                        solutions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="stats2-container7 thq-grid-2">
              <div className="stats2-container8">
                <h2 className="thq-heading-2">
                  {props.stat3 ?? (
                    <Fragment>
                      <span className="stats2-text23">Project Showcases</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat3Description ?? (
                    <Fragment>
                      <span className="stats2-text28">
                        Demonstrating successful project implementations and
                        outcomes in the life sciences manufacturing sector.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats2-container9">
                <h2 className="thq-heading-2">
                  {props.stat4 ?? (
                    <Fragment>
                      <span className="stats2-text24">
                        AI/ML Implementation Experience
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat4Description ?? (
                    <Fragment>
                      <span className="stats2-text22">
                        Hands-on experience in implementing artificial
                        intelligence and machine learning solutions to enhance
                        operational efficiency and decision-making processes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats2-container1 {
            width: 100%;
            flex-direction: column;
          }
          .stats2-max-width {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .stats2-container2 {
            max-width: 50%;
          }
          .stats2-container3 {
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats2-container4 {
            width: 100%;
          }
          .stats2-container5 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container6 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container7 {
            width: 100%;
          }
          .stats2-container8 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container9 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-text21 {
            display: inline-block;
          }
          .stats2-text22 {
            display: inline-block;
          }
          .stats2-text23 {
            display: inline-block;
          }
          .stats2-text24 {
            display: inline-block;
          }
          .stats2-text25 {
            display: inline-block;
          }
          .stats2-text26 {
            display: inline-block;
          }
          .stats2-text27 {
            display: inline-block;
          }
          .stats2-text28 {
            display: inline-block;
          }
          .stats2-text29 {
            display: inline-block;
          }
          .stats2-text30 {
            display: inline-block;
          }
          .stats2-text31 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats2-max-width {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats2-container2 {
              width: 100%;
              max-width: 100%;
            }
            .stats2-container3 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2.defaultProps = {
  heading1: undefined,
  stat4Description: undefined,
  stat3: undefined,
  stat4: undefined,
  stat2Description: undefined,
  stat2: undefined,
  stat1: undefined,
  stat3Description: undefined,
  image1Alt: 'image',
  content2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1580835916901-40770720c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  stat1Description: undefined,
}

Stats2.propTypes = {
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat3: PropTypes.element,
  stat4: PropTypes.element,
  stat2Description: PropTypes.element,
  stat2: PropTypes.element,
  stat1: PropTypes.element,
  stat3Description: PropTypes.element,
  image1Alt: PropTypes.string,
  content2: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  stat1Description: PropTypes.element,
}

export default Stats2
