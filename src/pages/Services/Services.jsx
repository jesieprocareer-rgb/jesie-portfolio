import "./Services.css";

function Services() {
    return (
        <div className="services" id="services">

            <div className="title">
                <h2>My Services</h2>
                <p>Administrative & Accounting Support Specialist</p>
            </div>

            <div className="services-container">

                <div className="service-card">
                    <h3>Administrative Support</h3>
                    <p>
                        Email, calendar, CRM, executive assistance
                    </p>
                    <h4>$6 – $7 / hour</h4>
                </div>

                <div className="service-card">
                    <h3>Lead Generation</h3>
                    <p>
                        DM outreach, email campaigns, appointment booking
                    </p>
                    <h4>$6 – $7 / hour</h4>
                </div>

                <div className="service-card">
                    <h3>Social Media Management</h3>
                    <p>
                        Canva graphics, posting, newsletters
                    </p>
                    <h4>$6 – $7 / hour</h4>
                </div>

                <div className="service-card">
                    <h3>Operations Support | Real Estate VA</h3>
                    <p>
                        Workflow coordination, reporting, task management
                    </p>
                    <h4>$6 – $7 / hour</h4>
                </div>

                <div className="service-card">
                    <h3>Bookkeeping Support (CORE SKILL)</h3>
                    <p>
                        QuickBooks, invoices, journal entries, expense tracking
                    </p>
                    <h4>$8 – $10 / hour</h4>
                </div>

                <div className="service-card">
                    <h3>Financial Data Management</h3>
                    <p>
                        Reconciliation, reporting, invoicing, transaction tracking
                    </p>
                    <h4>$8 – $10 / hour</h4>
                </div>

            </div>

        </div>
    );
}

export default Services;