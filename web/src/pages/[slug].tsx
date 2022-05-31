import { DynamicSanityParser } from 'components/DynamicSanityParser'
import HeroElement from 'components/Hero/HeroElement'
import { ReactElement } from 'react'
import { LandingPageQuery } from '../../LandingPage'
import { SiteSettings } from '../../SiteSettings'
import client from '../client'

const Page = ({
  landingPage,
  siteSettings
}: {
  landingPage: LandingPageQuery['landingPage']
  siteSettings: SiteSettings
}): ReactElement => {
  return (
    <div>
      <HeroElement
        hasMarketingBlock={landingPage.landingHeroElement.hasMarketingBlock}
        text={landingPage.landingHeroElement.heroText}
        marketingText={landingPage.landingHeroElement.heroMarketingText}
        image=""
        marketingImage=""
      ></HeroElement>
      <DynamicSanityParser
        components={landingPage.body}
        siteSettings={siteSettings}
      />
    </div>
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
