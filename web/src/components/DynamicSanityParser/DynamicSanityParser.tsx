import React, { memo, useMemo } from 'react'
import { PortableText } from '@portabletext/react'
import { StoreHours } from 'components/StoreHours'
import { LandingPageQuery } from '../../../LandingPage'
import { SiteSettings } from '../../../SiteSettings'

type Props = {
  components: any
  siteSettings: SiteSettings
}

const SettingsContext = React.createContext<SiteSettings | null>(null)

const portableComponents = {
  types: {
    landingHours: ({
      hoursTitle,
      hoursSubtitle
    }: LandingPageQuery['landingPage']['body'][number]) => (
      <SettingsContext.Consumer>
        {(siteSettings) => (
          <StoreHours
            title={hoursTitle}
            subtitle={hoursSubtitle}
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
    )
  }
}

export default function DynamicSanityParser({
  components,
  siteSettings
}: Props) {
  return (
    <SettingsContext.Provider value={siteSettings}>
      <PortableText value={components} components={portableComponents} />
    </SettingsContext.Provider>
  )
}
