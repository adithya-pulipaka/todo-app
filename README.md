This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Setup Firebase. Install Firebase CLI and intialize in your repository.

```bash
firebase init
```

- setup emulators for firestore

```
firebase init emulators
```

- setup the environment variables for firebase in .env file

```bash
NEXT_PUBLIC_API_KEY
NEXT_PUBLIC_AUTH_DOMAIN
NEXT_PUBLIC_PROJECT_ID
NEXT_PUBLIC_APP_ID
```

- Run the emulators followed by the app

```
firebase emulators:start

npm run dev
```

## Features

- Priority
- Labels/Tags
- Custom Boards
- Dashboards
- Filters
- Logo with Quick Add and Quick Search
- Account Login
- Account Settings
