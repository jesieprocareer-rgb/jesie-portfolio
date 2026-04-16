import "./Home.css";
import Me2 from "../../assets/images/Me2.png";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">

                <div className="text">

                    <div className="valide">
                        <img src={Me2} alt="Jesie Cho Beronggoy" />
                        <p>"Turning chaos into organized, scalable systems—one task at a time"</p>
                    </div>

                    <div className="text-info">

                        <div className="title1">
                            <h1>Hi, I'm <span>Jesie Cho</span></h1>
                            <h2>Administrative & Accounting Virtual Assistant</h2>
                        </div>

                        <div className="paraga">
                            <p>
                                I help CEOs, founders, and business owners scale smarter by taking full ownership of financial management, 
                                executive administration, CRM operations, email systems, and calendar coordination—so they can focus on growth and revenue.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="btn1">

                    <a href="/JESIE_BERONGGOY-CV.pdf" download>
                        Download CV
                    </a>

                    <a href="#project">
                        View My Work
                    </a>

                </div>

            </div>

            <div className="photo">
                <img src={Me2} alt="Jesie Cho Beronggoy" />
            </div>

        </div>
    )
}

export default Home;