import "./Projects.css";

import img1 from "../../assets/images/cleveroad.jpg";
import img2 from "../../assets/images/cap.png";
import img3 from "../../assets/images/weather-forecast-dashboard.jpg";
import img4 from "../../assets/images/wordpress-dashboard-design-concept.jpg";
import img5 from "../../assets/images/game-dashboard-design.jpg";
import img6 from "../../assets/images/task-manager-app.jpg";

const projects = [
  {
    title: "Administrative Support",
    img: img1,
    link: "https://drive.google.com/drive/folders/1VTpEp5BRpf3yHOpqrf9SThwyHFlaaKM_?usp=drive_link",
    desc: "Delivered reliable executive and administrative support through inbox management, calendar coordination, CRM updates, document handling, and day-to-day operations management to keep businesses organized and productive.",
    skills: [
      "Email Management",
      "Calendar Coordination",
      "CRM Management",
      "Executive Assistance",
    ],
  },

  {
    title: "Lead Generation",
    img: img2,
    link: "https://drive.google.com/drive/folders/1wE1kGDhbmk_FnAnwiaUpuLXmYQvdVNdm?usp=drive_link",
    desc: "Managed strategic lead generation campaigns through direct outreach, prospect research, follow-ups, and appointment setting to help businesses increase qualified leads and grow their client base.",
    skills: [
      "Prospect Research",
      "DM Outreach",
      "Email Campaigns",
      "Appointment Setting",
    ],
  },

  {
    title: "Social Media Management",
    img: img3,
    link: "https://drive.google.com/drive/folders/1KULD8DsvypFPS4R8wfhYeoKP1qEB7Gls?usp=drive_link",
    desc: "Created engaging content, designed branded Canva graphics, scheduled posts, and managed newsletters to strengthen online presence, audience engagement, and brand consistency.",
    skills: [
      "Canva Design",
      "Content Scheduling",
      "Social Media",
      "Newsletter Management",
    ],
  },

  {
    title: "Operations Support | Real Estate VA",
    img: img4,
    link: "https://drive.google.com/drive/folders/1U_w-kf9Z1lQtvB0FD1KcagBuTKZdbBS0?usp=drive_link",
    desc: "Provided operational and virtual assistance support for real estate workflows including task coordination, document management, reporting, follow-ups, and process organization for efficient daily operations.",
    skills: [
      "Workflow Management",
      "Reporting",
      "Task Coordination",
      "Real Estate Support",
    ],
  },

  {
    title: "Bookkeeping Support",
    img: img5,
    link: "https://drive.google.com/drive/folders/14p29KKLV9HLnFhesLSPrkxwDctwIxkI_?usp=drive_link",
    desc: "Maintained accurate bookkeeping records through invoice processing, journal entries, expense monitoring, and QuickBooks management to support clean and organized financial operations.",
    skills: [
      "QuickBooks",
      "Invoice Management",
      "Journal Entries",
      "Expense Tracking",
    ],
  },

  {
    title: "Financial Data Management",
    img: img6,
    link: "https://drive.google.com/drive/folders/1DO_VKjI6gh2VHg1RfojKnMA9elxrFhAz?usp=drive_link",
    desc: "Handled reconciliations, financial reporting, invoicing, and transaction monitoring to ensure accurate records, compliance, and dependable financial insights for decision-making.",
    skills: [
      "Reconciliation",
      "Financial Reports",
      "Invoicing",
      "Data Accuracy",
    ],
  },
];

export default function Project() {
  return (
    <section className="project reveal" id="project">
      <div className="title">
        <h2>Work Samples</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>
                  {skill}
                </a>
              ))}
            </div>

            <div className="btns">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Details
              </a>

              <a href="#contact" className="btn">
                Contact Me
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}