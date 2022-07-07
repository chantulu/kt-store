import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import ImageSanity from 'components/Lib/ImageSanity/ImageSanity'
import { Location } from 'components/Location'
import { ProductPriceMenu } from 'components/ProductPriceMenu'
import { ProductPriceMenuType } from 'components/ProductPriceMenu/productpricemenutypes'
import { StoreHours } from 'components/StoreHours'
import { TileMenu } from 'components/TileMenu'
import { TileMenuItem } from 'components/TileMenu/TileMenu'
import { SettingsContext } from 'pages/[slug]'
import React from 'react'
import { Image2, LandingPageQuery } from '../../../LandingPage'

function isValidKey(
  value: string | number | symbol,
  object: { [key: string]: any }
): value is keyof LandingPageQuery['landingPage']['body'][number] {
  return value in object
}

type BodyItem = LandingPageQuery['landingPage']['body'][number]

const portableComponents = {
  types: {
    landingHours: ({
      value: { hoursTitle, hoursSubtitle }
    }: {
      value: LandingPageQuery['landingPage']['body'][number]
    }) => (
      <SettingsContext.Consumer>
        {(siteSettings) => (
          <StoreHours
            title={hoursTitle || ''}
            subtitle={hoursSubtitle || ''}
            hours={{
              weekdays: {
                openfrom: siteSettings?.hours.weekdaysopen,
                opento: siteSettings?.hours.weekdaysclose
              },
              saturday: {
                openfrom: siteSettings?.hours.saturdayopen,
                opento: siteSettings?.hours.saturdayclose
              },
              sunday: {
                openfrom: siteSettings?.hours.sundayopen,
                opento: siteSettings?.hours.sundayclose
              }
            }}
          />
        )}
      </SettingsContext.Consumer>
    ),
    tileMenu: ({ value }: { value: BodyItem }) => {
      const tiles: any[] = Object.keys(value)
        .filter((k) => k.substring(0, 2) === 'tm')
        .reduce<any[]>((pv, cv: string) => {
          if (isValidKey(cv, value)) {
            return pv.concat(value[cv])
          }
          return pv
        }, [])
      return (
        <TileMenu
          tiles={
            (tiles as unknown) as [
              TileMenuItem,
              TileMenuItem,
              TileMenuItem,
              TileMenuItem
            ]
          }
        />
      )
    },
    location: ({ value: { title } }: { value: BodyItem }) => {
      return (
        <SettingsContext.Consumer>
          {(siteSettings) => (
            <Location
              address={{
                line1: siteSettings?.addr_1,
                line2: siteSettings?.addr_2
              }}
              title={title}
              placeName="KTs"
            />
          )}
        </SettingsContext.Consumer>
      )
    },
    productpricemenu: ({ value }: { value: ProductPriceMenuType }) => {
      return <ProductPriceMenu value={value} />
    },
    image: ({ value }: { value: Image2 }) => {
      return (
        <ImageSanity
          src={value.asset}
          width={500}
          height={300}
          className="my-5"
          quality={100}
        />
      )
    }
  }
}

export default portableComponents
