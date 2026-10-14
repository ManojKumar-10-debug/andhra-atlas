# The Andhra Atlas Guide

A responsive single-page tourism guide for first-time visitors to Andhra Pradesh. The browser website is plain HTML, CSS, and JavaScript—no frontend framework or build step.

The main website files are `index.html`, `style.css`, and `script.js`. The `assets` folder contains the logo. `server.js` is only needed for the secure local chatbot; `api/atlas-chat.js` is the matching JavaScript endpoint for Vercel deployment.

## Run locally

The page, styles, logo, browser logic, and local development server use plain HTML, CSS, and JavaScript. There are no npm dependencies, framework, or build command. Install Node.js 18 or newer, then open a terminal in this folder and run:

```sh
node server.js
```

Open `http://localhost:8080`. Check `http://localhost:8080/api/health` to confirm the local server is running; it should return `{"ok":true,"service":"andhra-atlas-local"}`. This serves the website and the local `/api/atlas-chat` endpoint together. A static-only preview can show the website but cannot run the chatbot API. Open-Meteo weather requires an internet connection.

To enable chat locally, put a fresh OpenAI API key in the root `.env.local` file (copy the variable names from `.env.example`) and restart the server. Keep this key private; it is only read by the local server and is never included in browser JavaScript. The Vercel deployment continues to use `api/atlas-chat.js` and a private `OPENAI_API_KEY` environment variable.

## Live weather

The weather panel uses the public [Open-Meteo Forecast API](https://open-meteo.com/en/docs) and lets visitors choose Visakhapatnam, Vijayawada, Tirupati, Araku Valley, Rajamahendravaram, Kakinada, or Kurnool. It displays model-based current conditions, humidity, wind, precipitation, and a seven-day forecast with daily highs/lows, precipitation chance, and expected precipitation total. It refreshes on location change, on demand, and hourly while the page is open. No API key is required. Open-Meteo attribution is included in the panel.

Forecasts are estimates from numerical weather models, not exact neighborhood measurements or a promise that rain will occur at a specific spot. Local showers and thunderstorms can vary sharply over short distances, and uncertainty increases farther out in the forecast. Check current local observations and official alerts for time-critical travel decisions.

The free endpoint is for non-commercial use and requires CC BY 4.0 attribution. Open-Meteo currently lists a 10,000-request daily limit for its free API; a commercial tourism or booking product should use its commercial plan. See [Open-Meteo pricing and terms](https://open-meteo.com/en/pricing) and [terms](https://open-meteo.com/en/terms).

## OpenAI trip-planner chat

The floating **Ask Atlas** panel is deliberately designed not to accept an OpenAI key in the browser. To activate it:

1. Deploy this project on Vercel (the included `api/atlas-chat.js` is a small JavaScript serverless function) or host the same endpoint yourself.
2. In Vercel's private environment settings, set `OPENAI_API_KEY`. Optionally set `OPENAI_MODEL`; it defaults to `gpt-4.1-mini`.
3. The endpoint accepts `{ "message": "..." }` and returns `{ "answer": "..." }` at `/api/atlas-chat`.

The UI includes suggested prompts for a four-day circuit, Visakhapatnam stays, and bike-rental advice. The local `.env.local` file is excluded by `.gitignore`; use private deployment environment settings for production. The API key is never included in browser JavaScript.
