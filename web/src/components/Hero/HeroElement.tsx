import ButtonUnderlined from 'components/Lib/Buttons/ButtonUnderlined'
import ImageSanity from 'components/Lib/ImageSanity/ImageSanity'
import React from 'react'
import { Wrapper } from './styles'

type Props = {
  text: string
  image: any //TODO: figure out what image element sanity returns? https://nextjs.org/docs/api-reference/next/image
  hasMarketingBlock: boolean
  marketingText: string
  marketingImage: any
  heroMarketingLinkURL: string
  heroMarketingLinkText: string
  heroMarketingSubtitle: string
}

//TODO: Add the subtitle and button for the marketingblock

export default function HeroElement({
  text,
  image,
  hasMarketingBlock,
  marketingText,
  marketingImage,
  heroMarketingLinkURL,
  heroMarketingLinkText,
  heroMarketingSubtitle
}: Props) {
  return (
    <Wrapper
      className={`container ${
        !hasMarketingBlock ? 'hero-element-marketing' : ''
      }`}
      id="hero-element"
    >
      <div className={`row justify-content-between gx-5`}>
        <div
          className={`${hasMarketingBlock ? 'col-lg-6' : 'col-lg-12'} px-lg-5`}
        >
          <div className="row justify-content-around">
            <h1
              className={`mb-5 ${
                !hasMarketingBlock ? 'col-lg-3' : 'col-lg-12 center-self'
              }`}
            >
              {text}
            </h1>
            <div
              className={`mb-5 ${
                !hasMarketingBlock ? 'col-lg-5' : 'col-lg-12 center-self'
              }`}
            >
              <ImageSanity
                src={image}
                width={600}
                height={575}
                fit="crop"
                quality={85}
              />
            </div>
          </div>
        </div>
        {hasMarketingBlock && (
          <div className="col-lg-5 px-lg-5 hero-marketing">
            <ImageSanity
              src={marketingImage}
              width={600}
              height={660}
              fit="crop"
              quality={85}
            />
            <h2 className="mt-5">{marketingText}</h2>
            <p className="my-3 my-lg-4">{heroMarketingSubtitle}</p>
            <ButtonUnderlined
              text={heroMarketingLinkText}
              url={heroMarketingLinkURL}
            />
          </div>
        )}
      </div>
    </Wrapper>
  )
}
