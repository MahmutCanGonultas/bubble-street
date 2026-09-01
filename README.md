# Bubble Street

A parody stock market where AI invents absurd companies and writes their news.

## What it is

Bubble Street is a fictional stock exchange. Around twenty invented companies —
a kebab delivery service that flies drones, a fintech built around prayer beads,
a metaverse carpet-cleaning startup — are traded with play money called _papel_.

Every night the market moves. An AI writes the day's absurd business news, and a
deterministic engine turns that news into new closing prices. The AI never
touches the numbers: it writes the text, the engine does the math.

What separates it from a single-player toy is that the market is shared and
cumulative. Prices are the same for everyone, positions survive the night, and
companies that go bankrupt stay buried.

## Tech stack

Node.js · TypeScript · Express

## Roadmap

- PostgreSQL with Drizzle ORM
- Authentication with email verification and password reset
- AI-generated market news with schema-validated output
- Trading, portfolio and leaderboard
- Deterministic nightly price engine running on cron
- Next.js frontend

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The server starts on http://localhost:3001

| Endpoint      | Description                                |
| ------------- | ------------------------------------------ |
| `GET /`       | Welcome message                            |
| `GET /health` | Health check, returns `{ "status": "ok" }` |

## Scripts

| Command          | What it does                      |
| ---------------- | --------------------------------- |
| `npm run dev`    | Start the server in watch mode    |
| `npm run build`  | Type-check and compile to `dist/` |
| `npm start`      | Run the compiled server           |
| `npm run lint`   | Run ESLint                        |
| `npm run format` | Format with Prettier              |

## License

MIT
