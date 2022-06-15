import React, { ReactNode } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutMenu } from './LayoutMenu'
import HeaderWrapper from './LayoutMenu/LayoutMenuHeaderWrapper'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div id="layout">
      <HeaderWrapper />
      <div className="page-body">{children}</div>
      <LayoutFooter />
    </div>
  )
}
