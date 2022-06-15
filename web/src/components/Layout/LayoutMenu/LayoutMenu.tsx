import { SettingsContext } from 'pages/[slug]'
import React from 'react'

type Props = {
  className?: string
  linkProps?: {
    className?: string
  } 
}

export default function LayoutMenu({className, linkProps}: Props) {
  return (
    <SettingsContext.Consumer>
      {(siteSettings) => (
        <div className={className || ''}>
          {siteSettings?.menu.map((menuItem) => (
            <a key={menuItem._key} href={menuItem.menuLink} className={`px-3 color-black ${linkProps?.className || ''}`}>
              {menuItem.menuText}
            </a>
          ))}
        </div>
      )}
    </SettingsContext.Consumer>
  )
}
