import ButtonUnderlined from 'components/Lib/Buttons/ButtonUnderlined'
import ColoredHeader from 'components/Lib/ColoredHeader/ColoredHeader'
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
    <S.Wrapper className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="h1">
            <ColoredHeader text={title} />
          </h2>
          <p>
            {address.line1}
            <br />
            {address.line2}
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <ButtonUnderlined
            url={`https://maps.google.com/?q=${encodeURIComponent(
              address.line1
            )}%20${encodeURIComponent(address.line2)}`}
            text="get directions"
            target="_blank"
          />
        </div>
      </div>
      <iframe
        height="450"
        style={{ border: 0, width: '100%' }}
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
