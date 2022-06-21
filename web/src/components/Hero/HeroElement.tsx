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
}

//TODO: Add the subtitle and button for the marketingblock

export default function HeroElement({
  text,
  image,
  hasMarketingBlock,
  marketingText,
  marketingImage
}: Props) {
  return (
    <Wrapper className="container" id="hero-element">
      <div className="row justify-content-between gx-5">
        <div
          className={`${hasMarketingBlock ? 'col-lg-6' : 'col-lg-12'} px-lg-5`}
        >
          <h1 className="center-self mb-5">{text}</h1>
          <ImageSanity
            src={image}
            width={600}
            height={575}
            fit="crop"
            quality={85}
          />
        </div>
        {hasMarketingBlock && (
          <div className="col-lg-5 px-lg-5">
            <ImageSanity
              src={marketingImage}
              width={600}
              height={660}
              fit="crop"
              quality={85}
            />
            <h2 className="mt-5">{marketingText}</h2>
            <p>todo: subtitle</p>
            <ButtonUnderlined text="button" url="/url" />
          </div>
        )}
      </div>
    </Wrapper>
  )
}
