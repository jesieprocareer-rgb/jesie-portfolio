import "./About.css";
import Me from "../../assets/images/Me.jpg";
import Skills from "./Skills";

function About() {
    return (
        <div className="about" id="about">
            <div className="about-content">

                <div className="text">

                    <div className="title2">
                        <h1>About Me</h1>
                    </div>

                    <div className="parag">
                        <p>
                            I am an Administrative & Accounting Support Specialist with 3+ years of experience supporting businesses in financial operations, client communication, CRM systems, and virtual administration.

                            I specialize in bringing structure, accuracy, and efficiency to fast-moving business environments. My background includes bookkeeping, financial reporting, lead generation, dispatch coordination, and executive-level administrative support.

                            I have successfully supported companies in healthcare, digital services, coaching platforms, and emergency service operations, consistently ensuring data accuracy, operational efficiency, and client satisfaction.
                        </p>
                    </div>

                    <div className="info">

                        <div className="card">
                            <h3>3<span>+</span></h3>
                            <p>Years of Experience</p>
                            <p>Administrative, Accounting & Virtual Support</p>
                        </div>

                        <div className="card">
                            <h3>100<span>%</span></h3>
                            <p>Client-Focused Execution</p>
                            <p>Accuracy, Efficiency & Reliable Delivery</p>
                        </div>

                    </div>

                </div>

                <div className="img">
                    <img src={Me} alt="Jesie Cho Beronggoy" />
                </div>

            </div>

            <Skills />
        </div>
    )
}

export default About;