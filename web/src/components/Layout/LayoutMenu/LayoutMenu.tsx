import { SettingsContext } from 'pages/[slug]'
import React from 'react'

export default function LayoutMenu() {
  return (
    <SettingsContext.Consumer>
      {(siteSettings) => (
        <div>
          {siteSettings?.menu.map((menuItem) => (
            <a key={menuItem._key} href={menuItem.menuLink}>
              {menuItem.menuText}
            </a>
          ))}
        </div>
      )}
    </SettingsContext.Consumer>
  )
}
