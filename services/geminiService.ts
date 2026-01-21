
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches a response from the Lumina AI tutor.
 * Following @google/genai coding guidelines:
 * - Initialize GoogleGenAI inside the function using process.env.API_KEY directly.
 * - Use 'gemini-3-pro-preview' for complex educational and reasoning tasks.
 * - Access the response.text property directly.
 */
export const getTutorResponse = async (userMessage: string) => {
  // Use process.env.API_KEY directly as per guidelines.
  // Initializing the client instance inside the function ensures it uses the most up-to-date configuration.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      // gemini-3-pro-preview is selected for its advanced reasoning capabilities suitable for tutoring.
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are Lumina, an encouraging and expert AI tutor. Your goal is to help students understand complex concepts by breaking them down into simple steps. Use analogies and ask clarifying questions to ensure they grasp the material.",
        temperature: 0.7,
        // maxOutputTokens is omitted to prevent responses from being blocked or cut short during detailed explanations.
      },
    });

    // Directly access the .text property from the GenerateContentResponse.
    return response.text || "I'm sorry, I couldn't process that. Let's try another topic!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I hit a snag! Let's try again in a moment.";
  }
};
