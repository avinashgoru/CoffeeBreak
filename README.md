# Coffee Break

Production-quality MERN application for an online coffee store.

## Technology Stack

- Frontend: React.js, Vite, React Router, CSS Modules
- Backend: Node.js, Express.js
- Database: MongoDB

## Development Setup

1. Clone the repository
2. Install dependencies at root, client, and server:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```
3. Copy `.env.example` to `server/.env` and update values.
4. Run concurrently from the root directory:
   ```bash
   npm run dev
   ```

## Client/Server Structure

- `client/`: React frontend application.
- `server/`: Express backend API.

See `docs/` for architecture, design system, and database design.
