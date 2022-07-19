export interface ProductPriceMenuType {
  _key: string
  _type: string
  image: Image
  menuSection: MenuSectionType[]
}

interface Image {
  _type: string
  asset: Asset
}

interface Asset {
  _ref: string
  _type: string
}

export interface MenuSectionType {
  _key: string
  _type: string
  menuItemList: MenuItemList[]
  title: string
  hasSizes?: boolean
  hidePrice?: boolean
}

export interface MenuItemList {
  _key: string
  _type: string
  description?: string
  name: string
  price?: number
  price_md?: number
  price_sm?: number
}
