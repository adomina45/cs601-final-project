import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function download() {
    const fileLoc = '/download/Alexander_Domina_Resume.pdf';
    const link = document.createElement("a");
    link.href = fileLoc;
    link.download = "Alexander_Domina_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Resume() {
  return (
    <div>
        <Header />
        <div className="space-header-footer">
            <div className='resume'>
                <h1>Resume</h1>
                <h2>Alexander G. Domina</h2>
                <h3>EMPLOYMENT</h3>
                <div>
                    <p><b>PMG</b>, Boston</p>
                    <p>Software Engineer 2, June 2025 - Present</p>
                    <ul>
                        <li>Acquired Momentum Commerce in June 2025.</li>
                    </ul>
                </div>
                <div>
                    <p><b>Momenutm Commerce</b>, Boston</p>
                    <p>Software Engineer 2, April 2025 - June 2025</p>
                    <p>Software Engineer 1, August 2023 - April 2025</p>
                    <ul>
                        <li>Engineered a new code deployment system leveraging Github Actions and AWS saving engineers a month of time.</li>
                        <li>Developed internal tools to increase productivity for both commercial and technical teams.</li>
                        <li>Built multiple front-end interfaces to facilitate customer data delivery in an easy and intuitive way.</li>
                        <li>Rebuilt and optimized our competitor analysis to decrease the time it takes to run the operation from 45 minutes to under 1 minute.</li>
                        <li>Worked with technical and non-technical stakeholders to drive innovation that provides both internal and external users with  better insights into their Amazon data.</li>
                        <li>Managed AWS stack using the Terraform Infrastructure as Code tool to programmatically and repeatedly deploy and maintain environments in EC2 and ECS.</li>
                        <li>Helped implement better development and support practices to ensure better maintenance of code e.g.--using monthly sprints to better segment development tasks and the usage of a weekly rotating support engineer to aid internal and external users with bugs and other issues.</li>
                    </ul>
                </div>
                <h3>SKILLS</h3>
                <div>
                    <ul>
                        <li>Proficient in programming in object-oriented and procedural programming languages, especially C, C++, Java, Python, JavaScript, TypeScript, and PHP.</li>
                        <li>Advanced in Preact and proficient in AngularJS frontend frameworks.</li>
                        <li>Advanced in Markup Languages such as XML, HTML, and YAML.</li>
                        <li>Proficient in Relational Databases such as MySQL and Snowflake.</li>
                    </ul>
                </div>
                <h3>EDUCATION</h3>
                <div>
                    <span className='resume-flex'>
                        <p><b>Boston University</b>, Boston</p>
                        <p className='right'> Expected August 2025</p>
                    </span>
                    <p>Master of Science, Computer Information Systems</p>
                </div>
                <div>
                    <span className='resume-flex'>
                        <p><b>College of the Holy Cross</b>, Worcester</p>
                        <p className='right'>May 2022</p>
                    </span>
                    <p>Bachelor of Arts, Computer Science, Minor, Physics</p>
                </div>
                <div className='button'>
                    <button onClick={download} aria-label="Download Resume Button">Download Resume</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Resume;