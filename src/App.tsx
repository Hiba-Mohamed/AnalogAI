import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import Footer from "./components/Footer";
import { fetchAnalogy } from "./services/api";
import { Box } from "@mui/material";

function App() {
  const [analogy, setAnalogy] = useState("");

  const handleGenerate = async (input: string) => {
    try {
      const data = await fetchAnalogy(input);
      setAnalogy(data.analogy);
    } catch (error) {
      console.error("Error fetching analogy:", error);
    }
  };

  return (
    <Box>
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <InputSection onGenerate={handleGenerate} />
          <OutputSection analogy={analogy} />
        </Box>{" "}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
