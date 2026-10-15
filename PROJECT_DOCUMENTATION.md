# The Andhra Atlas Guide

## Project overview

The Andhra Atlas Guide is a responsive travel website that introduces first-time visitors to Andhra Pradesh. It brings together destination guides, regional travel ideas, weather information, and simple trip-planning tools in one place.

The goal is to help visitors discover what the state offers—from beaches and hill country to temples, heritage sites, forests, caves, food, and cultural festivals—and make a useful starting plan for a trip.

## Intended users

The site is designed for people visiting Andhra Pradesh for the first time, as well as travelers who want to explore a particular district or plan a short regional trip. It offers ideas and planning tools; it is not a booking or live-navigation service.

## Technologies used

The website interface is built with standard web technologies:

- **HTML** provides the page structure.
- **CSS** provides the layout, responsive design, themes, typography, and visual effects.
- **Vanilla JavaScript** powers the interactions and browser-side features.
- **Browser local storage** remembers selected places, trip plans, notes, and budget details on the visitor’s device.
- **Open-Meteo** supplies weather forecasts through its public API.
- **Google Maps links** open directions in Google Maps in a new tab.
- **Google Fonts** supplies the Space Grotesk, Fraunces, and Noto Sans Telugu typefaces.
- Destination photography is loaded from online image sources; the Andhra cultural emblem is stored in the project’s assets.

There is no frontend framework, build step, or npm package dependency.

### Optional chat service

The main website features run in the browser. The **Ask Atlas** AI chat is the exception: it needs a small JavaScript server endpoint so the OpenAI API key is not exposed in the website’s browser code.

The project includes:

- `server.js` for local development and the local chat endpoint.
- `api/atlas-chat.js` for the chat endpoint when deployed on Vercel.
- `.env.example` as a template for private server configuration.

The chat uses the OpenAI Responses API. It can help with itinerary ideas, transport, places to stay, food, and rental questions, but it should not be treated as a source of live prices or availability.

## Main website features

### Discover destinations

Visitors can browse destination cards, search for places or districts, and filter by interests such as heritage, temples, beaches, forests, caves, nature, rivers, culture, and wildlife. A district explorer lists all 28 Andhra Pradesh districts grouped by region. The number of detailed destination guides varies by district.

Each detailed place guide can include:

- A history and introduction to the place.
- Highlights and visitor tips.
- The best time to visit and an estimated time needed.
- Getting-there information.
- Links to Google Maps and an official tourism reference.
- Suggestions for other places in the same district or region, where available.

Visitors can also save favorite places in the browser.

### Weather

The live weather panel uses Open-Meteo for Visakhapatnam, Vijayawada, Tirupati, Araku Valley, Rajamahendravaram, Kakinada, and Kurnool. It displays current conditions and a seven-day forecast, including temperature, humidity, wind, precipitation, and rain probability. Weather-aware travel tips use the forecast already shown on the site.

Forecasts are model estimates, not exact local observations. Conditions can change, particularly for showers, storms, and coastal activities; travelers should check local conditions and official alerts before setting out.

### Trip planning

The regional itinerary planner asks visitors to choose a route, trip length, interests, and starting city. It then creates a suggested day-by-day outline using destination information already included in the project.

Each suggested day can include the destination’s highlights, visitor advice, a place guide, and a Google Maps directions link. Visitors can save a plan in the browser, share it using a link, or print it from the browser.

There is also a custom trip list. Visitors can add places from destination cards, reorder or remove stops, and open a Google Maps route for their selected stops.

### Trip kit and budget

The travel checklist helps visitors track essentials and add personal trip notes. The budget tracker lets them enter an overall budget and estimates for transport, accommodation, food, activities, and other costs. These tools save information in the current browser on the current device; they do not create an account or process payments.

### Language, appearance, and accessibility

The site includes an English/Telugu toggle and a light/dark theme control. Some detailed destination descriptions may remain in English.

The layout adapts to smaller screens. Accessibility features include keyboard focus indicators, labels for interactive controls, live status announcements, and support for reduced-motion preferences.

## Project files

- `index.html` — page entry point and font/style references.
- `style.css` — visual design, responsive layouts, themes, and animations.
- `script.js` — destination content, page rendering, interactions, weather, trip planner, and browser storage.
- `assets/` — locally stored brand image assets, including the Andhra emblem.
- `server.js` — optional local server and chat endpoint.
- `api/atlas-chat.js` — serverless chat endpoint for Vercel.
- `.env.example` — names of optional private server settings.
- `.gitignore` — excludes local secrets and generated folders.
- `README.md` — run instructions and additional setup information.

## Running the project

For the complete local site, including the chat endpoint:

1. Install Node.js 18 or newer.
2. Open a terminal in the project folder.
3. Run `node server.js`.
4. Open `http://localhost:8080` in a browser.

The frontend does not need a framework or package installation. Weather and online images need an internet connection. The chat also needs the server to be running and a valid API key stored privately in `.env.local`. For Vercel, configure `OPENAI_API_KEY` in the project’s private environment settings.

## Important limitations and privacy

- Itineraries are curated suggestions, not live route optimization or confirmed schedules.
- Google Maps links provide directions, but the website does not operate an embedded navigation system.
- Hotel, rental, transport, and booking availability are not verified by the website.
- Weather forecasts are estimates and should not be used as official safety alerts.
- Browser-saved plans, favorites, notes, and budget figures stay in that browser on that device. Clearing browser data can remove them; they do not sync between devices.
- The optional chat sends the visitor’s question to the configured server, which forwards it to OpenAI. The API key should remain on the server and must never be placed in `script.js`.

**Security reminder:** An API key was pasted into an earlier conversation. Treat that key as exposed: revoke it and create a fresh key before enabling chat again. Store the replacement only in the private server environment, never in frontend code or a public document.

## Short project description

**The Andhra Atlas Guide is a responsive, browser-first tourism website that helps first-time visitors discover Andhra Pradesh, explore places by interest and district, check a seven-day forecast, and create a personal trip plan.**
