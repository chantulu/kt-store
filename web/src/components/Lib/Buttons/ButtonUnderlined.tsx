import React from 'react'
import Link from 'next/link'

type Props = {
  text: string
  url: string
  target?: '_self' | '_blank'
}

export default function ButtonUnderlined({ text, url, target }: Props) {
  if (url.substring(0, 4) === 'http') {
    return (
      <a href={url} className="btn-underlined" target={target}>
        {text}
      </a>
    )
  }
  return (
    <Link href={url} passHref target={target}>
      <a className="btn-underlined">{text}</a>
    </Link>
  )
}
