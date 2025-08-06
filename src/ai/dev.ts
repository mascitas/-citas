// This file should only be used for local development with `genkit dev`.
// It is not intended for production builds.
if (process.env.NODE_ENV !== 'production') {
  const {config} = require('dotenv');
  config();
  require('@/ai/flows/chat-simulator.ts');
}
