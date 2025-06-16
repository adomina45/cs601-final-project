import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoGrid from '../components/PhotoGrid';

function Photos() {
  return (
    <div>
        <Header />
        <h1 className='center-heading'>Photos Gallery</h1>
        <PhotoGrid />
        <Footer />
    </div>
  );
}

export default Photos;