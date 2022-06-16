import React from 'react'
import { Wrapper } from './styles'

//TODO: Handle images
export interface TileMenuItem {
  tag: string
  title: string
  image: any
}

type Props = {
  tiles: readonly [TileMenuItem, TileMenuItem, TileMenuItem, TileMenuItem]
}

//TODO: Pick appropiate headers (h1,h2s etc...)
//TODO: add links to tiles (studio and web)
export default function TileMenu({ tiles }: Props) {
  return (
    <Wrapper className="container">
      <div className="row">
        {tiles.map((tile, i, arr) => (
          <div
            key={`${tile.tag}${tile.title}`}
            className={`col-6 col-lg-${Math.floor(12 / arr.length)}`}
          >
            <p>{tile.tag}</p>
            <p>{tile.title}</p>
            <img
              src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt="candy"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
