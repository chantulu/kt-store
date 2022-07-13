import ImageSanity from 'components/Lib/ImageSanity/ImageSanity'
import React from 'react'
import MenuSection from './MenuSection'
import { ProductPriceMenuType } from './productpricemenutypes'

type Props = {
  value: ProductPriceMenuType
}

export default function ProductPriceMenu({ value }: Props) {
  return (
    <div className="container product-price-menu">
      <div className="row gx-5">
        {value.image && (
          <div className="col-lg-6">
            <ImageSanity
              src={value.image}
              height={500}
              width={500}
              quality={90}
            />
          </div>
        )}
        <div className={`${value.image ? 'col-lg-6' : 'col-lg-12'}`}>
          {value.menuSection.map((ms) => (
            <MenuSection key={ms._key} {...ms} />
          ))}
        </div>
      </div>
    </div>
  )
}
