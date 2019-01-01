import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'


import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Splash from 'components/Splash'

const BlogIndex = ({ data, location }) => {
  
  
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Splash/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    
    
  }
`