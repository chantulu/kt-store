import React from 'react'
import { PortableText } from '@portabletext/react'
import { SiteSettings } from '../../../SiteSettings'
import portableComponents from './portableComponents'

type Props = {
  components: any
}

export default function DynamicSanityParser({ components }: Props) {
  return <PortableText value={components} components={portableComponents} />
}
