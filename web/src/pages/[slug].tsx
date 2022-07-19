import { DynamicSanityParser } from 'components/DynamicSanityParser'
import HeroElement from 'components/Hero/HeroElement'
import { Layout } from 'components/Layout'
import GetSanityImageUrl from 'components/Lib/SanityImageURL/SanityImageURL'
import SeoMetaNext from 'components/Lib/SeoMetaNext'
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
  return (
    <SettingsContext.Provider value={siteSettings}>
      <SeoMetaNext
        description={landingPage?.landingHeroElement.heroText}
        baseUrl="https://ktsmarket.com"
        image={
          landingPage?.image
            ? GetSanityImageUrl(landingPage?.image.asset).url()
            : ''
        }
        siteSettings={siteSettings}
        title={landingPage?.title}
      />
      <Layout>
        <HeroElement
          hasMarketingBlock={landingPage?.landingHeroElement.hasMarketingBlock}
          text={landingPage?.landingHeroElement.heroText}
          marketingText={landingPage?.landingHeroElement.heroMarketingText}
          image={landingPage?.landingHeroElement.heroImage}
          marketingImage={landingPage?.landingHeroElement.heroMarketingImage}
          heroMarketingLinkURL={
            landingPage?.landingHeroElement.heroMarketingLinkURL
          }
          heroMarketingLinkText={
            landingPage?.landingHeroElement.heroMarketingLinkText
          }
          heroMarketingSubtitle={
            landingPage?.landingHeroElement.heroMarketingSubtitle
          }
        ></HeroElement>
        <DynamicSanityParser components={landingPage?.body} />
      </Layout>
    </SettingsContext.Provider>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "page-landing" && defined(slug.current)][].slug.current`
  )

  // console.log(paths)

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  let { slug = '' } = context.params

  if (!context) {
    slug = 'home'
  }
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
