import React, { CSSProperties } from 'react'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import GetSanityImageUrl from '../SanityImageURL/SanityImageURL'

type Props = {
  src: SanityImageSource
  width?: number
  height?: number
  quality?: number
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
  className?: string
  style?: CSSProperties
}

const urlBuilder = ({ src, width, height, quality, fit = 'fill' }: Props) => {
  try {
    let i = GetSanityImageUrl(src)
    if (typeof width === 'number') {
      i = i.width(width)
    }
    if (typeof height === 'number') {
      i = i.height(height)
    }
    if (typeof quality === 'number' && quality > 0 && quality <= 100) {
      i = i.quality(quality < 85 ? Math.round(quality * 1.1) : quality)
    }
    if (typeof fit === 'string') {
      i = i.fit(fit)
    }
    return i.url()
  } catch {
    return ''
  }
}

export default function ImageSanityStatic(props: Props) {
  const url = urlBuilder({ ...props })
  if (!url) return null
  return (
    <img
      src={url}
      style={{
        width: '100%',
        minHeight: '250px',
        objectFit: 'cover',
        maxHeight: '625px',
        height: '100%'
      }}
    />
  )
}
