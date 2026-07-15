# TaskFlow Pro - Team Project Management Dashboard

A React.js Single Page Application (SPA) for managing projects, tasks, and team members, built as part of the Advanced Full-Stack Software Development program at PrimeTek Africa - Codecamp Academy.

---

## Project Description

TaskFlow Pro is a professional project management dashboard that allows users to create and organize projects, manage tasks, assign team members, and track progress through an intuitive, responsive interface. Inspired by tools like Trello, Jira, Monday.com, and Asana, the application focuses on demonstrating mastery of core React.js concepts — including component architecture, state management, routing, and forms — entirely on the client side, with all data managed using React State.

The dashboard gives users a clear overview of their workload at a glance, while the Projects, Tasks, and Team pages provide detailed views for day-to-day management of work.

---

## Features

- **Dashboard Overview** — View total projects, total tasks, completed tasks, pending tasks, and team members through summary statistic cards that update automatically as data changes.
- **Project Management** — Create, edit, and delete projects, each with a name, description, status, and due date.
- **Project Details** — View individual project information, its associated tasks, and a calculated progress percentage.
- **Task Management** — Create, edit, delete, and mark tasks as complete. Each task includes a title, description, priority, status, assigned member, and due date.
- **Task Details** — View full task information and update its status or details from a dedicated page.
- **Search** — Search tasks by title or description.
- **Filtering** — Filter tasks by status and priority.
- **Team Page** — View team members as cards, including name, role, email, and avatar.
- **About Page** — Project description, team members, and technologies used.
- **Responsive Design** — Fully usable on desktop, tablet, and mobile devices.
- **Client-Side Routing** — Seamless navigation between pages without full page reloads.

---

## Technologies Used

- **React.js** — Functional components, JSX, and component composition
- **React Router DOM** — `BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`, `useParams`
- **React Hooks** — `useState`, `useEffect`
- **Bootstrap 5** — Responsive layout and base styling
- **CSS Modules / Custom CSS** — Component-level and custom styling
- **JavaScript (ES6+)**
- **npm** — Package management

---

## Installation Instructions

Follow these steps to run the project locally:

1. **Create the project with Vite**

   ```bash
   npm create vite@latest React-taskflow-project-management
   ```

   When prompted, select:
   - Framework: **React**
   - Variant: **JavaScript**

   Then move into the project folder:

   ```bash
   cd taskflow-pro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install additional packages**

   ```bash
   npm install react-router-dom bootstrap
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the application**

   Visit `http://localhost:5173` in your browser.

---

## Team Members

**Group 4**

| David Amani       | Moses Otieno   | Delphin Muhindo |
| ----------------- | -------------- | --------------- |
| SearchBar.jsx     | MemberCard.jsx | -               |
| Sidebar           | Model.jsx      | -               |
| StatisticCard.jsx | Navbar.jsx     | -               |
| TaskCard.jsx      | ProjecCard.jsx | -               |

---


TO  DO LIST :
in the team page we are supposed to add team members ,edit ,delete ,add image ,Email