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
    <Wrapper className="container">
      <div className="row">
        <div className={`${hasMarketingBlock ? 'col-lg-6' : 'col-lg-12'}`}>
          <h1>{text}</h1>
          <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
        </div>
        {hasMarketingBlock && (
          <div className="col-lg-6">
            <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
            <h2>{marketingText}</h2>
            <p>todo:  subtitle</p>
            <p>BUTTON</p>
          </div>
        )}
      </div>
    </Wrapper>
  )
}
