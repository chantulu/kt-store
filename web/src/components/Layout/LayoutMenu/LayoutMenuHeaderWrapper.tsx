import Link from 'next/link'
import React from 'react'
import LayoutMenu from './LayoutMenu'

export default function HeaderWrapper() {
  return (
    <div className="container container-layout py-5 px-5" id="main-menu">
      <div className="row justify-content-between">
        <div className="col-lg-2 fw-bold">
          <Link href="/">KT Market</Link>
        </div>
        <div className="col d-flex justify-content-end">
          <LayoutMenu linkProps={{ className: 'fw-bold' }} />
        </div>
      </div>
    </div>
  )
}
