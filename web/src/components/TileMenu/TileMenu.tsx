import React from 'react'
import { Wrapper } from './styles'
import { useParallax } from 'react-scroll-parallax'

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
//TODO: pick right order in mobile
export default function TileMenu({ tiles }: Props) {
  const parallax = tiles.map((t, i) =>
    useParallax({ speed: i % 2 === 0 ? 15 : 0 })
  )
  return (
    <Wrapper className="container tile-menu">
      <div className="row gx-5">
        {tiles.map((tile, i, arr) => (
          <div
            className={`col-6 col-lg-${Math.floor(12 / arr.length)} px-lg-5`}
            ref={parallax[i].ref}
          >
            <div
              key={`${tile.tag}${tile.title}${i}`}
              className={`tile-menu-tile bg-white p-4`}
            >
              <i className="tag">{tile.tag}</i>
              <p className="title h3">{tile.title}</p>
              <img
                src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                alt="candy"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
