import './header.css';
import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import Sidebar

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div>
                    <img style={{width:"250px"}} src="img/Binary.png" alt="FundedNext Logo" />
                </div>

                {/* Navigation Links */}
                <nav className="nav">
                    <ul className="nav-links">
                        <li>Home</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                {/* Buttons and Language Selector */}
                <div className="header-actions">
                    <button className="btn-trial">Telegram Bot</button>
                    <div className="language-selector">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
                            alt="English"
                            className="flag-icon"
                        />
                        EN <span className="dropdown-icon">▼</span>
                    </div>
                </div>

                {/* Responsive Menu */}
                <button className="menu-btn" onClick={toggleSidebar}>
                    {isSidebarOpen ? "✖ Close" : "☰ Menu"}
                </button>
            </div>

            {/* Sidebar Component */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </header>
    );
};

export default Header;
