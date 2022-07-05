import React from 'react'
import { MenuSectionType } from './productpricemenutypes'

export default function MenuSection({
  title,
  menuItemList,
  hasSizes
}: MenuSectionType) {
  return (
    <div className="menu-section">
      <div className="h1">{title}</div>
      {hasSizes && (
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <span className="menu-section-pricecol h3">Small</span>
            <span className="menu-section-pricecol mb-4 h3">Large</span>
          </div>
        </div>
      )}
      {!hasSizes && (
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-4 h3">Price</div>
        </div>
      )}
      {menuItemList.map((il) => (
        <div className="row mb-2" key={il._key}>
          <div className="col-lg-6">{il.name}</div>
          <div className="col-lg-6">
            {!hasSizes ? (
              il.price
            ) : (
              <>
                <span className="menu-section-pricecol">{il.price_sm}</span>
                <span className="menu-section-pricecol">{il.price_md}</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
