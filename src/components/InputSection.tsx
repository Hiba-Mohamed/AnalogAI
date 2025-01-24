import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const InputSection: React.FC<{ onGenerate: (input: string) => void }> = ({
  onGenerate,
}) => {
  const [input, setInput] = useState("");

  const handleGenerate = () => {
    if (input.trim()) onGenerate(input);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <TextField
        label="Enter a concept"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={handleGenerate}
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #8E2DB1,rgb(177, 106, 203))",
          color: "#fff",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          },
          transition: "all 0.3s ease",
        }}
      >
        Generate Analogy
      </Button>
    </Box>
  );
};

export default InputSection;
