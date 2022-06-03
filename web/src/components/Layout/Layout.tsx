import React, { ReactNode } from 'react'
import { SiteSettings } from '../../../SiteSettings'
import { LayoutFooter } from './LayoutFooter'
import { LayoutMenu } from './LayoutMenu'

type Props = {
  siteSettings: SiteSettings
  children: ReactNode
}

export default function Layout({ siteSettings, children }: Props) {
  return (
    <div>
      <div>
        <div>Logo?</div>
        <LayoutMenu />
      </div>
      {children}
      <LayoutFooter />
    </div>
  )
}
