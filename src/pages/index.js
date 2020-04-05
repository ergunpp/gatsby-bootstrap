import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Seo from 'components/seo'



import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Splash from 'components/Splash'

const BlogIndex = ({ data, location }) => {
  
  
  return (
    <Layout location={location}>
      <Seo title="Dört ayakları dostlarımız için bütçe dostu kaliteli mama"/>
      
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