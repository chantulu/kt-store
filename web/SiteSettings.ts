export interface SiteSettings {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  addr_1: string
  addr_2: string
  description: string
  hours: Hours
  image: Image
  menu: Menu[]
  name: string
  facebook: string
  twitter: string
  tiktok: string
  instagram: string
}

export interface Hours {
  saturdayclose: string
  saturdayopen: string
  sundayclose: string
  sundayopen: string
  weekdaysclose: string
  weekdaysopen: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Menu {
  _key: string
  _type: string
  menuLink: string
  menuText: string
}
