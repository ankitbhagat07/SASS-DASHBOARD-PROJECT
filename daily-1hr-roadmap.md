# Daily 1-Hour Roadmap — Task/Project Management SaaS (MERN)

**Format:** ~12 weeks, 6 days/week, 1 hour/day. Each day has ONE concrete task. Don't move to the next day until the current task actually runs.

---

## Week 1 — Project Setup & Backend Foundation
- **Day 1:** Init repo (backend + frontend folders), set up Node/Express server, connect MongoDB Atlas
- **Day 2:** Create Mongoose models: User, Project, Task, Comment
- **Day 3:** Set up basic Express routing structure (routes/controllers/models folders), test with Postman
- **Day 4:** Implement error-handling middleware (centralized error handler + custom error classes)
- **Day 5:** Add request validation with Zod or Joi for signup/login routes
- **Day 6:** Set up `.env`, config folder, and connect a logger (Morgan + Winston)

## Week 2 — Auth System
- **Day 1:** Build signup route with bcrypt password hashing
- **Day 2:** Build login route, issue JWT access token
- **Day 3:** Add JWT refresh token flow (access + refresh token pair, httpOnly cookie for refresh)
- **Day 4:** Build auth middleware to protect routes
- **Day 5:** Add role-based access control (admin/member roles on Project)
- **Day 6:** Add Google OAuth login (Passport.js or manual OAuth flow)

## Week 3 — Core CRUD (Projects & Tasks)
- **Day 1:** CRUD routes for Projects (create/read/update/delete)
- **Day 2:** CRUD routes for Tasks nested under Projects
- **Day 3:** Add task status field (todo/in-progress/done) + update endpoint
- **Day 4:** Add pagination to task list endpoint
- **Day 5:** Add filtering (by status, assignee) + search (by title) using Mongo queries
- **Day 6:** Write Postman collection covering all routes so far

## Week 4 — Frontend Foundation
- **Day 1:** Set up React app (Vite), routing (React Router), folder structure
- **Day 2:** Build login/signup pages, connect to backend auth routes
- **Day 3:** Set up Zustand or Redux Toolkit store for auth state
- **Day 4:** Build protected route wrapper (redirect if not logged in)
- **Day 5:** Set up React Query (TanStack Query) for API calls, replace manual fetch/useEffect
- **Day 6:** Build a basic dashboard layout (sidebar + navbar)

## Week 5 — Frontend Core Features
- **Day 1:** Build Projects list page (fetch via React Query)
- **Day 2:** Build Create Project form (React Hook Form + validation)
- **Day 3:** Build Project detail page showing tasks
- **Day 4:** Build Create/Edit Task form
- **Day 5:** Add drag-and-drop task board (react-beautiful-dnd or dnd-kit) for status columns
- **Day 6:** Wire up filtering/search UI to backend query params

## Week 6 — File Uploads & Comments
- **Day 1:** Add Multer middleware for file uploads on backend
- **Day 2:** Connect Cloudinary/S3 for storing uploaded files
- **Day 3:** Add file attachment UI on task detail page
- **Day 4:** Build Comment model + CRUD routes on tasks
- **Day 5:** Build comment UI (list + add comment) on task detail page
- **Day 6:** Add "assign user to task" feature (dropdown of project members)

## Week 7 — Real-Time Features
- **Day 1:** Set up Socket.io server, basic connection handling
- **Day 2:** Emit event when a task status changes; listen on frontend to update board live
- **Day 3:** Add real-time notifications (e.g., "You were assigned a task")
- **Day 4:** Add notification bell UI + notification list (stored in DB, marked read/unread)
- **Day 5:** Add typing indicator or live presence on a project (optional stretch)
- **Day 6:** Test real-time features with two browser sessions simultaneously

## Week 8 — Email & Background Jobs
- **Day 1:** Set up Nodemailer with a transactional email service (Gmail SMTP or Resend)
- **Day 2:** Add email verification flow on signup
- **Day 3:** Add password reset flow (forgot password → email link → reset)
- **Day 4:** Add node-cron job: daily digest email of tasks due today
- **Day 5:** Add due-date field on tasks + overdue task highlighting on frontend
- **Day 6:** Test full email flows end-to-end

## Week 9 — Payments (if adding a "Pro plan")
- **Day 1:** Set up Stripe account, install SDK, create test products/prices
- **Day 2:** Build checkout session endpoint (backend)
- **Day 3:** Build pricing page + "Upgrade" button on frontend
- **Day 4:** Handle Stripe webhook to update user's plan in DB
- **Day 5:** Gate a feature (e.g., more than 3 projects) behind the paid plan
- **Day 6:** Test full payment flow with Stripe test cards

## Week 10 — Testing
- **Day 1:** Set up Jest for backend, write tests for auth routes
- **Day 2:** Write tests for Project/Task CRUD routes
- **Day 3:** Set up React Testing Library, test login form
- **Day 4:** Test protected route behavior
- **Day 5:** Test a key component (task board or create-task form)
- **Day 6:** Set up test coverage report, aim for critical-path coverage

## Week 11 — DevOps & Deployment
- **Day 1:** Write Dockerfile for backend
- **Day 2:** Write Dockerfile for frontend + docker-compose.yml linking both + DB
- **Day 3:** Deploy backend to Render/Railway, set env vars
- **Day 4:** Deploy frontend to Vercel/Netlify, connect to deployed backend
- **Day 5:** Set up GitHub Actions CI: run tests on every push
- **Day 6:** Add CD step: auto-deploy on merge to main

## Week 12 — Polish & Documentation
- **Day 1:** Add Swagger/OpenAPI docs for backend API
- **Day 2:** Write a proper README (setup steps, tech stack, screenshots)
- **Day 3:** Add a simple architecture diagram (draw.io or Excalidraw) to README
- **Day 4:** Do a UI pass — fix spacing, loading states, empty states
- **Day 5:** Add error boundary + 404 page on frontend
- **Day 6:** Record a 2-3 min demo video walking through the app

---

## Rules to actually stick to this
1. **1 task = 1 day.** If you don't finish in an hour, commit what you have and continue tomorrow — don't skip ahead.
2. **Push to GitHub daily.** Even a small commit. This becomes your consistency proof for recruiters.
3. **If a day's task depends on something broken from before,** fix that first — don't stack broken code.
4. **Skip Week 9 (Payments)** if you want to move faster — it's the most optional block for a portfolio piece (but strong for interviews if you keep it).
