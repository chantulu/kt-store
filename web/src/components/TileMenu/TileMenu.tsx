import React from 'react'
import { Wrapper } from './styles'
import { useParallax } from 'react-scroll-parallax'
import ImageSanity from 'components/Lib/ImageSanity/ImageSanity'
import useIsMobile from 'components/Lib/useIsMobile/useIsMobile'

//TODO: Handle images
export interface TileMenuItem {
  tag: string
  title: string
  image: string
  url: string
}

type Props = {
  tiles: readonly [TileMenuItem, TileMenuItem, TileMenuItem, TileMenuItem]
}

//TODO: Pick appropiate headers (h1,h2s etc...)
//TODO: pick right order in mobile
export default function TileMenu({ tiles }: Props) {
  const isMobile = useIsMobile()
  const parallax = tiles.map((t, i) =>
    useParallax({ speed: i % 2 === 0 ? 15 : isMobile ? 15 : 0 })
  )
  return (
    <Wrapper className="container tile-menu">
      <div className="row gx-5 justify-content-center">
        {tiles.map((tile, i, arr) => (
          <a
            className={`col-10 col-sm-6 col-lg-${Math.floor(
              12 / arr.length
            )} px-lg-5`}
            ref={parallax[i].ref}
            key={`${tile.tag}${tile.title}${i}`}
            href={tile.url}
          >
            <div className={`tile-menu-tile bg-white p-4`}>
              <i className="tag">{tile.tag}</i>
              <p className="title h3">{tile.title}</p>
              <ImageSanity src={tile.image} quality={90} height={350} />
            </div>
          </a>
        ))}
      </div>
    </Wrapper>
  )
}
