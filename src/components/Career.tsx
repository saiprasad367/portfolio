import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FUll Stack Developer Intern</h4>
                <h5>CODTECH IT SOLUTIONS </h5>
              </div>
              <h3>Sep 24 -Nov 24</h3>
            </div>
            <p>
            "Worked as a Full Stack Development Intern at Codetech IT Solutions,
             where I gained hands-on experience in designing and developing dynamic web applications.
              Contributed to both front-end and back-end development, optimized application performance,
               and collaborated with a team to deliver user-friendly solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>Prodigy InfoTech </h5>
              </div>
              <h3>Aug 24 - Sep 24</h3>
            </div>
            <p>
            "Completed a Cyber Security Internship at Prodigy Infotech, where I worked on projects
             involving encryption, password security, and system monitoring. Developed solutions such
              as a Caesar Cipher encryption tool, an image encryption system using pixel manipulation, 
              a password complexity checker, and a keylogger program. Gained practical knowledge of cybersecurity 
              principles and Python programming."
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>CodSoft</h5>
              </div>
              <h3>May 24 - Jun 24</h3>
            </div>
            <p>
            "Served as a Web Developer Intern at CodSoft, where I created dynamic and responsive web projects.
             Successfully developed a personal portfolio website, a library landing page, and a functional calculator 
             using HTML, CSS, and JavaScript. Enhanced my front-end development skills and gained experience in creating 
             visually appealing and user-friendly interfaces."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
