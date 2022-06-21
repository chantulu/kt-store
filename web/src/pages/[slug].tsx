import { DynamicSanityParser } from 'components/DynamicSanityParser'
import HeroElement from 'components/Hero/HeroElement'
import { Layout } from 'components/Layout'
import { createContext, ReactElement } from 'react'
import { LandingPageQuery } from '../../LandingPage'
import { SiteSettings } from '../../SiteSettings'
import client from '../client'

export const SettingsContext = createContext<SiteSettings | null>(null)

const Page = ({
  landingPage,
  siteSettings
}: {
  landingPage: LandingPageQuery['landingPage']
  siteSettings: SiteSettings
}): ReactElement => {
  console.log(landingPage)
  return (
    <SettingsContext.Provider value={siteSettings}>
      <Layout>
        <HeroElement
          hasMarketingBlock={landingPage.landingHeroElement.hasMarketingBlock}
          text={landingPage.landingHeroElement.heroText}
          marketingText={landingPage.landingHeroElement.heroMarketingText}
          image={landingPage.landingHeroElement.heroImage}
          marketingImage={landingPage.landingHeroElement.heroMarketingImage}
        ></HeroElement>
        <DynamicSanityParser components={landingPage.body} />
      </Layout>
    </SettingsContext.Provider>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "page-landing" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
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

export default Page
