import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBFyT3z2T6-NYKQGXTrUUEN-2MORjzpgD");

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function retryWithExponentialBackoff(
  operation: () => Promise<any>,
  maxRetries: number = 3,
  initialDelay: number = 1000
): Promise<any> {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      return await operation();
    } catch (error: any) {
      if (error?.status === 429 && retries < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, retries);
        console.log(`Rate limited. Retrying in ${delay}ms...`);
        await sleep(delay);
        retries++;
        continue;
      }
      throw error;
    }
  }
}

export async function getChatResponse(message: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await retryWithExponentialBackoff(async () => {
      const chat = await model.startChat({
        history: [
          {
            role: "user",
            parts: "You are a career counselor AI assistant. Provide professional, helpful advice about career development, job searching, and professional growth. Keep responses focused on career guidance.",
          }
        ],
      });

      const response = await chat.sendMessage(message);
      const text = await response.response.text();
      return text;
    });

    return result;
  } catch (error: any) {
    console.error('Error getting chat response:', error);
    if (error?.status === 429) {
      return "I apologize, but we've reached our API usage limit. Please try again later or contact support if this persists.";
    }
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again later.";
  }
}