import "./Projects.css";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Cap.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "Administrative Support",
    img: img1,
    link: "https://drive.google.com/drive/folders/1VTpEp5BRpf3yHOpqrf9SThwyHFlaaKM_?usp=drive_link",
    desc: "Provided high-level administrative support including email management, calendar coordination, CRM updates, and executive assistance to ensure smooth daily operations.",
    skills: ["Email Management", "Calendar", "CRM", "Executive Support"]
  },
  {
    title: "Lead Generation",
    img: img2,
    link: "https://drive.google.com/drive/folders/1wE1kGDhbmk_FnAnwiaUpuLXmYQvdVNdm?usp=drive_link",
    desc: "Executed targeted DM outreach and email campaigns, managed lead tracking, and scheduled qualified appointments to support business growth and client acquisition.",
    skills: ["Outreach", "Email Campaigns", "Lead Tracking", "Appointment Setting"]
  },
  {
    title: "Social Media Management",
    img: img3,
    link: "https://drive.google.com/drive/folders/1KULD8DsvypFPS4R8wfhYeoKP1qEB7Gls?usp=drive_link",
    desc: "Designed Canva graphics, scheduled posts, and managed newsletters to increase engagement, maintain brand consistency, and support marketing efforts.",
    skills: ["Canva", "Content Creation", "Social Media", "Newsletters"]
  },
  {
    title: "Operations Support | Real Estate VA",
    img: img4,
    link: "https://drive.google.com/drive/folders/1U_w-kf9Z1lQtvB0FD1KcagBuTKZdbBS0?usp=drive_link",
    desc: "Coordinated workflows, managed reports, and handled task tracking to improve operational efficiency and ensure timely execution of business processes.",
    skills: ["Workflow", "Reporting", "Task Management", "Coordination"]
  },
  {
    title: "Bookkeeping Support",
    img: img5,
    link: "https://drive.google.com/drive/folders/14p29KKLV9HLnFhesLSPrkxwDctwIxkI_?usp=drive_link",
    desc: "Maintained accurate financial records using QuickBooks, including invoice management, journal entries, and expense tracking for organized financial operations.",
    skills: ["QuickBooks", "Invoices", "Journal Entries", "Expenses"]
  },
  {
    title: "Financial Data Management",
    img: img6,
    link: "https://drive.google.com/drive/folders/1DO_VKjI6gh2VHg1RfojKnMA9elxrFhAz?usp=drive_link",
    desc: "Handled reconciliation, financial reporting, invoicing, and transaction tracking to ensure accuracy, compliance, and reliable financial insights.",
    skills: ["Reconciliation", "Reporting", "Invoicing", "Data Tracking"]
  }
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
                <a href="#" key={i}>{skill}</a>
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