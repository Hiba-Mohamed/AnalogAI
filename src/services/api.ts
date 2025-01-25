import axios from "axios";

// Backend API setup
const API = axios.create({
  baseURL: "https://analogai.onrender.com/", // Replace with your backend URL
});

// OpenAI API setup
const API_KEY = process.env.OPENAI_API_KEY; // Use environment variable

if (!API_KEY) {
  throw new Error(
    "OpenAI API key is missing. Set REACT_APP_OPENAI_API_KEY in your Render environment variables."
  );
}

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Fetch analogy from your backend
export const fetchAnalogy = async (concept: string): Promise<string> => {
  try {
    const response = await API.post("/generate-analogy", { concept });
    return response.data.analogy; // Ensure your backend returns `analogy` in the response
  } catch (error) {
    console.error("Error fetching analogy from backend:", error);
    throw new Error("Failed to fetch analogy from the backend.");
  }
};

// Fetch analogy directly from OpenAI
export const fetchAnalogyFromOpenAI = async (
  concept: string
): Promise<string> => {
  try {
    const response = await openai.post("/chat/completions", {
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
      max_tokens: 60,
    });

    const analogy =
      response.data.choices[0]?.message?.content || "No analogy generated.";
    return analogy;
  } catch (error) {
    console.error("Error fetching analogy from OpenAI:", error);
    throw new Error("Failed to fetch analogy from OpenAI.");
  }
};
