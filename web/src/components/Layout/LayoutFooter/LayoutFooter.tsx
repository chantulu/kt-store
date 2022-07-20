import SVGrenderer from 'components/SVGRenderer/SVGrenderer'
import { SettingsContext } from 'pages/[slug]'
import React from 'react'
import { LayoutMenu } from '../LayoutMenu'
import FooterHours from './FooterHours'

const socialMedias = ['facebook', 'twitter', 'instagram', 'tiktok']

export default function LayoutFooter() {
  return (
    <SettingsContext.Consumer>
      {(siteSettings: { [key: string]: any } | null) => (
        <footer className="container container-layout py-4">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-lg-start justify-content-center my-5 my-lg-0">
              <LayoutMenu className="d-flex footer-menu" />
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div>
                {siteSettings &&
                  socialMedias
                    .filter(
                      (sm) =>
                        sm in (siteSettings || {}) && siteSettings[sm] !== ''
                    )
                    .map((s) => (
                      <a
                        href={siteSettings[s]}
                        key={s}
                        className="px-lg-3 px-2"
                      >
                        <SVGrenderer icon={s} />
                      </a>
                    ))}
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center my-5 my-lg-0 footer-hours">
              <div>
                <FooterHours hours={siteSettings?.hours} />
                <div className="my-3">
                  <div>
                    {siteSettings?.addr_1}
                    <br />
                    {siteSettings?.addr_2}
                  </div>
                </div>
                <div />
              </div>
            </div>
            <p className="text-center">
              Copyright {new Date().getFullYear()} &copy; All rights reserved
            </p>
          </div>
        </footer>
      )}
    </SettingsContext.Consumer>
  )
}
