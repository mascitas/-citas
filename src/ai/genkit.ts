import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Initialize plugins only if the API key is available.
// This prevents build errors in environments like Vercel where the key might not be set.
const plugins = [];
if (process.env.GEMINI_API_KEY) {
  plugins.push(googleAI());
}

export const ai = genkit({
  plugins,
  model: 'googleai/gemini-2.0-flash',
});
