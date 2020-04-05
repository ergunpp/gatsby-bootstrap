import React from 'react'

import './style.scss'

const $ = require('jquery')
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	email:'',
    	subject:'',
    	message:'',
    	honeypot:'',
    	result:'',
    	alertType:'',
    	formErrors:{
    		email:'',
    		name:'',
    		message:''
    	},
    	isFormValid:false,
    	emailValid:false,
    	
    	
    	
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  handleChange(event) {
  	const target = event.target
  	const value = target.value
  	const name = target.name
    this.setState({ [name]: value },
       () => {this.validateField(name,value)}
    )
     
    
  }
  
  

  handleSubmit(event) {
  	event.preventDefault();
  	var URL = "https://v9jg33e7pa.execute-api.us-east-1.amazonaws.com/beta/sendemail/";
  	var form =this
  	var data = {
  		name: this.cleanInput(this.state.name.trim()),
  		email: this.cleanInput(this.state.email.trim()),
  		subject: this.cleanInput(this.state.subject.trim()),
  		message: this.cleanInput(this.state.message.trim()),
  		
  	}
  	
  	
  	data.message = "Bilgiler şunlar:\nAdı:"+data.name+"\nEmail Adresi: "+data.email+"\nKonu:"+data.subject+"\nMesaj:"+data.message
  	data.subject = "[Bestpet Web Sitesinden Doldurulan Form] "+data.subject;
    data.email = "info@atlaspet.com.tr";
    if(this.state.emailValid ===true){
      if (this.state.honeypot=== ''){

         $.ajax({
           type: "POST",
           url: URL,
           dataType: "json",
           contentType: "application/json",
           data: JSON.stringify(data),
           success: function(){
           	this.setState({name:'',email:'',message:'',subject:'',result:'Form başarıyla gönderildi.',alertType:'alert alert-success'})
           }.bind(this),
           error: function () {
             // show an error message
            this.setState({result: 'Sorunlar oluştu. Formu gönderemedik.',alertType:'alert alert-danger'});
           }.bind(this),
         });
        } else {console.log("Hi there, I guess you are not human baby");}
    } else { form.setState({result: 'Lütfen girmiş olduğunuz email adresini kontrol ediniz.',alertType:'alert alert-danger'})}
  }
  
 validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
   ;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? true : false;
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: fieldValidationErrors.email
    }, this.validateForm);
    console.log(this)
  }
  
 validateForm() {
    this.setState({ isFormValid: this.state.emailValid });
  } 
 
 cleanInput(input){
    var search = [
      '<script[^>]*?>.*?</script>', // Strip out javascript
      '<[/!]*?[^<>]*?>', // Strip out HTML tags
      '<style[^>]*?>.*?</style>', // Strip style tags properly
      '<![sS]*?--[ \t\n\r]*>', // Strip multi-line comments
    ]
    var text = input
    // console.log(search.length)
    //var output = preg_replace($search, '', input);
    for (let i = 0; i < search.length; i++) {
      text = text.replace(new RegExp(search[i], 'gi'), '')
    }
    return text
  } 

  render() {
    return (
    	       <form id="contact-form" onSubmit={this.handleSubmit}>
                  	<input className="form-control"  name="honeypot" type="text" style={{display:"none"}} value={this.state.honeypot} onChange={this.handleChange}/>
                  	<div className={this.state.alertType}>{this.state.result!=='' && this.state.result}</div>
                  	<div >
                  	    <div className="multiple">
                  			<label>İsim</label>
                  			<input className="form-control"  name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                  		</div>
                  		<div className="multiple">
                  			<label>Email</label>
                  			<input className="form-control"  name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                  		</div>
                  	</div>
                  	<div >
                  		<div>
                  			<label>Konu</label>
                  			<input className="form-control"  name="subject" type="text" value={this.state.subject} onChange={this.handleChange}/>
                  		</div>
                  	</div>
                  	<div >
                  		<div>
                  			<label>Mesajınız</label>
                  			<input className="form-control"  name="message" type="text" value={this.state.message} onChange={this.handleChange}/>
                  		</div>
                  	</div>
                  	<div >
                  		<button className="btn btn-outline-primary btn-block mt-5 mb-5"  type="submit">Gönder</button>
                  	</div>
              </form>
				   
				  
    );
  }
}

export default ContactForm
















