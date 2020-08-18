import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         feedback: '',
         name: '',
         email: '',
         subject: ''
      };
      this.sendEmail = this.sendEmail.bind(this);
   }


   sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('gmail', 'portfolio', e.target, 'user_zB0Ub2v7UUR9ncWaei0AV');
      this.setState({
         feedback: '',
         name: '',
         email: '',
         subject: '',
         messageSent: false
      })

      document.getElementById('message-success').style.display = "block";

      window.setTimeout(() => {
         document.getElementById('message-success').style.display = "none";
      }, 5000)

   }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         // var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }


      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form className="contactForm" id="contactForm" name="contactForm" onSubmit={this.sendEmail}>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" size="35" id="contactName" name="contactName" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" size="35" id="contactEmail" name="contactEmail" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" size="35" id="contactSubject" name="contactSubject" value={this.state.subject} onChange={(event) => this.setState({ subject: event.target.value })} />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.feedback} onChange={(event) => this.setState({ feedback: event.target.value })} ></textarea>
                     </div>
                     <div>
                        <input className="submit" type="submit" value="submit" />
                     </div>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
