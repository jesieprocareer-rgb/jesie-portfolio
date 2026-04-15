import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="logo1">
                <h1><span>J</span>esie</h1>
            </div>
            <ul className="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Portfolio</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;