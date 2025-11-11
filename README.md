# Ikigai4Teens
## 🛠️ Tech Stack
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

![version](https://img.shields.io/badge/version-0.1.0-blue)
![license](https://img.shields.io/badge/license-MIT-lightgrey)

A full‑stack application to help teenagers discover career directions using guided questions and generative AI. The project consists of a Vite + React frontend and an Express + Node backend that integrates Google GenAI (Gemini) and persists chat history to MongoDB.

Key features
- Interactive chat powered by Google GenAI (Gemini)
- Authentication (signup/login) using JWT in an httpOnly cookie
- Persistent chat history stored per user in MongoDB
- Responsive React UI built with Vite and Tailwind-style utilities
- Small animated UI flourishes using GSAP

### Contents
- `Client/` — React frontend (Vite)
- `Server/` — Express backend with Mongoose models and AI integration

### Why this project is useful
- Helps teens explore interests, strengths and match them to potential careers.
- Demonstrates an end-to-end example of combining a modern frontend with a server that calls third-party generative AI and persists data.

Quick start (developer)

### Prerequisites

- Node.js 18+ (or current LTS)
- npm (comes with Node)
- A running MongoDB instance (Atlas or local)
- A Google GenAI API key (Gemini) if you want the AI chat to work

### 1) Clone

```powershell
git clone https://github.com/UtkarshSoni1/Ikigai4Teens.git
cd Ikigai4Teens
```

### 2) Install dependencies

Open two terminals (one for frontend, one for backend).

Frontend (Client)

```powershell
cd Client
npm install
npm run dev
# Vite dev server will run on http://localhost:5173 by default
```

Backend (Server)

```powershell
cd Server
npm install
# Start server
# Use nodemon if you prefer live reload (nodemon is included in dependencies)
node app.js
# or
npx nodemon app.js
# Server listens on PORT (default 5000)
```

### 3) Environment variables

Create a `.env` file in the `Server/` folder with the following values (example):

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/ikigai4teens?retryWrites=true&w=majority
JWT_KEY=your_jwt_secret_here
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=5000
```

### Notes
- The backend uses cookie-based auth (httpOnly cookie named `token`). The frontend axios instance (`Client/src/utils/api.js`) is configured with `withCredentials: true` so requests will include cookies.
- The frontend expects the backend to run at `http://localhost:5000` by default. Update `Client/src/utils/api.js` if you change the server host/port.

### API (useful endpoints)

- POST `/signUp` — register a user (body: { name, email, password })
- POST `/login` — login (body: { email, password })
- POST `/chat` — protected — send a user message and receive AI reply (requires cookie)
- GET `/chat` — protected — fetch stored chat history for logged-in user
- POST `/logout` — clear cookie
- GET `/user/profile` — protected — returns basic user info

### Frontend notes
- Client uses React + Vite and includes utilities in `Client/src/utils/`.
- Animations use GSAP (`gsap`) and ScrollTrigger for scroll‑based reveals (`Client/src/views/AboutUs.jsx`, `Client/src/views/FAQs.jsx`, `Client/src/views/Foreground.jsx`).
- Icons are from `lucide-react` and some components reuse Radix UI primitives.

### Development tips
- If you see CORS or cookie issues, ensure the backend `cors` origin (currently `http://localhost:5173`) matches where the frontend is served and `withCredentials` is enabled on requests.
- If you change server ports, update `Client/src/utils/api.js` baseURL.
- To run both front and backend in a single terminal you can use tools like `concurrently` or open two shells.

### Testing
- There are no automated tests included by default. Add unit/integration tests in `Client/` and `Server/` as needed.

### Where to get help
- File issues and feature requests via this repository's Issues page.
- For API-related or deployment questions, check the `Server/` controllers and `Server/config` files.

### Contributing
- Contributions are welcome. Please follow the repository's guidelines in `docs/CONTRIBUTING.md` (create one if missing) and open a pull request with a clear title and description. Keep changes small and focused.

### Maintainers
- Primary maintainer: UtkarshSoni1
- See `package.json` files in `Client/` and `Server/` for dependency details.

### License
- This project references a LICENSE file at the repository root. Please see `LICENSE` for full license text.

### Acknowledgements
- Built with React, Vite, Express, Mongoose and Google GenAI (Gemini).

### Ready to run?
- After following the steps above the app should be available at `http://localhost:5173` and you can sign up, login, and try the chat. If you want, I can also add a simple `docs/CONTRIBUTING.md`, CI badge, or a script to run both servers concurrently.

## Screenshots

- `Client/src/assets/screenshots/Home.png` — site landing / home view
- `Client/src/assets/screenshots/AboutUs.png` — About Us section
- `Client/src/assets/screenshots/chat.png` — Chat interface
- `Client/src/assets/screenshots/dashboard.png` — Dashboard
- `Client/src/assets/screenshots/FAQs.png` — FAQs


### Home Page
![Home view](Client/src/assets/ScreenShots/Home.png)

### About Us Page
![About section](Client/src/assets/ScreenShots/AboutUs.png)

### Chat Interface
![Chat interface](Client/src/assets/ScreenShots/chat.png)

### FAQs Page
![FAQs](Client/src/assets/ScreenShots/FAQs.png)

### DashBoard page ( coming soon )
![Dashboard](Client/src/assets/ScreenShots/dashboard.png)

