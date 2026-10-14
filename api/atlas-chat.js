// Vercel serverless function. Set OPENAI_API_KEY in private environment settings.
// This CommonJS file keeps the project framework-free and needs no package install.
module.exports = async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });

  const message = String(request.body?.message || '').trim();
  if (!message) return response.status(400).json({ error: 'A question is required.' });
  if (!process.env.OPENAI_API_KEY) return response.status(503).json({ error: 'Trip planner is not configured.' });

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        instructions: `You are Atlas, a practical, warm travel guide for Andhra Pradesh, India. Help first-time visitors with realistic itineraries, regional transport, seasons, stays, food and bike-rental safety. Do not pretend to know live prices or availability. Clearly suggest verifying booking details. Keep answers concise, structured and helpful.`,
        input: message,
      }),
    });

    if (!openaiResponse.ok) throw new Error(`OpenAI request failed: ${openaiResponse.status}`);
    const payload = await openaiResponse.json();
    return response.status(200).json({ answer: payload.output_text || 'I could not prepare that route right now.' });
  } catch (error) {
    console.error('Atlas chat error', error);
    return response.status(502).json({ error: 'Atlas is temporarily unavailable. Please try again shortly.' });
  }
};
