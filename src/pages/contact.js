import React from 'react'
import Layout from 'components/Layout'
import ContactForm from 'components/ContactUs'

const ContactUs = ({location}) =>{
    return (
       <Layout location ={location}>
         <div className="container">
          <div className="mt-5">
            <h1>İletişim</h1>
            <p>Sorularınız için aşağıdaki iletişim formu ile bize ulaşabilirsiniz. </p>
          
          </div>
           <ContactForm/>
         </div>
       </Layout>
)}

export default ContactUs