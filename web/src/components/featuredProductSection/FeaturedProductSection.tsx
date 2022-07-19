import ColoredHeader from 'components/Lib/ColoredHeader/ColoredHeader'
import ImageSanityStatic from 'components/Lib/ImageSanity/ImageSanityStatic'
import React from 'react'

export interface FeaturedProductSecitonValue {
  _key: string
  _type: string
  image: Image
  sectionName: string
  sectionSubtitle: string
  text: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export default function FeaturedProductSection({
  image,
  sectionName,
  sectionSubtitle,
  text
}: FeaturedProductSecitonValue) {
  return (
    <div
      className="container market-section"
      // id={text.replace(/\s/g, '-').toLowerCase()}
    >
      <div className="row">
        <div className="col-lg-6 market-section-img">
          <ImageSanityStatic src={image} width={700} height={650} />
        </div>
        <div className="col-lg-6 market-seciton-body">
          <h2 className="h1 mb-5">
            <ColoredHeader text={sectionName} />
          </h2>
          <h3 className="mb-4">
            <i>{sectionSubtitle}</i>
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
