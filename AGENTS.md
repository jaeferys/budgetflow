# AGENTS.md

# Project Instructions

## Project Brief

Project name: **BudgetFlow**

Short description:
BudgetFlow is a personal budget tracking web app based on my existing 2026 spreadsheet budget tracker. The app will allow users to record daily expenses, organize them by category, view monthly summaries, and understand spending patterns through a simple dashboard.

Main goal:
Transform my spreadsheet-based budget tracker into a cleaner, easier, and more interactive web application that helps me monitor expenses, manage spending categories, and review monthly financial habits.

Target user:
The primary user is myself, a student/OJT intern who wants to track daily personal expenses such as food, transportation, school-related costs, trips, shopping, and other spending. The app should be simple enough for daily use and understandable for someone still learning web development.

Portfolio purpose:
This project should demonstrate practical skills in full-stack web development, database design, data visualization, CRUD operations, Git/GitHub workflow, deployment using Vercel, and possibly authentication later.

---

## Current Spreadsheet Inspiration

The original tracker is an Excel workbook with separate monthly sheets such as January, February, March, April, May, June, and July.

Each month is organized by weeks and days. Expenses are grouped into categories such as:

* Food & Drinks
* Transportation
* School
* Trips
* Shopping
* Others

The web app should preserve the idea of daily expense tracking by category, but improve the experience by making it more structured, searchable, and dashboard-based.

---

## Tech Stack

Frontend:
Next.js or React with Vite

Styling:
Tailwind CSS

Backend:
Next.js API routes or Supabase

Database:
Supabase PostgreSQL, SQLite, or local JSON during early development

Language/s:
TypeScript preferred, JavaScript acceptable for beginner-friendly setup

Important tools:
Git, GitHub, CLI Codex, Vercel, Supabase, npm, VS Code or terminal editor

---

## Recommended First Version

Build the first version as a simple web app with local or mock data first. Do not overcomplicate the project with authentication or advanced finance features at the beginning.

The first version should include:

1. Dashboard page
2. Add expense form
3. Expense list/table
4. Category summary
5. Monthly summary
6. Basic edit and delete functions
7. Simple responsive design
8. Deployment to Vercel

Authentication, recurring expenses, income tracking, savings goals, and export features can be added later.

---

## Core Features

### 1. Add Expense

Users should be able to add an expense with the following fields:

* Date
* Amount
* Category
* Description or note
* Payment method, optional
* Month, automatically derived from date
* Week, optional or automatically derived

Default categories:

* Food & Drinks
* Transportation
* School
* Trips
* Shopping
* Others

### 2. View Expenses

Users should be able to view expenses in a table or list.

The expense list should show:

* Date
* Category
* Description
* Amount
* Actions: Edit and Delete

The list should support filtering by:

* Month
* Category
* Date range

### 3. Dashboard

The dashboard should show:

* Total expenses for the current month
* Total expenses today
* Highest spending category
* Average daily spending
* Remaining budget if a monthly budget is set
* Category breakdown
* Recent expenses

### 4. Monthly Summary

The app should allow users to select a month and see:

* Total monthly spending
* Spending per category
* Highest expense
* Daily spending trend
* Weekly spending totals

### 5. Category Summary

The app should show how much was spent per category.

Example categories:

* Food & Drinks
* Transportation
* School
* Trips
* Shopping
* Others

This should be displayed using cards, a table, or a simple chart.

### 6. Edit and Delete Expense

Users should be able to update or remove expense records.

Use confirmation before deleting if possible.

---

## Future Features

Add these only after the first version works:

* User login/authentication
* Supabase database integration
* Monthly budget limit
* Savings goal
* Income tracking
* Export to CSV
* Import old Excel data
* Charts using Recharts or Chart.js
* Dark mode
* Mobile-first PWA version
* Recurring expenses
* Spending warnings when close to budget limit

---

## Data Model

Use this basic expense structure:

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

If using a database, the expenses table should include:

```sql
id uuid primary key default gen_random_uuid(),
date date not null,
amount numeric not null,
category text not null,
description text,
payment_method text,
created_at timestamp default now(),
updated_at timestamp
```

---

## Suggested Folder Structure

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
├── README.md
├── AGENTS.md
├── package.json
└── .gitignore
```

---

## Design Direction

The app should feel clean, simple, and student-friendly.

Use:

* A simple dashboard layout
* Soft colors
* Clear category labels
* Easy-to-read cards
* Mobile-responsive design
* Minimal clutter

Avoid:

* Overly complex finance terms
* Too many charts at the start
* Overdesigned UI
* Too many features before the basic tracker works

---

## Development Workflow for CLI Codex

Follow this workflow when building the project.

### Step 1: Create the project

Use a modern frontend setup.

Preferred command:

```bash
npx create-next-app@latest budgetflow
```

Recommended options:

* TypeScript: Yes
* Tailwind CSS: Yes
* App Router: Yes
* ESLint: Yes
* src directory: Optional
* Import alias: Yes

### Step 2: Initialize Git

```bash
cd budgetflow
git init
git add .
git commit -m "Initial project setup"
```

### Step 3: Create GitHub repository

Create a new GitHub repository named:

```txt
budgetflow
```

Then connect local project to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/budgetflow.git
git branch -M main
git push -u origin main
```

### Step 4: Build the first UI

Create the main dashboard page first.

Start with:

* App title
* Summary cards
* Add expense form
* Expense table
* Category summary

Use mock data before adding a real database.

### Step 5: Add expense logic

Create reusable functions for:

* Adding expenses
* Editing expenses
* Deleting expenses
* Computing total spending
* Grouping expenses by category
* Filtering by month

Keep calculations in:

```txt
lib/calculations.ts
```

### Step 6: Add persistence

Start with localStorage if needed.

After the app works locally, upgrade to Supabase.

### Step 7: Test locally

Run:

```bash
npm run dev
```

Check:

* The app loads correctly
* Expenses can be added
* Expenses appear in the table
* Totals update correctly
* Filters work
* No console errors appear

### Step 8: Push to GitHub

```bash
git add .
git commit -m "Build initial budget tracker UI"
git push
```

### Step 9: Deploy to Vercel

Connect the GitHub repository to Vercel.

Deployment steps:

1. Go to Vercel
2. Import the GitHub repository
3. Select the project
4. Keep default settings
5. Deploy

After deployment, add the Vercel link to the README.

---

## Coding Rules for Codex

When generating code, follow these rules:

1. Keep the code beginner-friendly and readable.
2. Explain major changes briefly.
3. Do not add too many features at once.
4. Prefer small, working updates.
5. Keep components reusable.
6. Use TypeScript types when possible.
7. Avoid unnecessary libraries unless they clearly help.
8. Do not remove working code unless needed.
9. Always keep the app runnable with `npm run dev`.
10. Update the README when important setup steps change.

---

## UI Requirements

The first dashboard should include:

* Header with project name
* Current month selector
* Total spending card
* Highest category card
* Average daily spending card
* Expense form
* Expense table
* Category breakdown section

The expense form should include:

* Date input
* Amount input
* Category dropdown
* Description input
* Submit button

The category dropdown should include:

```txt
Food & Drinks
Transportation
School
Trips
Shopping
Others
```

---

## Calculation Requirements

The app should calculate:

```ts
totalExpenses = sum of all expense amounts
monthlyExpenses = sum of expenses filtered by selected month
categoryTotal = sum of expenses grouped by category
averageDailySpending = monthlyExpenses / number of days with recorded expenses
highestCategory = category with the highest total spending
```

Handle empty data safely.

For example:

* If there are no expenses, total should be 0.
* If there are no spending days, average should be 0.
* If no category exists yet, highest category should show “No data yet.”

---

## README Requirements

The README should explain:

* What the project is
* Why it was made
* Features
* Tech stack
* Setup instructions
* Git workflow basics
* Deployment link
* Screenshots later

Suggested README sections:

```txt
# BudgetFlow

## About the Project

## Features

## Tech Stack

## Getting Started

## Running Locally

## Git and GitHub Workflow

## Deployment

## Future Improvements
```

---

## Milestones

### Milestone 1: Project Setup

* Next.js project created
* Tailwind working
* Git initialized
* GitHub repository connected

### Milestone 2: Static Dashboard

* Dashboard layout completed
* Summary cards displayed
* Mock expenses shown

### Milestone 3: Expense CRUD

* Add expense
* Edit expense
* Delete expense
* Expense table updates correctly

### Milestone 4: Summaries

* Total spending
* Monthly spending
* Category totals
* Highest category
* Average daily spending

### Milestone 5: Persistence

* Data saved using localStorage or Supabase
* Data remains after refresh

### Milestone 6: Deployment

* Project pushed to GitHub
* Project deployed on Vercel
* README updated with live link

---

## Important Notes

This project should be built step by step. The goal is not only to finish the budget tracker, but also to learn the full development workflow:

* Planning the app
* Coding through CLI Codex
* Understanding the file structure
* Using Git commits
* Pushing to GitHub
* Deploying to Vercel
* Improving the project over time

Prioritize a working simple version first before adding advanced features.

