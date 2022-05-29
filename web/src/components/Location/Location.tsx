import React from 'react'
import * as S from './style'

//TODO: Pick appropiate headers (h1,h2s etc...)

type Props = {
  address: {
    line1: string
    line2: string
  }
  title: string
  placeName: string
}

//TODO: Add get direction, custom button component?

export default function Location({ address, title, placeName }: Props) {
  const zoom = 16
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <p>
        {address.line1}
        <br />
        {address.line2}
      </p>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          process.env.NEXT_PUBLIC_GOOGLEAPI_KEY
        }&q=${
          placeName ? encodeURIComponent(placeName) : ''
        }%20${encodeURIComponent(address.line1)}%20${encodeURIComponent(
          address.line2
        )}&zoom=${zoom}`}
      ></iframe>
    </S.Wrapper>
  )
}
