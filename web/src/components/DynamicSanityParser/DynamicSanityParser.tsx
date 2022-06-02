import React from 'react'
import { PortableText } from '@portabletext/react'
import { SiteSettings } from '../../../SiteSettings'
import portableComponents, { SettingsContext } from './portableComponents'

type Props = {
  components: any
  siteSettings: SiteSettings
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
