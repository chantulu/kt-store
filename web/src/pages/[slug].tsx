import { DynamicSanityParser } from 'components/DynamicSanityParser'
import HeroElement from 'components/Hero/HeroElement'
import { ReactElement } from 'react'
import { LandingPageQuery } from '../../LandingPage'
import client from '../client'

const Page = (props: LandingPageQuery): ReactElement => {
  console.log(props)
  const { landingPage } = props
  return (
    <div>
      <HeroElement
        hasMarketingBlock={landingPage.landingHeroElement.hasMarketingBlock}
        text={landingPage.landingHeroElement.heroText}
        marketingText={landingPage.landingHeroElement.heroMarketingText}
        image=""
        marketingImage=""
      ></HeroElement>
      <DynamicSanityParser components={landingPage.body} />
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
  const landingPage = await client.fetch(
    `
      *[_type == "page-landing" && slug.current == $slug][0]
    `,
    { slug }
  )

  const siteSettings = await client.fetch(`*[_type == "siteSettings"]`)
  return {
    props: {
      siteSettings,
      landingPage
    }
  }
}

export default Page
