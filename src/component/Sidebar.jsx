import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // If scrolled more than 100px, set isScrolled to true
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                onClick={toggleSidebar} // Close sidebar when overlay is clicked
            ></div>

            {/* Sidebar */}
            <div
                className={`sidebar ${isOpen ? "active" : ""} ${
                    isScrolled ? "scrolled" : ""
                }`}
            >
                <div className="sidebar-header">
                    <h2>FundedNext</h2>
                    <button className="close-btn" onClick={toggleSidebar}>
                        Close
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="sidebar-links">
                    <li>Home</li>
                    <li>Models ▼</li>
                    <li>FAQ</li>
                    <li>Be a Partner ▼</li>
                    <li>More ▼</li>
                </ul>

                {/* Sidebar Actions */}
                <div className="sidebar-actions">
                    <button className="btn-login">Log In</button>
                    <button className="btn-trial">Free Trial</button>
                    <div className="language-selector">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                            alt="English"
                            style={{ width: "20px" }}
                        />
                        <span>EN ▼</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
