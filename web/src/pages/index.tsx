import React from 'react'
import { LandingPageQuery } from '../../LandingPage'
import { SiteSettings } from '../../SiteSettings'
import DynamicPage from './[slug]'
import client from '../client'

export default function index({
  landingPage,
  siteSettings
}: {
  landingPage: LandingPageQuery['landingPage']
  siteSettings: SiteSettings
}) {
  return <DynamicPage landingPage={landingPage} siteSettings={siteSettings} />
}

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = 'home'
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`)
  const landingPage = await client.fetch(
    `
        *[_type == "page-landing" && slug.current == $slug][0]
      `,
    { slug }
  )
  return {
    props: {
      siteSettings,
      landingPage
    }
  }
}
