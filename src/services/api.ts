import { OpenAI } from "openai";
import axios from "axios";
const API = axios.create({
  baseURL: "https://analogai.onrender.com/", // Replace with your backend URL
});

// Initialize the OpenAI instance using the API key from the environment
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Access the environment variable
});

// Function to fetch analogy
export async function fetchAnalogy(concept: string): Promise<string> {
  try {
    // Fallback to OpenAI API for analogy generation
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or 'gpt-4' for more advanced models
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who provides real-world analogies to explain concepts.",
        },
        {
          role: "user",
          content: `Please provide a simple real-world analogy to explain the concept: "${concept}".`,
        },
      ],
    });

    // Extract the generated analogy from the OpenAI response
    const analogy =
      response.choices[0]?.message?.content || "No analogy generated.";
    return analogy; // Return the analogy as a string
  } catch (error) {
    console.error("Error fetching analogy:", error);
    return "Error occurred while generating the analogy."; // Fallback error message
  }
}
