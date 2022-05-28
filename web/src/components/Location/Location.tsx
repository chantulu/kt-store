import React, { ReactElement, ReactNode, useEffect, useRef } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import * as S from './style'
import Marker from './Marker'
import MapComponent from './MapComponent'

//TODO: Pick appropiate headers (h1,h2s etc...)

type Props = {
  address: {
    line1: string
    line2: string
  }
  latlng: google.maps.LatLng
  title: string
}

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return null
}

//TODO: Add get direction, custom button component?
//TODO: extract api key into custom env variable

export default function Location({ address, title, latlng }: Props) {
  const zoom = 16
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>
        {address.line1}
        <br></br>
        {address.line2}
      </p>
      <Wrapper apiKey="AIzaSyBj0UV4hrkm5K8WEARGXQD6gku6vkn1aC8" render={render}>
        <MapComponent center={latlng} zoom={zoom}>
          <Marker position={latlng} />
        </MapComponent>
      </Wrapper>
    </S.Wrapper>
  )
}
