import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact7 = (props) => {
  return (
    <>
      <div className="contact7-container1 thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content1 thq-flex-row">
            <div className="contact7-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact7-text19">Contact Us</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact7-text21">
                      businessanalyst@lifesciencesmanufacturing.com
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact7-content3 thq-flex-row">
            <div className="contact7-container2">
              <img
                alt={props.location1ImgAlt}
                src={props.location1ImgSrc}
                className="contact7-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text12 thq-heading-3">
                {props.location1 ?? (
                  <Fragment>
                    <span className="contact7-text17">Email</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location1Description ?? (
                  <Fragment>
                    <span className="contact7-text18">
                      Reach out to us via email for inquiries or to schedule a
                      consultation.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="contact7-container4">
              <img
                alt={props.location2ImgAlt}
                src={props.location2ImgSrc}
                className="contact7-image2 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text14 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact7-text20">Phone</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location2Description ?? (
                  <Fragment>
                    <span className="contact7-text16">
                      Give us a call during business hours for immediate
                      assistance.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact7-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .contact7-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image1 {
            object-fit: cover;
          }
          .contact7-text12 {
            text-align: center;
          }
          .contact7-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image2 {
            object-fit: cover;
          }
          .contact7-text14 {
            text-align: center;
          }
          .contact7-container5 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-text16 {
            display: inline-block;
          }
          .contact7-text17 {
            display: inline-block;
          }
          .contact7-text18 {
            display: inline-block;
          }
          .contact7-text19 {
            display: inline-block;
          }
          .contact7-text20 {
            display: inline-block;
          }
          .contact7-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact7-content3 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contact7-image1 {
              width: 100%;
            }
            .contact7-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  location2Description: undefined,
  location1: undefined,
  location1ImgAlt: 'Email Icon',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1532178324009-6b6adeca1741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location2: undefined,
  content1: undefined,
  location2ImgAlt: 'Phone Icon',
}

Contact7.propTypes = {
  location2Description: PropTypes.element,
  location1: PropTypes.element,
  location1ImgAlt: PropTypes.string,
  location2ImgSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  heading1: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location2ImgAlt: PropTypes.string,
}

export default Contact7
