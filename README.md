# Goals — Pet Project Todo List

A small **React Native** goals app built with **Expo**. Add goals, tap to mark them done (with a quick check animation), and keep your list tidy — no empty entries allowed.

## Features

- **Add goals** — Open a modal, type your goal, add it. Empty or whitespace-only input is blocked.
- **Delete / complete** — Tap a goal to “complete” it: a checkmark appears, then the item animates out and is removed.
- **Empty state** — When there are no goals, a friendly message invites you to add your first one.
- **Styled UI** — Purple/violet theme, centered modal form, bottom “Add New Goal” button, and status bar that adapts to the screen (light/dark).
- **Expo defaults** — Splash and app colors aligned with the app theme.

## Tech Stack

- **Expo** (~54) — development and build
- **React Native** (0.81) — UI
- **React** 19 — state and components
- **expo-status-bar** — adaptive status bar

## Getting Started

**Prerequisites:** Node.js and npm (or yarn). For device/simulator: [Expo Go](https://expo.dev/go) or a local Android/iOS setup.

```bash
# Install dependencies
npm install

# Start the dev server
npm start
```

Then scan the QR code with Expo Go (Android) or the Camera app (iOS), or press `a` / `i` for Android/iOS simulator if configured.

**Other scripts:**

- `npm run android` — open on Android
- `npm run ios` — open on iOS
- `npm run web` — run in the browser
- `npm run format` — format code with Prettier
- `npm run format:check` — check formatting

## Project Structure

```
├── App.js              # Root: goals state, modal visibility, list + empty state
├── components/
│   ├── GoalInput.js    # Modal: input, Add Goal & Cancel
│   └── GoalItem.js     # Single goal row + delete animation
├── assets/             # Images, icons, splash
└── app.json            # Expo config (name, splash, colors)
```

---

_Pet project — no backend; goals live in memory for the session._
