# Architecture Overview

## Frontend (React + Vite)

- **Component-Based Architecture**: Separation into `common`, `layout`, and feature-specific folders (`home`, `products`).
- **Routing**: `react-router-dom` handling page transitions.
- **Styling**: Standard CSS Modules combined with global CSS variables for design system consistency.

## Backend (Node.js + Express)

- **Layered Architecture**:
  - Routes -> Controllers -> Services -> Models -> MongoDB
- **Error Handling**: Centralized error middleware handling operational errors gracefully.

## Principles

- **Separation of Concerns**: UI logic stays in client, business logic in server.
- **Security First**: Secrets managed via environment variables.
