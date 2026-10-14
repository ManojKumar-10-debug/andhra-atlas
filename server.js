// Local development server for the plain HTML/CSS/JS site and Atlas chat API.
// Requires Node.js 18+; no npm packages are needed.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const port = Number(process.env.PORT) || 8080;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function loadLocalEnvironment() {
  const envPath = path.join(root, '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || match[1] in process.env) continue;
    const value = match[2].replace(/^(["'])(.*)\1$/, '$2');
    process.env[match[1]] = value;
  }
}

function sendJson(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 32_000) throw Object.assign(new Error('Request is too large.'), { status: 413 });
  }
  try {
    return JSON.parse(body || '{}');
  } catch {
    throw Object.assign(new Error('Please send a valid JSON request.'), { status: 400 });
  }
}

async function handleChat(request, response) {
  if (request.method !== 'POST') return sendJson(response, 405, { error: 'Use POST to send a chat message.' });
  const body = await readJson(request);
  const message = String(body.message || '').trim();
  if (!message) return sendJson(response, 400, { error: 'Please enter a question.' });
  if (!process.env.OPENAI_API_KEY) {
    return sendJson(response, 503, { error: 'Chat is not configured yet. Add OPENAI_API_KEY to .env.local and restart the server.' });
  }

  const upstream = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
      instructions: 'You are Atlas, a practical, warm travel guide for Andhra Pradesh, India. Help first-time visitors with realistic itineraries, regional transport, seasons, stays, food and bike-rental safety. Do not pretend to know live prices or availability. Clearly suggest verifying booking details. Keep answers concise, structured and helpful.',
      input: message,
    }),
  });

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    const upstreamMessage = data.error?.message || `OpenAI returned HTTP ${upstream.status}.`;
    console.error(`Atlas chat request failed (${upstream.status}): ${upstreamMessage}`);
    const messageForVisitor = upstream.status === 401
      ? 'The chat API key was rejected. Add a valid key to .env.local, then restart the server.'
      : upstream.status === 429
        ? 'The chat service is rate-limited or out of available API credit. Check your OpenAI API billing and limits.'
        : 'The chat service could not answer just now. Check the server terminal for details.';
    return sendJson(response, upstream.status === 401 || upstream.status === 429 ? upstream.status : 502, { error: messageForVisitor });
  }

  return sendJson(response, 200, { answer: data.output_text || 'I could not prepare that route right now.' });
}

function servePage(request, response, pathname) {
  let relativePath;
  try {
    relativePath = decodeURIComponent(pathname === '/' ? '/index.html' : pathname);
  } catch {
    response.writeHead(400).end('Invalid URL');
    return;
  }

  // Only publish the website entry point and its client-side assets.
  const filePath = path.resolve(root, `.${relativePath}`);
  const assetsRoot = path.join(root, 'assets') + path.sep;
  const isPage = relativePath === '/index.html';
  const isClientAsset = ['/style.css', '/script.js'].includes(relativePath) || filePath.startsWith(assetsRoot);
  if ((!isPage && !isClientAsset) || !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(404).end('Not found');
    return;
  }

  fs.readFile(filePath, (error, contents) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.code === 'ENOENT' ? 'Not found' : 'Could not read file');
      return;
    }
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    response.end(contents);
  });
}

loadLocalEnvironment();
const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  if (url.pathname === '/api/health' && request.method === 'GET') {
    return sendJson(response, 200, { ok: true, service: 'andhra-atlas-local' });
  }
  if (url.pathname === '/api/atlas-chat') {
    handleChat(request, response).catch((error) => {
      console.error('Atlas local server error:', error.message);
      sendJson(response, error.status || 502, { error: error.status ? error.message : 'The local chat server could not reach OpenAI. Check your internet connection and server terminal.' });
    });
    return;
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405).end('Method not allowed');
    return;
  }
  servePage(request, response, url.pathname);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`The Andhra Atlas Guide is running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server.');
});
