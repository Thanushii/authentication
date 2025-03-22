# React Authentication Application

A modern authentication application built with React, TypeScript, and Firebase.

## Features

- User authentication with Firebase
- Clean and responsive UI using Tailwind CSS
- TypeScript for type safety
- React Router for navigation
- Vite for fast development experience

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd authentication
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication in your Firebase project
   - Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

## Project Structure

```
src/
├── App.tsx          # Main application component
├── Login.tsx        # Login component
├── components/      # Reusable components
├── styles/          # Global styles
└── utils/          # Utility functions