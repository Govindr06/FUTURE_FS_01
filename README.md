# FUTURE_FS_01 - Personal Portfolio Website

A modern personal portfolio website built for the Future Interns Full Stack Web Development task. The site presents my professional profile, technical skills, education, internship experience, featured projects, and a working contact form.

## Live Demo

Hosted on Vercel:

https://future-fs-01-lime-one.vercel.app/

## About

This portfolio belongs to **Govind Rajeshkumar Pillai**, a Full Stack Web Developer and Computer Science student at VIT Chennai. It is designed as a clean single-page application with smooth navigation, responsive layouts, and a professional visual style.

The content highlights:

- Current internship: Intern - Full Stack Web Development at Future Interns
- Education: B.Tech student at Vellore Institute of Technology, Chennai
- Projects: StudyGraph and University Event Dashboard
- Skills: React, JavaScript, Tailwind CSS, Flask, Node.js, PostgreSQL, JWT Authentication, LangGraph, REST APIs, and Git

## Features

- Responsive single-page portfolio layout
- Smooth-scroll navigation
- Professional hero section with social links
- Resume section with highlighted Future Interns internship
- Skills section with full stack technologies
- Portfolio gallery for featured projects
- Contact form integrated with EmailJS
- Success and loading feedback for form submission
- SEO-friendly HTML metadata
- Hosted deployment through Vercel

## Tech Stack

- React
- Vite
- Tailwind CSS
- EmailJS Browser SDK
- JavaScript
- HTML5
- Vercel

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Govindr06/FUTURE_FS_01.git
```

### 2. Navigate to the Project Folder

```bash
cd FUTURE_FS_01
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will run locally at the URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production-ready build in the `dist` folder.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

## Project Structure

```text
FUTURE_FS_01/
├── public/
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Resume.jsx
│   │   └── SectionHeading.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Main Components

- `Header.jsx`: Sticky navigation with smooth scrolling and social links.
- `Hero.jsx`: Professional introduction, headline, summary, and quick links.
- `Resume.jsx`: Experience, education, and core skills. The Future Interns internship is clearly highlighted.
- `Portfolio.jsx`: Project cards for StudyGraph and University Event Dashboard.
- `Contact.jsx`: EmailJS-powered contact form with loading, success, and error states.
- `Footer.jsx`: Footer with name, role, and social profile links.

## Contact Form

The contact form uses `@emailjs/browser` to send email notifications from the frontend. It includes:

- Controlled form inputs
- `useRef` for capturing the form node
- `emailjs.sendForm()` for submission
- Loading text while the message is being sent
- Success/error feedback after submission
- Automatic form clearing after a successful send

## Featured Projects

### StudyGraph

A personalized AI teaching platform that breaks down complex concepts based on a user's desired study timeline.

Tech stack: Flask, LangGraph, Grok API, HTML, CSS, JavaScript, Neon PostgreSQL.

### University Event Dashboard

A role-based dashboard for administrators to manage event logistics and for students to securely register for confirmed university events.

Tech stack: HTML, CSS, JavaScript, Node.js, JSON.

## Deployment

This project is deployed on Vercel:

https://future-fs-01-lime-one.vercel.app/

To deploy updates, push changes to the connected GitHub repository and let Vercel build the latest version automatically.

## Author

**Govind Rajeshkumar Pillai**

- GitHub: https://github.com/Govindr06
- LinkedIn: https://www.linkedin.com/in/govind-rajeshkumar-pillai-b3bb49321

