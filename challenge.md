# React.js Final Project

## Program Information

**Organization:** PrimeTek Africa - Codecamp Academy

**Program:** Advanced Full-Stack Software Development

**Module:** React.js

**Instructor:** Cristian Camilo Cortes Ortiz

**Instructor Role:** Systems Engineer & Full-Stack Software Development Instructor

## Project Title

TaskFlow Pro - Team Project Management Dashboard

---

# Groups

### Group 1:

- Alexandra
- Nhial Cham
- john Tongun
- Mac Denise

### Group 2:

- Jonathan Shebirongo
- Seth Kojo
- Panom Kot
- Yel mangok john

### Group 4:

- David Amani
- Dolphin Muhindo
- Moses Otieno

# Objective

In groups of **3 students**, design and develop a complete React.js
Single Page Application (SPA) that allows users to manage projects,
tasks, team members, and task progress.

The goal of this project is to demonstrate mastery of all React.js
concepts covered during the course while building a professional
frontend application.

This project intentionally focuses on React fundamentals and application
architecture rather than API consumption.

All data may be stored using React State.

---

# Team Structure

Each team must consist of exactly 3 students.

Recommended responsibilities:

# Project Description

Build a professional project management system where users can:

- Create projects
- Manage tasks
- Assign team members
- Track project progress
- View dashboard statistics
- Filter tasks
- Search tasks
- Navigate through multiple pages

The application should resemble a simplified version of:

- Trello
- Jira
- Monday.com
- Asana

---

# Required React Concepts

The project must demonstrate the use of:

## Components

- Functional Components
- Reusable Components
- Component Composition

## JSX

- JSX Syntax
- JSX Expressions

## Props

- Parent to Child Communication
- Reusable Prop-Driven Components

## State

- useState
- State Updates
- Derived State

## Effects

- useEffect

## Events

- Form Events
- Click Events
- Input Events

## Conditional Rendering

Examples:

- Empty States
- Loading States
- Status Badges

## Rendering Lists

- .map()
- Unique Keys

## Routing

- React Router DOM
- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- `useNavigate`
- `useParams`

## Forms

- Controlled Components
- Form Validation

## Styling

- Bootstrap
- CSS Modules
- Custom CSS

---

# Required Pages

---

## Dashboard Page

Route:

```text
/
```

Display:

- Total Projects
- Total Tasks
- Completed Tasks
- Pending Tasks
- Team Members

Display statistics using dashboard cards.

---

## Projects Page

Route:

```text
/projects
```

Display:

- Project List
- Create Project Form
- Edit Project
- Delete Project

Each project must contain:

```text
Project Name
Description
Status
Due Date
```

---

## Project Details Page

Route:

```text
/ projects / :id
```

Display:

- Project Information
- Associated Tasks
- Progress Percentage

---

## Tasks Page

Route:

```text
/tasks
```

Display:

- All Tasks
- Search Tasks
- Filter Tasks
- Create Task

Task fields:

```text
Title
Description
Priority
Status
Assigned Member
Due Date
```

---

## Task Details Page

Route:

```text
/tasks/:id
```

Display:

- Complete Task Information

Allow:

- Update Status
- Edit Task

---

## Team Page

Route:

```text
/team
```

Display:

- Team Members
- Member Cards

Fields:

```text
Name
Role
Email
Avatar
```

---

## About Page

Route:

```text
/about
```

Display:

- Project Description
- Team Members
- Technologies Used

---

# Required Components

Students must create reusable components.

Examples:

## Navbar

```text
Navbar.jsx
```

---

## Sidebar

```text
Sidebar.jsx
```

---

## Dashboard Card

```text
StatisticCard.jsx
```

---

## Project Card

```text
ProjectCard.jsx
```

---

## Task Card

```text
TaskCard.jsx
```

---

## Team Member Card

```text
MemberCard.jsx
```

---

## Search Bar

```text
SearchBar.jsx
```

---

## Modal Component

```text
Modal.jsx
```

---

# Required Features

## Project Management

Users must be able to:

- Create Projects
- Edit Projects
- Delete Projects

---

## Task Management

Users must be able to:

- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Complete

---

## Search Functionality

Allow users to search tasks by:

```text
Title
Description
```

---

## Filtering

Allow filtering by:

```text
Status
Priority
```

---

## Statistics Dashboard

Display:

```text
Total Projects
Total Tasks
Completed Tasks
Pending Tasks
```

Statistics should update automatically when data changes.

---

# UI Requirements

The application must:

- Be responsive
- Work on desktop
- Work on tablet
- Work on mobile

Use:

- Bootstrap 5
- Custom CSS

---

# Submission Requirements

Each team must submit:

## Source Code

GitHub Repository

---

## Documentation

README.md including:

- Project Description
- Features
- Technologies Used
- Installation Instructions
- Team Members

---

## Presentation

Prepare a 10-minute demonstration showing:

- Application Features
- React Concepts Used
- Challenges Encountered
- Lessons Learned

---

# Evaluation Criteria

| Category         | Weight |
| ---------------- | ------ |
| React Components | 20%    |
| State Management | 20%    |
| Routing          | 15%    |
| Forms & CRUD     | 15%    |
| UI/UX Design     | 15%    |
| Code Quality     | 10%    |
| Presentation     | 5%     |

---

# Goal

By completing this project, students should demonstrate the ability to
build a complete React.js Single Page Application using modern React
development practices, reusable components, client-side routing,
state management, forms, responsive design, and professional project
organization.
