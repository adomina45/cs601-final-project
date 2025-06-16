import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoGrid from '../components/PhotoGrid';

function Photos() {
  return (
    <div>
        <Header />
        <div className="content">
            <div className="space-header-footer">
                <h1 className='center-heading'>Photos Gallery</h1>
                <PhotoGrid />
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Photos;