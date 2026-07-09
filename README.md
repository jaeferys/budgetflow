# BudgetFlow

BudgetFlow is a personal budget tracking web application inspired by my original 2026 spreadsheet budget tracker. It is designed to make daily expense tracking easier, cleaner, and more interactive through a simple web dashboard.

This project is also part of my learning journey in web development, Git, GitHub, CLI Codex, and deployment using Vercel.

---

## About the Project

I originally tracked my expenses using an Excel budget tracker with monthly sheets and weekly expense tables. The spreadsheet helped me organize spending under categories such as food, transportation, school, trips, shopping, and others.

BudgetFlow transforms that spreadsheet idea into a web app where expenses can be added, viewed, filtered, summarized, and analyzed more easily.

The goal is to build a simple but useful personal finance tracker while learning the full development workflow from coding to deployment.

---

## Features

### Current Planned Features

* Add daily expenses
* View all recorded expenses
* Edit and delete expense records
* Filter expenses by month or category
* View total monthly spending
* View spending per category
* Display highest spending category
* Display average daily spending
* Show recent expenses
* Responsive dashboard layout

### Default Expense Categories

* Food & Drinks
* Transportation
* School
* Trips
* Shopping
* Others

---

## Tech Stack

This project currently uses the following technologies:

* **Next.js** – React framework for building the web app
* **TypeScript** – for safer and more readable code
* **Tailwind CSS** – for styling and responsive design
* **Mock data** – starter records for the first dashboard version
* **localStorage** – saves expenses in the browser after refresh
* **Supabase** – possible future database and authentication
* **Git and GitHub** – for version control
* **Vercel** – for deployment

---

## Project Goals

The main goals of BudgetFlow are:

1. Convert a spreadsheet-based budget tracker into a web application.
2. Practice building a simple full-stack or frontend-focused project.
3. Learn how to use CLI Codex for guided development.
4. Learn proper Git and GitHub workflow.
5. Deploy the final project on Vercel.
6. Create a portfolio-ready personal project.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* A GitHub account
* A Vercel account

To check if Node.js and npm are installed, run:

```bash
node -v
npm -v
```

To check if Git is installed, run:

```bash
git --version
```

---

## Installation

This repository is currently set up as a Next.js app at the project root.

Clone the repository:

```bash
git clone https://github.com/jaeferys/budgetflow.git
```

Go to the project folder:

```bash
cd budgetflow
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```txt
http://localhost:3000
```

---

## Basic Git Workflow

After making changes, use the following commands:

```bash
git status
```

Add changed files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Describe the change made"
```

Push changes to GitHub:

```bash
git push
```

Example:

```bash
git add .
git commit -m "Add expense dashboard layout"
git push
```

---

## Deployment

This project is intended to be deployed using Vercel.

GitHub repository:

```txt
https://github.com/jaeferys/budgetflow
```

### Deployment Steps

1. Push the project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Keep the default project settings.
5. Click Deploy.
6. Copy the live deployment link.
7. Add the live link to this README.

Live Demo:

```txt
https://budgetflow-amber.vercel.app
```

---

## Project Structure

Suggested folder structure:

```txt
budgetflow/
├── app/
│   ├── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── expenses/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── ExpenseForm.tsx
│   ├── ExpenseTable.tsx
│   ├── SummaryCards.tsx
│   ├── CategoryChart.tsx
│   └── MonthFilter.tsx
├── lib/
│   ├── data.ts
│   ├── calculations.ts
│   └── utils.ts
├── types/
│   └── expense.ts
├── public/
├── AGENTS.md
├── README.md
├── package.json
└── .gitignore
```

---

## Expense Data Model

Each expense record should follow this basic structure:

```ts
type Expense = {
  id: string;
  date: string;
  amount: number;
  category: "Food & Drinks" | "Transportation" | "School" | "Trips" | "Shopping" | "Others";
  description?: string;
  paymentMethod?: string;
  createdAt: string;
  updatedAt?: string;
};
```

---

## Development Milestones

### Milestone 1: Project Setup

* Create the Next.js project
* Set up Tailwind CSS
* Initialize Git
* Push the project to GitHub

### Milestone 2: Static Dashboard

* Create a clean dashboard layout
* Add summary cards
* Display mock expense data
* Add category sections

### Milestone 3: Expense CRUD

* Add expense form
* Create new expense records
* Edit existing expense records
* Delete expenses

### Milestone 4: Summaries and Calculations

* Calculate total expenses
* Calculate monthly spending
* Calculate category totals
* Identify highest spending category
* Calculate average daily spending

### Milestone 5: Data Persistence

* Save data using localStorage first
* Optionally migrate to Supabase later

### Milestone 6: Deployment

* Push final version to GitHub
* Deploy using Vercel
* Update README with live link

---

## Future Improvements

Possible features to add in the future:

* User authentication
* Supabase database integration
* Monthly budget limits
* Income tracking
* Savings goals
* Export to CSV
* Import old Excel data
* Charts and visual reports
* Dark mode
* Mobile-first PWA support
* Recurring expenses
* Budget warnings

---

## Learning Notes

This project is not only about creating a budget tracker. It is also a practice project for learning how to:

* Plan a web app
* Build reusable components
* Manage data in a frontend app
* Use CLI Codex effectively
* Commit and push changes with Git
* Manage a GitHub repository
* Deploy a project to Vercel
* Improve a project step by step

The first priority is to create a simple working version before adding advanced features.

---

## Current Status

The first version has a working dashboard with starter mock expenses, summary
cards, an add expense form, a delete action, browser localStorage persistence,
a recent expenses table, and a category breakdown.

## Author

Created by **Jeff Ronyl R. Pausal**

Computer Science student learning web development, data analysis, and practical software project deployment.
