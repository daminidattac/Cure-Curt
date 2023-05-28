import React from "react";
import "./BloodDonationNavbar.css";

export default function BloodDonationNavbar() {
  return (
    <nav className="blood-donation-navbar">
      <div className="blood-donation-navbar-container">
        <h1 className="navbar-logo">SMILE</h1>
        <ul className="blood-donation-navbar-menu">
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              Home
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              About Us
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              CAMPAIGN
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              PAGES
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              BLOG
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
