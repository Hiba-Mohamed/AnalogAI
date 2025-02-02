import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import axios from "axios";
import dotenv from "dotenv";

const App = () => {
  const [analogy, setAnalogy] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (input: string) => {
    setLoading(true);
    setError(null);
    dotenv.config();

    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    if (!API_KEY) {
      setError("OpenAI API key is missing.");
      setLoading(false);
      return;
    }

    try {
      // Make request to OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant who provides real-world analogies to explain concepts.",
            },
            {
              role: "user",
              content: `Please provide a simple real-world analogy to explain the concept: "${input}".`,
            },
          ],
          max_tokens: 60,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const analogy =
        response.data.choices[0]?.message?.content || "No analogy generated.";
      setAnalogy(analogy);
    } catch (error) {
      setError("Failed to fetch analogy. Please try again.");
      console.error("Error fetching analogy from OpenAI:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <InputSection onGenerate={handleGenerate} />
          <OutputSection analogy={analogy} loading={loading} error={error} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
