import React from 'react'

type Props = { text: string }

export default function ColoredHeader({ text }: Props) {
  const [x, y] = text.split(' ').reduce<[string[], string[]]>(
    (pv, cv, i) => {
      if (i === 0) {
        pv[0].push(cv)
      } else if (cv.length < 3 && pv[1].length === 0) {
        pv[0].push(cv)
      } else {
        pv[1].push(cv)
      }
      return pv
    },
    [[], []]
  )
  return (
    <span className="c-header">
      {x.length > 0 && <span>{x.join(' ')}</span>}{' '}
      {y.length > 0 && <span className="c-header-color">{y.join(' ')}</span>}
    </span>
  )
}
