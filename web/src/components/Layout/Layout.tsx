import React, { ReactNode } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutMenu } from './LayoutMenu'
import HeaderWrapper from './LayoutMenu/LayoutMenuHeaderWrapper'
import { ParallaxProvider } from 'react-scroll-parallax'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div id="layout">
      <HeaderWrapper />
      <ParallaxProvider>
        <div className="page-body">{children}</div>
      </ParallaxProvider>
      <LayoutFooter />
    </div>
  )
}
