import React from 'react'
import Link from 'next/link'

type Props = {
  text: string
  url: string
}

export default function ButtonUnderlined({ text, url }: Props) {
  if (text.substring(0, 4) == 'http') {
    return (
      <a href={url} className="btn-underlined">
        {text}
      </a>
    )
  }
  return (
    <Link href={url} passHref>
      <a className="btn-underlined">{text}</a>
    </Link>
  )
}
