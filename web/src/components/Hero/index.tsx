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

export default function index({
  text,
  image,
  hasMarketingBlock,
  marketingText,
  marketingImage
}: Props) {
  return (
    <Wrapper>
      <div>
        <h1>{text}</h1>
        <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
      </div>
      {hasMarketingBlock && (
        <div>
          <h2>{marketingText}</h2>
          <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
        </div>
      )}
    </Wrapper>
  )
}
