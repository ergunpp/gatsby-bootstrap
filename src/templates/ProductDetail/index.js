import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from 'components/Layout'
import  './style.scss'
import NutritionAdditives from 'components/NutritionAdditives'
import AnalysisChart from 'components/AnalysisChart'
import PackageVariants from 'components/PackageVariants'
import Seo from 'components/seo'



export default class ProductDetail extends React.Component {
render() {
    const product = get(this.props.data,"contentfulUrunler")
    
    return (
      <Layout location={product.id}>
      <Seo title={product.name} description={product.description.description}/>
      <div className="container">
         <div className="row mt-5">
          <div className="col-md-6">
            <h1>{product.name}</h1>
            {product.description !== null && (<div><h3>{product.description.description}</h3></div>)}
            <img src={product.mainPhoto.fixed.src} alt={product.name}/>
            <div className="detailSection">
            <h3>İçerikler</h3>
            <p>{product.ingredients.ingredients}</p>
            
            </div>
            <div className="detailSection">
               <h3>Paket Çeşitleri</h3>
               <PackageVariants packages={product.packageVariants}/>
            </div>
            <div className="detailSection">
               <h3>Besleme Tablosu ve Önerileri</h3>
              <div className="feedingTable" dangerouslySetInnerHTML={{__html:product.feedingTable.feedingTable}}></div>
              </div>
           </div>
        <div className="col-md-6">
         
          <div className="chart">
           <div className="title">Analiz</div>
          <AnalysisChart analysis={product.analytical}/></div>
          <NutritionAdditives additives={product.additives} energy={product.metabolizableEnergy}/>
        </div>
        </div>
      </div>
      
      </Layout>
    );
  }
}

ProductDetail.propTypes = {
    data: PropTypes.object.isRequired
}
export const query=graphql`
    query productDetailQuery ($productId: String!){
       contentfulUrunler(id: {eq: $productId}){
           id
           name
           description {
               description
           }
           ingredients{
               ingredients
           }
            feedingTable {
              feedingTable
            }
            mainPhoto{
                fixed{
                    width
                    height
                    src
                    srcSet
                }
            }
            analytical{
              protein
              fat
              ash
              fibre
              omega6
              omega3
            }
            additives {
              copperSulfate
              vitaminC
              vitaminA
              vitaminE
              vitaminD3
              zincShelate
              zincSulphate
              glukozamin
              manganeseSulphate
              taurine
              kondroitin
              selenyum
              niyasin
              
            }
            packageVariants{
                packageSize
            }
            metabolizableEnergy
           
       }
       
}
`