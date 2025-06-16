import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function download() {
    /*
    I did this like this so I can try out old style dom manipulation,
    prior to modern libraries and frameworks
    */
    //link to resume file
    const fileLoc = '/download/Alexander_Domina_Resume.pdf';
    //create a element
    const link = document.createElement("a");
    //sent a element href to resume file
    link.href = fileLoc;
    //name the file
    link.download = "Alexander_Domina_Resume.pdf";
    //add the element to the body
    document.body.appendChild(link);
    //click the element to start the download
    link.click();
    //delete the element
    document.body.removeChild(link);
}

function Resume() {
  return (
    <div id="resume-page">
        <Header />
        <div className="space-header-footer" id="resume-content-flex">
            <div className='resume' id="resume-content-content">
                <h1 id="resume-title">Resume</h1>
                <h2 id="resume-name">Alexander G. Domina</h2>
                <h3 id="resume-employment-title">EMPLOYMENT</h3>
                <div id="pmg-job">
                    <p id="pmg-company-name"><b>PMG</b>, Boston</p>
                    <p id="pmg-job-title">Software Engineer 2, June 2025 - Present</p>
                    <ul id="pmg-job-list">
                        <li id="pmg-bullet-one">Acquired Momentum Commerce in June 2025.</li>
                    </ul>
                </div>
                <div id="momentum-commerce-job">
                    <p id="momentum-commerce-company-name"><b>Momenutm Commerce</b>, Boston</p>
                    <p id="momentum-commerce-job-title-2">Software Engineer 2, April 2025 - June 2025</p>
                    <p id="momentum-commerce-job-title-1">Software Engineer 1, August 2023 - April 2025</p>
                    <ul id="momentum-commerce-job-list">
                        <li id="momentum-commerce-bullet-one">Engineered a new code deployment system leveraging Github Actions and AWS saving engineers a month of time.</li>
                        <li id="momentum-commerce-bullet-two">Developed internal tools to increase productivity for both commercial and technical teams.</li>
                        <li id="momentum-commerce-bullet-three">Built multiple front-end interfaces to facilitate customer data delivery in an easy and intuitive way.</li>
                        <li id="momentum-commerce-bullet-four">Rebuilt and optimized our competitor analysis to decrease the time it takes to run the operation from 45 minutes to under 1 minute.</li>
                        <li id="momentum-commerce-bullet-five">Worked with technical and non-technical stakeholders to drive innovation that provides both internal and external users with  better insights into their Amazon data.</li>
                        <li id="momentum-commerce-bullet-six">Managed AWS stack using the Terraform Infrastructure as Code tool to programmatically and repeatedly deploy and maintain environments in EC2 and ECS.</li>
                        <li id="momentum-commerce-bullet-seven">Helped implement better development and support practices to ensure better maintenance of code e.g.--using monthly sprints to better segment development tasks and the usage of a weekly rotating support engineer to aid internal and external users with bugs and other issues.</li>
                    </ul>
                </div>
                <h3 id="resume-skills-title">SKILLS</h3>
                <div id="resume-skills">
                    <ul id="resume-skill-list">
                        <li id="resume-programming-skill">Proficient in programming in object-oriented and procedural programming languages, especially C, C++, Java, Python, JavaScript, TypeScript, and PHP.</li>
                        <li id="resume-framework-skill">Advanced in Preact and proficient in AngularJS frontend frameworks.</li>
                        <li id="resume-markup-skill">Advanced in Markup Languages such as XML, HTML, and YAML.</li>
                        <li id="resume-db-skill">Proficient in Relational Databases such as MySQL and Snowflake.</li>
                    </ul>
                </div>
                <h3 id="resume-education-title">EDUCATION</h3>
                <div id="resume-bu-div">
                    <span className='resume-flex' id="resume-bu-span">
                        <p id="resume-bu-name"><b>Boston University</b>, Boston</p>
                        <p className='right' id="resume-bu-date"> Expected August 2025</p>
                    </span>
                    <p id="resume-bu-degree">Master of Science, Computer Information Systems</p>
                </div>
                <div id="resume-hc-div">
                    <span className='resume-flex' id="resume-hc-span">
                        <p id="resume-hc-name"><b>College of the Holy Cross</b>, Worcester</p>
                        <p className='right' id="resume-hc-date">May 2022</p>
                    </span>
                    <p id="resume-hc-degree">Bachelor of Arts, Computer Science, Minor, Physics</p>
                </div>
                <div className='button' id="button-div">
                    <button onClick={download} aria-label="Download Resume Button" id="download-button">Download Resume</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Resume;