import React from 'react';

import api from '@/util/api.js';
import styles from '@/css/pages/ContactFormComponent.module.css'
const contactMeForm_default = { categoryId: '1' };


export default class ContactFormComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  updateMailboxCategories(){
    return api.post("/api/mailbox/getCategories").then((res)=>{
      if(!res.data){ return; }
      const selectNode = document.getElementById('sel-contact-categories');
      const optionsArr = res.data.map((e)=>{
        return {elem: 'option', attr: {value: e.id}, innerHTML: e.name};
      });
      // ibadDOM.createElems(optionsArr, selectNode);
    });
  }

  submitContactMeForm(event){
    event.preventDefault();
    const contactMeForm = document.getElementById('contact-form');
    if(contactMeForm){
      // const data = ibadDOM.Form.getData(contactMeForm);
      const data = {}; 
      api.post('/api/mailbox/postMail', data).then((res)=>{
        const promptNode = document.getElementById('contact-prompt');
        promptNode.innerHTML = res.msg;
        if(res.status){
          promptNode.classList.remove('error');
          promptNode.classList.add('success');
        }else{
          promptNode.classList.add('error');
          promptNode.classList.remove('success');
        }
      }).catch().then(()=>{
        // ibadDOM.Form.clear(contactMeForm);
        // ibadDOM.Form.load(contactMeForm, contactMeForm_default);
      });
    }
  }
  
  componentDidMount() {
    this.updateMailboxCategories().then(()=>{
      // ibadDOM.Form.load(contactMeForm, contactMeForm_default);
    });
    const contactMeForm = document.getElementById('contact-form');
    contactMeForm && contactMeForm.addEventListener('submit', this.submitContactMeForm);
  }

  render(){
    return (<div className="ib-card ib-none" id={styles['contact-us']}>
      <div className="center-container" id="contactForm" style={{marginTop: (this.props.singlePage) ? '2em': '0'}}> 
        <h3> Contact Us </h3>
      </div>
      <form className={`ib-form md ${styles['ib-form']}`} id="contact-form">
        <p> Feel free to reach out to us by filling out the following form: </p>
        <p className="prompt" id={styles['contact-prompt']}></p>
        <div className="form-field">
          <label className="sm" htmlFor="contact-email"> Email: </label>
          <input type="email" data-key="email" id="contact-email" required/>
        </div>
        <div className="form-field">
          <label className="sm" htmlFor="sel-contact-categories"> Category: </label>
          <select id="sel-contact-categories" data-key="categoryId"></select>
        </div>
        <div className="form-field">
          <label className="sm" htmlFor="contact-subject"> Subject: </label>
          <input type="text" data-key="subject" name="subject" id="contact-subject" required/>
        </div>
        <div className="form-field">
          <label className="sm" htmlFor="contact-msg"> Message: </label>
          <textarea data-key="msg" name="message" id="contact-msg" required></textarea>
        </div>
        <div className="center-container"> <input type="submit" value="Submit"/> </div>
      </form>
    </div>);
  }
}