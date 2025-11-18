 Companies Directory – React Frontend Application

A responsive React + Vite application that displays a list of companies with search, filters, sorting, pagination, and a details modal, built using Context API and TailwindCSS.

Project Overview:

This project was built as part of the Frontend Developer Assessment for Frontlines Media.

The application allows users to browse and filter a list of companies using a clean UI and modern React patterns.


Tech Stack:

| Category         | Technology       |
| ---------------- | ---------------- |
| Frontend         | React + Vite     |
| Styling          | TailwindCSS      |
| State Management | Context API      |
| Mock API         | Local JSON file  |
| Deployment       | Vercel |


Folder Structure:

company_directory/
├── public/
├── src/
│   ├── assets/
│   │   └── company.json
│   ├── Components/
│   │   ├── Companies.jsx
│   │   ├── CompanyCard.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   └── Pagination.jsx
│   ├── Context/
│   │   └── CompanyContext.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   └── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md


 Installation & Setup

Clone Repository

git clone https://github.com/samyukthateegala0499-dot/company_directory.git
cd company_directory


Install Dependencies

npm install


Run Development Server

npm run dev

Build for Production

npm run build

