import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <Header />
        <div className="content">
            <img src='../public/assets/me.png' className='img' alt='Headshot of Alexander Domina'/>
            <h1>About Me</h1>
            <p>Alexander G. Domina is a skilled software engineer with a strong background in both backend and frontend development, as well as cloud infrastructure and data systems. Originally from Rockland, Massachusetts, Alexander brings a diverse set of technical skills and a proven track record of delivering impactful solutions across a range of projects.</p>
            <p>Currently, Alexander works remotely as a Software Engineer at Momentum Commerce, where he has been a key contributor since August 2022. In this role, he has led the engineering of a new code deployment system utilizing GitHub Actions and AWS, dramatically improving development efficiency and saving engineers significant time. Alexander has developed internal tools that boost productivity for commercial and technical teams, built user-friendly front-end interfaces for customer data delivery, and optimized complex competitor analysis processes—cutting runtimes from 45 minutes to under one minute. His responsibilities also include managing AWS infrastructure using Terraform, streamlining deployments and maintaining cloud environments across EC2 and ECS. In addition, Alexander has contributed to the improvement of internal development practices, incorporating agile methodologies such as monthly sprints and rotating support schedules to enhance both code maintainability and customer support.</p>
            <p>Prior to his current role, Alexander gained hands-on experience as a Junior Service Delivery and Engineering Technician Intern at Congruity360 in Norwell, MA, where he assembled servers for enterprise environments, configured both Windows and Linux operating systems, migrated storage systems, and contributed to machine learning initiatives by generating training data and writing technical documentation.</p>
            <p>Alexander holds a Master of Science in Computer Information Systems from Boston University (expected August 2025) and a Bachelor of Arts in Computer Science, with a minor in Physics, from the College of the Holy Cross (May 2022), where he graduated with a GPA of 3.2.</p>
            <p>With proficiency in multiple programming languages—including C, C++, Java, Python, JavaScript, TypeScript, and PHP—and experience in frameworks like Preact and AngularJS, Alexander combines deep technical expertise with a practical, results-oriented approach. He is also highly capable in SQL and relational databases such as MySQL and Snowflake, and is adept in markup languages like XML, HTML, and YAML.</p>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
