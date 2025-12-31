export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <>
      <div className="experience-buttons">
        <a
          href="/files/Sara_Rigatti_Resume.pdf"
          className="button"
          download
        >
          Click Here to Download My Resume!
        </a>
      </div>

      <div className="resume-container">

        {/* EDUCATION */}
        <section className="resume-section">
          <h2>Education</h2>

          <div className="resume-item">
            <h3>Boston College</h3>
            <p className="resume-subtitle">
              B.A. Computer Science (4.00/4.00), B.S. Environmental Geoscience (4.00/4.00)
              <br />
              August 2022 - May 2026 (Expected)
              <br />
              Cumulative GPA: 3.97/4.00
            </p>
            <p>
              Featured coursework: Geospatial Data Analysis, Environmental Data Analysis,
              Algorithms, Databases, Data Structures, Software Engineering, Computer Systems,
              Computer Networks, Mineralogy, Coastal Geomorphology
            </p>
          </div>

          <div className="resume-item">
            <h3>Geology Field Camp, University of Louisiana at Lafayette</h3>
            <p className="resume-subtitle">
              Summer 2024
            </p>
            <p>
              Learned and applied geological field methods to produce projects, including
              geologic maps and stratigraphic columns, through six weeks of intensive
              coursework in Wyoming, Montana, and Utah.
            </p>
          </div>
        </section>

        {/* AWARDS */}
        <section className="resume-section">
          <h2>Awards & Honors</h2>

          <div className="resume-item">
            <h3>Alpha Sigma Nu Jesuit Honor Society</h3>
            <p className="resume-subtitle">
              Boston College Morrissey College of Arts and Sciences
              <br />
              Inducted March 2025
            </p>
            <ul>
              <li>
                Membership awarded to the top 5% of the class for excellence in scholarship,
                loyalty, and service.
              </li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>Dean's Scholar Award</h3>
            <p className="resume-subtitle">
              Boston College Morrissey College of Arts and Sciences
              <br />
              Awarded March 2025
            </p>
            <ul>
              <li>
                Awarded to students demonstrating the highest academic excellence.
                Two students selected per major.
              </li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>Sophomore Scholar Award</h3>
            <p className="resume-subtitle">
              Boston College Morrissey College of Arts and Sciences
              <br />
              Awarded March 2024
            </p>
            <ul>
              <li>
                Awarded to students demonstrating the highest academic excellence.
              </li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="resume-section">
          <h2>Experience</h2>

          <div className="resume-item">
            <h3>IT Assurance Intern</h3>
            <p className="resume-subtitle">
              Wolf & Company, P.C.
              <br />
              June 2025 - August 2025
            </p>
            <ul>
              <li>Inspected client IT infrastructure and security controls</li>
              <li>Tested controls related to risk, compliance, and cybersecurity</li>
              <li>Collaborated with teams and presented findings to clients</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>Undergraduate Research Assistant</h3>
            <p className="resume-subtitle">
              Center for Isotope Geochemistry, Boston College
              <br />
              May 2024 - August 2025
            </p>
            <ul>
              <li>Supported graduate-level geochemical research</li>
              <li>Performed data quality control and analysis</li>
              <li>Developed advanced Excel and analytical skills</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>Teaching Assistant — CSCI 2268</h3>
            <p className="resume-subtitle">
              Boston College Computer Science Department
              <br />
              Dec 2025 - Present
            </p>

            <h3>Teaching Assistant — CSCI 1101</h3>
            <p className="resume-subtitle">
              Boston College Computer Science Department
              <br />
              Jan 2024 - Dec 2025
            </p>

            <ul>
              <li>Instructed students in Python and foundational CS concepts</li>
              <li>Led discussion sections and office hours</li>
              <li>Improved student engagement and performance</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>President</h3>
            <p className="resume-subtitle">
              EcoPledge of Boston College
            </p>
            <ul>
              <li>Led largest student-run sustainability organization on campus</li>
              <li>Managed initiatives, outreach, and partnerships</li>
              <li>Oversaw executive board and strategy</li>
            </ul>

            <h3>Secretary</h3>
            <p className="resume-subtitle">
              Apr 2024 - Apr 2025
            </p>

            <h3>Director, Activism Committee</h3>
            <p className="resume-subtitle">
              Jan 2023 - Apr 2024
            </p>
          </div>

          <div className="resume-item">
            <h3>Social Director</h3>
            <p className="resume-subtitle">
              University Chorale of Boston College
              <br />
              Apr 2025 - Present
            </p>
            <ul>
              <li>Planned social events and alumni outreach</li>
            </ul>

            <h3>Director of Marketing and Management</h3>
            <p className="resume-subtitle">
              Apr 2025 - Present
            </p>
            <ul>
              <li>Managed ticket sales, programs, and marketing materials</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li><strong>Languages:</strong> Python, Java, C, Go, Verilog</li>
            <li><strong>Frameworks:</strong> Django, Matplotlib, NumPy, Google Cloud</li>
            <li><strong>Tools:</strong> ArcGIS Pro, Git, LaTeX, HTML, CSS, Excel, Figma, Canva</li>
          </ul>
        </section>

      </div>
    </>
  );
}
