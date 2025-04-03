import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CTA1 = (props) => {
  return (
    <>
      <div className="cta1-container thq-section-padding">
        <div className="cta1-max-width thq-section-max-width">
          <div className="cta1-content">
            <h2 className="cta1-heading1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta1-text4">
                    Unlock the Power of Data in Life Sciences Manufacturing
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="cta1-content1 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta1-text1">
                    Choose from our range of services to optimize your business
                    processes and drive growth.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta1-actions">
              <button className="thq-button-filled cta1-button1">
                <span className="cta1-action1 thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="cta1-text3">Explore Our Services</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline cta1-button2">
                <span className="cta1-action2 thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="cta1-text2">Get in Touch</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta1-container {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .cta1-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .cta1-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .cta1-heading1 {
            text-align: center;
          }
          .cta1-content1 {
            text-align: center;
          }
          .cta1-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta1-action1 {
            text-align: center;
          }
          .cta1-action2 {
            text-align: center;
          }
          .cta1-text1 {
            display: inline-block;
          }
          .cta1-text2 {
            display: inline-block;
          }
          .cta1-text3 {
            display: inline-block;
          }
          .cta1-text4 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .cta1-actions {
              width: 100%;
              flex-direction: column;
            }
            .cta1-button1 {
              width: 100%;
            }
            .cta1-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CTA1.defaultProps = {
  content1: undefined,
  action2: undefined,
  action1: undefined,
  heading1: undefined,
}

CTA1.propTypes = {
  content1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA1
