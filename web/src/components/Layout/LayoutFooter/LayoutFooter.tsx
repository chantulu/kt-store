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
        <div className="container container-layout py-4">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-start">
              <LayoutMenu className="d-flex flex-column" />
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
                      <a href={siteSettings[s]} key={s} className="px-lg-3 px-2">
                        <SVGrenderer icon={s} />
                      </a>
                    ))}
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-end">
              <div>
                <FooterHours hours={siteSettings?.hours} />
                <div>
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
              Copyright 2022 &copy; All rights reserved
            </p>
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  )
}
