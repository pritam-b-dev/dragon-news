1. About Project

# 🐉 Dragon News

A modern, dynamic news portal web application where users can read and explore the latest breaking news. This project is built with a highly optimized tech stack focusing on secure authentication and dynamic data management.

---

## 📝 Description

**Dragon News** is a Next.js-based web application that allows readers to browse news from various categories. The application integrates **Better Auth** for secure social logins (Google, GitHub) and traditional email/password-based registration and authentication. **MongoDB** is used as the database for managing user sessions and application data.

---

## ✨ Features

- **Responsive UI:** Fully optimized for mobile, tablet, and desktop devices using Tailwind CSS and DaisyUI.
- **Secure Authentication:** One-click social login via Google and GitHub powered by Better Auth.
- **Email/Password Signup:** Robust form validation and manual registration using React Hook Form.
- **Dynamic Session Management:** Real-time user profile photo display and a logout option in the navbar when authenticated.
- **Theme Support:** Clean visual hierarchy utilizing DaisyUI's built-in light theme.
- **Fast Performance:** Next.js App Router for server-side rendering and faster page loads.

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS & DaisyUI
- **Icons:** React Icons

### Backend & Database

- **Database:** MongoDB (via official MongoDB driver)
- **Authentication:** Better Auth (with MongoDB adapter)
- **Forms:** React Hook Form

### Hosting & Deployment

- **Platform:** Vercel

---

## ⚙️ Local Setup Guide

Follow these steps to run the project locally on your machine:

### 1. Clone the repository

```bash
git clone [https://github.com/pritam-b-dev/dragon-news.git](https://github.com/pritam-b-dev/dragon-news.git)
cd dragon-news
```

2. Install dependencies

npm install

3. Setup Environment Variables
   Create a .env.local file in the root directory of your project and add the following keys:
   BETTER_AUTH_SECRET=your_better_auth_secret
   BETTER_AUTH_URL=http://localhost:3000

MONGO_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

4. Run the development server
   npm run dev

🚀 Deployment
When deploying to Vercel, make sure to add all the environment variables from your .env.local file in the Vercel project settings (Settings > Environment Variables).

⚠️ Important: Set the BETTER_AUTH_URL variable to your live production domain (e.g., https://your-app.vercel.app) instead of localhost.
