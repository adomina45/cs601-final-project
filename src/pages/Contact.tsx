import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
        <Header />
        <div>
            <h1 className='center-heading'>Contact Me</h1>
            <ContactForm />
        </div>
        <Footer />
    </div>
  );
}

export default Contact;