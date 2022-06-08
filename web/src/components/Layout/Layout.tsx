import React, { ReactNode } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutMenu } from './LayoutMenu'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-2">Logo?</div>
          <div className="col d-flex justify-content-end">
            <LayoutMenu />
          </div>
        </div>
      </div>
      {children}
      <LayoutFooter />
    </div>
  )
}
