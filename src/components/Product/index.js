import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import "./style.css"



export default (props) =>(
   <StaticQuery
   query={graphql`
       query ProductQuery   {
        contentful: allContentfulMarka(filter:{name:{eq:"Bestpet"},node_locale:{eq:"tr-TR"}}){
       edges{
        node{
          products: _r_nler{
            name
            id
            isDogFood
            category{
                id
            }
            mainPhoto{
                fixed{
                    width
                    height
                    src
                    srcSet
                }
            }
            
          }
        }
      }
     }
       }
       `}
      
    
    render={data => (
        
       
        data.contentful.edges[0].node.products.map((product,key) => (
        
         
              (product.isDogFood===props.type && product.category.id ==props.category) && (
                  <div key={key} className="card">
                     <div className="card-media">
                       <Link to={`/product-tr/${product.id}`}>
                         <img className="card-img" src={product.mainPhoto.fixed.src}/>
                       </Link>
                         <img className="shape" src="/img/shap-small.png"/>
                     </div>
                     <div className="card-caption">
                        <Link to={`/product-tr/${product.id}`}>
                            <p className="card-title">{product.name}</p>
                        </Link> 
  
           </div>
         </div>
             )
        )
     ))}
     />
 )



