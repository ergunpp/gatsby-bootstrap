import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './style.scss'


export default () => (
  <StaticQuery
      query = {graphql`
     query { 
        file(relativePath:{eq:"splash.jpg"}){
        childImageSharp{
          fluid(maxWidth:1000){
           ...GatsbyImageSharpFluid
          }
        }
      }
     }
   `}
   render={data =>(
        
                
                 <Img fluid={data.file.childImageSharp.fluid} />
                
               
                  
             
        
   )}
   />
  )