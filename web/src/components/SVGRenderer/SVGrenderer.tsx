import React from 'react'
import twitter from './icons/twitter.svg'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import tiktok from './icons/tiktok.svg'

type Props = {
  icon?: string
}

export default function SVGrenderer({ icon }: Props) {
  let x = facebook
  switch (icon) {
    case 'facebook':
      break
    case 'twitter':
      x = twitter
      break
    case 'instagram':
      x = instagram
      break
    case 'tiktok':
      x = tiktok
      break
    default:
      x = facebook
      break
  }
  return <img src={x.src} alt="" />
}
