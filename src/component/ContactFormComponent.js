import React from 'react';
import {Link} from "react-router-dom";

import api from '@/util/api.js';
import DomHelper from '@/util/domHelper';
import styles from '@/css/components/ContactFormComponent.module.css'


export function ContactUsLink(){
  return (<div className="ib-card ib-none" id="contact-us" style={{marginTop: '-2em', fontSize: '0.9em'}}>
    <p> We value your feedback. If you have any suggestions of new functionalities or tools, or find anything wrong with the tools listed above, please let us know here:   </p>
    <div className="center-container segment-link">
      <Link className="ib-link-btn" to="/contactUs" onClick={DomHelper.scrollToTop}>Contact Us</Link> 
    </div>
  </div>);
}

export default class ContactFormComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactEmail: '',
      contactCategoryId: 1,  // Default category of 1
      contactSubject: '',
      contactMessage: '',

      categories: [],
      promptMsg: '',
      promptClass: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitContactMeForm = this.submitContactMeForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({[target.name]: value});
  }

  updateMailboxCategories(){
    return api.post("/api/mailbox/getCategories").then((res)=>{
      if(!res.data){ return; }
      this.setState({categories: res.data.data.map((e)=>{
        return {value: e.id, name: e.name};
      })});
    });
  }

  submitContactMeForm(event){
    event.preventDefault();
    this.setState({promptMsg: ''});
    api.post('/api/mailbox/postMail', {
      email: this.state.contactEmail,
      categoryId: this.state.contactCategoryId,
      subject: this.state.contactSubject,
      msg: this.state.contactMessage,
    }).then((res)=>{
      this.setState({
        promptMsg: res.data.msg,
        promptClass: (res.data.status) ? styles.success : styles.error
      });
    }).catch().then(()=>{
      this.setState({
        contactEmail: '',
        contactCategoryId: 1,  // Default category of 1
        contactSubject: '',
        contactMessage: '',
      });
    });
  }
  
  componentDidMount() {this.updateMailboxCategories();}

  render(){
    let contactUsForm = (<div className="ib-card ib-none" id={styles.contactUs}>
      <div className="center-container" id="contactForm"> 
        <h3> Contact Us </h3>
      </div>
      <form className={`ib-form md ${styles['ib-form']}`} onSubmit={this.submitContactMeForm}>
        <p> Feel free to reach out to us by filling out the following form: </p>
        {this.state.promptMsg && <p className={`${styles.prompt} ${this.state.promptClass}`} id={styles.contactPrompt}>{this.state.promptMsg}</p>}
        <div className="form-field">
          <label className="sm" htmlFor="contactEmail"> Email: </label>
          <input type="email" name="contactEmail" id="contactEmail"
            onChange={this.handleInputChange} value={this.state.contactEmail} required/>
        </div>
        <div className="form-field">
          <label className="sm" htmlFor="contactCategoryId"> Category: </label>
          <select name="contactCategoryId" id="contactCategoryId"
            onChange={this.handleInputChange} value={this.state.contactCategoryId}>
            {this.state.categories && this.state.categories.map((e, i)=>{
              return (<option key={i} value={e.value}>{e.name}</option>);
            })}
          </select>
        </div>
        <div className="form-field">
          <label className="sm" htmlFor="contactSubject"> Subject: </label>
          <input type="text" name="contactSubject" id="contactSubject"
            onChange={this.handleInputChange} value={this.state.contactSubject} required/>
        </div>
        <div className="form-field">
          <label className="sm" htmlFor="contactMessage"> Message: </label>
          <textarea name="contactMessage" id="contactMessage" rows={10}
            onChange={this.handleInputChange} value={this.state.contactMessage} required></textarea>
        </div>
        <div className="center-container"> <input type="submit" value="Submit"/> </div>
      </form>
    </div>);

    if(this.props.singlePage){
      return (<div className="ib-body ib-dense"> {contactUsForm} </div>);
    }else{
      return contactUsForm;
    }
  }
}