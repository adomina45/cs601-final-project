import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

//React component for the contact page
function Contact() {
  return (
    <div id="contact-page">
        <Header />
        <div id="contact-page-content">
            <h1 className='center-heading' id="contact-page-heading">Contact Me</h1>
            <ContactForm />
        </div>
        <Footer />
    </div>
  );
}

export default Contact;