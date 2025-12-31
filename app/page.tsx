import Image from "next/image";
import { updates } from "./data/updates";
  
export default function Home() {
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latestUpdates = sortedUpdates.slice(0, 3);
  return (
    <>
    <div className="home-container">
      <div className="home-image">
          <img src="/images/headshot.png" alt="Sara Rigatti"/>
              <div className="home-buttons">
              <a href="/files/Sara_Rigatti_Resume.pdf" className="button" download>Download My Resume!</a>
              <a href="https://www.linkedin.com/in/sara-rigatti-3955882a8/" target="_blank" className="icon-button" >
                  <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/rigattis" target="_blank" className="icon-button" >
                  <img src="images/github.png" alt="GitHub" />
              </a>
              <a href="/contact/" className="icon-button">
                  <img src="images/email.png" alt="Contact" />
              </a>
          </div>
      </div>
    <div className="home-text">
         <h1>Sara C. Rigatti</h1>
        <p>
            Hello! My name is Sara Rigatti and I am a senior at Boston College pursuing a double major in Computer Science and Environmental Geoscience. I am passionate about using technology to collaborate, innovate, and understand our world in the face of climate change.
        </p>
        <p>
            Throughout my academic and professional career, I have developed strong technical and analytical skills. I am knowledgeable in using, interpreting and applying various programming languages and tools such as Python, Java, C, Go, Verilog, and Django, which I have used in a number of academic subjects and personal projects. Additionally, I have had experience using tools such as ArcGIS Pro, environmental model outputs, and performing detailed analysis using Excel. During my internship experience at Wolf and Company, P.C., I gained exposure to IT systems, IT best practices, and the consulting space. 
        </p>
        <p>
            Outide of my academic career, I serve as the President of EcoPledge of Boston College, the largest student-run sustainability organization on campus. I am also the Social Director for the University Chorale of Boston College, where I coordinate alumni outreach, plan all social events, and manage interal relations.
        </p>
        <p>
            In my free time, I enjoy cooking, running, skiing, hiking, camping, photography, and board games. I love to travel, and have driven across the U.S. three times in the last three years. It is a goal of mine to visit all 63 national parks and all 50 states. So far, I have been to 17 national parks and 41 states!
        </p>
    </div>
</div>
    <section className="updates-section">
      <h2>Recent Updates</h2>

      <div className="featured-updates">
        {latestUpdates.map((update, index) => (
          <div className="featured-update" key={index}>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
            <span className="update-date">{update.date}</span>
          </div>
        ))}
      </div>

      <h2>All Updates</h2>

      <div className="all-updates">
        {sortedUpdates.map((update, index) => (
          <div className="update-item" key={index}>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
            <span className="update-date">{update.dateLabel}</span>
          </div>
        ))}
      </div>
    </section>
  </>
  );
}
