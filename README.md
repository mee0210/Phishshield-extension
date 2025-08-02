# Phishshield-extension
PhishShield is a Chrome extension designed to detect and warn users about potentially malicious or phishing websites in real time. Built using JavaScript and Manifest V3, it analyzes URLs and login form patterns to help users stay safe while browsing.

Features
Detects suspicious keywords and structures in URLs

Alerts users when a website exhibits phishing-like behavior

Provides a clean popup interface showing the current scan status

Uses Chrome's extension APIs (Manifest V3) for content injection and background event handling

Lightweight and privacy-friendly — no user data is stored or sent to external servers


Folder Structure
phishshield-extension/
─ background.js :Handles extension lifecycle events
─ content.js :Injected into webpages to analyze content and URLs
─ popup.html :User interface displayed when extension icon is clicked
─ popup.js :Logic for the popup UI
─ styles.css :Styling for the popup UI
─ manifest.json :Main configuration file for the Chrome extension
─ icons/         



