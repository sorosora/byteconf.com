import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav'
import favicon from '../assets/byteconf-full.png'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        const siteTitle = data.site.siteMetadata.title
        const siteDescription = data.site.siteMetadata.description
        return (
          <React.Fragment>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={siteTitle}
            >
              <link rel="shortcut icon" type="image/png" href={`${favicon}`} />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                crossorigin="anonymous"
              />
              <link
                href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
                rel="stylesheet"
              />
              <link rel="manifest" href="/manifest.json" />
              <script
                src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
                async
              />
              <script src="/oneSignal.js" async />
              <meta
                name="description"
                content="Free developer conferences for everyone"
              />
              <meta property="og:title" content="Byteconf" />
              <meta
                property="og:description"
                content="Free developer conferences for everyone"
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:image"
                content="https://byteconf-production.s3.amazonaws.com/headers/smoky.jpg"
              />
              <meta property="og:url" content="https://www.byteconf.com/" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@byteconf" />
            </Helmet>
            <Nav />
            <div className="font-sans flex flex-col min-h-screen bg-white">
              {children}
            </div>
          </React.Fragment>
        )
      }}
    />
  )
}

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Layout
