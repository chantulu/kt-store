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
        <div>
          <LayoutMenu />
          <div>
            {siteSettings &&
              socialMedias
                .filter(
                  (sm) => sm in (siteSettings || {}) && siteSettings[sm] !== ''
                )
                .map((s) => (
                  <a href={siteSettings[s]} key={s}>
                    <SVGrenderer icon={s} />
                  </a>
                ))}
          </div>
          <FooterHours hours={siteSettings?.hours} />
          <div>
            <div>
              {siteSettings?.addr_1}
              <br />
              {siteSettings?.addr_2}
            </div>
          </div>
          <div />
          <div>Copyright 2022 &copy; All rights reserved</div>
        </div>
      )}
    </SettingsContext.Consumer>
  )
}
