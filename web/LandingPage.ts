export interface Root {
  landingPageQuery: LandingPageQuery
}

export interface LandingPageQuery {
  landingPage: LandingPage
}

export interface LandingPage {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Body[]
  image: Image5
  landingHeroElement: LandingHeroElement
  slug: Slug
  title: string
}

export interface Body {
  _key: string
  _type: string
  hoursSubtitle?: string
  hoursTitle?: string
  tm1?: Tm1
  tm2?: Tm2
  tm3?: Tm3
  tm4?: Tm4
  title?: string
}

export interface Tm1 {
  _type: string
  image: Image
  tag: string
  title: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Tm2 {
  _type: string
  image: Image2
  tag: string
  title: string
}

export interface Image2 {
  _type: string
  asset: Asset2
}

export interface Asset2 {
  _ref: string
  _type: string
}

export interface Tm3 {
  _type: string
  image: Image3
  tag: string
  title: string
}

export interface Image3 {
  _type: string
  asset: Asset3
}

export interface Asset3 {
  _ref: string
  _type: string
}

export interface Tm4 {
  _type: string
  image: Image4
  tag: string
  title: string
}

export interface Image4 {
  _type: string
  asset: Asset4
}

export interface Asset4 {
  _ref: string
  _type: string
}

export interface Image5 {
  _type: string
  asset: Asset5
}

export interface Asset5 {
  _ref: string
  _type: string
}

export interface LandingHeroElement {
  _type: string
  hasMarketingBlock: boolean
  heroImage: HeroImage
  heroMarketingImage: HeroMarketingImage
  heroMarketingText: string
  heroText: string
}

export interface HeroImage {
  _type: string
  asset: Asset6
}

export interface Asset6 {
  _ref: string
  _type: string
}

export interface HeroMarketingImage {
  _type: string
  asset: Asset7
}

export interface Asset7 {
  _ref: string
  _type: string
}

export interface Slug {
  _type: string
  current: string
}
