import React from 'react'
import { MenuSectionType } from './productpricemenutypes'

export default function MenuSection({ title, menuItemList }: MenuSectionType) {
  return (
    <div className="menu-section">
      <div className="h3">{title}</div>
    </div>
  )
}
