import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export async function getChatResponse(message: string) {
  try {
    const completion = await openai.chat.completions.create({
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
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error getting chat response:', error);
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again later.";
  }
}