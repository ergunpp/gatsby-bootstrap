import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/Layout'
import Product from 'components/Product'
const wetFood = "0b4c2724-df47-544a-93ab-0b6a6265f4b7"
const dryFood = "d22de9b8-1196-5344-b729-cdbae3411e86"

const CatIndex = ({location}) => {
    return (
        <Layout location={location}>
            <div className="container productlist">
             <h1>Kuru Mamalar</h1>
             <hr className="divider-red"/>
             <div className="container flexList"><Product type={false} category={dryFood}/></div>
            </div>
            <div className="container productlist">
             <h1>Yaş Mamalar</h1>
             <hr className="divider-red"/>
             <div className="container flexList"><Product type={false} category={wetFood}/></div>
            </div>
        </Layout>
        )
}

export default CatIndex