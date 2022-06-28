import * as React from 'react'
import PropTypes from 'prop-types'
import { default as Helmet } from 'next/head'
import { SiteSettings } from '../../../SiteSettings'

function SeoMetaNext({
  description,
  meta,
  title,
  path,
  image,
  children,
  siteSettings,
  baseUrl
}: {
  description: string
  lang?: string
  meta?: (
    | {
        name: string
        content: any
        property?: undefined
      }
    | {
        property: string
        content: any
        name?: undefined
      }
  )[]
  title: string
  path?: string
  image: string
  children?: React.ReactElement
  siteSettings: SiteSettings
  baseUrl: string
}) {
  const metaDescription = description || siteSettings.description
  const defaultTitle = siteSettings.name
  const metaArr = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:image`,
      content: `${image}`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ].concat(meta || [])
  return (
    <Helmet>
      <title>
        {(title || defaultTitle).charAt(0).toUpperCase() +
          (title || defaultTitle).slice(1)}{' '}
        | {siteSettings.name}
      </title>
      {metaArr?.map((m) => (
        <meta
          property={m.property}
          content={m.content}
          {...(m.name ? { name: m.name } : {})}
        />
      ))}
      {path && (
        <script type="application/ld+json">
          {`${JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: path
              .split('/')
              .filter((s) => s)
              .map((s, i, a) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: s.replace(/-/g, ' '),
                ...(i < a.length - 1 && {
                  item: `${baseUrl}/${
                    i > 0 ? a.slice(0, i).map((x) => `${x}/`) : ''
                  }${s}`
                })
              }))
          })}`}
        </script>
      )}
      {children}
    </Helmet>
  )
}

SeoMetaNext.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SeoMetaNext.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SeoMetaNext
