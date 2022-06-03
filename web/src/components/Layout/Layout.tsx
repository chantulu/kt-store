import React, { ReactNode } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutMenu } from './LayoutMenu'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
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
