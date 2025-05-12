import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

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
    const completion = await retryWithExponentialBackoff(() => 
      openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a career counselor AI assistant. Provide professional, helpful advice about career development, job searching, and professional growth. Keep responses focused on career guidance."
          },
          {
            role: "user",
            content: message
          }
        ],
        model: "gpt-3.5-turbo",
      })
    );

    return completion.choices[0].message.content;
  } catch (error: any) {
    console.error('Error getting chat response:', error);
    if (error?.status === 429) {
      return "I apologize, but we've reached our API usage limit. Please try again later or contact support if this persists.";
    }
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again later.";
  }
}