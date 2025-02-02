import axios from "axios";

// Use the environment variable for the backend URL
const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:5000", // Backend URL from .env
});

// Function to fetch analogy from backend
const fetchAnalogy = async (concept: string): Promise<string> => {
  try {
    const response = await API.post("/", { concept });
    return response.data.analogy; // Ensure your backend returns 'analogy'
  } catch (error) {
    console.error("Error fetching analogy from backend:", error);
    throw new Error("Failed to fetch analogy from backend.");
  }
};

// Example usage in a component
export const handleFetchAnalogy = async () => {
  const concept = "photosynthesis"; // Replace with dynamic input if needed
  const analogy = await fetchAnalogy(concept);
  console.log(analogy); // Handle analogy here
};
