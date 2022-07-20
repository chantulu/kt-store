import React from 'react'
import { MenuSectionType } from './productpricemenutypes'

export default function MenuSection({
  title,
  menuItemList,
  hasSizes,
  hidePrice
}: MenuSectionType) {
  return (
    <div className="menu-section">
      <div className="h1">{title}</div>
      {hasSizes && (
        <div className="row gx-5">
          <div className="col-6"></div>
          <div className="col-6">
            <span className="menu-section-pricecol h3">Small</span>
            <span className="menu-section-pricecol mb-4 h3">Large</span>
          </div>
        </div>
      )}
      {!hasSizes && hidePrice !== true && (
        <div className="row gx-5">
          <div className="col-6"></div>
          <div className="col-6 mb-4 h3 menu-section-pricecol">Price</div>
        </div>
      )}
      {menuItemList.map((il) => (
        <div className="row mb-3 gx-5" key={il._key}>
          <div className="col-6">
            <div className={`fw-bold ${hidePrice && 'mt-5'}`}>{il.name}</div>
            {il.description && <div>{il.description}</div>}
          </div>
          <div className="col-6">
            {!hasSizes ? (
              <div className="fw-bold">
                {hidePrice !== true && '$'}
                {il.price}
              </div>
            ) : (
              <>
                <span className="menu-section-pricecol fw-bold">
                  $ {il.price_sm}
                </span>
                <span className="menu-section-pricecol  fw-bold">
                  $ {il.price_md}
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
