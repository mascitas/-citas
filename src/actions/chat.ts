"use server";

import { chatSimulator } from "@/ai/flows/chat-simulator";

// This is a placeholder for a real chat backend.
// In this simulation, we are not using AI to respond.
export async function sendChatMessage(message: string, senderId: string, matchId: string) {
  // In a real application, this would save the message to a database.
  // For now, the state is handled in the AppContext.
  console.log(`Message from ${senderId} in match ${matchId}: ${message}`);
  
  // The AI chat simulator call is commented out to prevent build issues on Vercel.
  // To enable AI-powered chat responses, you would uncomment the following lines
  // and ensure you have a valid GEMINI_API_KEY in your environment variables.
  /*
  const aiResponse = await chatSimulator({
    personality: 'amigable', // Example personality
    message: message,
  });
  console.log('AI Response:', aiResponse.response);
  */
  
  return { success: true };
}
    
