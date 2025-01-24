import { Box, Typography, Paper } from "@mui/material";

interface OutputSectionProps {
  analogy: string;
}

const OutputSection: React.FC<OutputSectionProps> = ({ analogy }) => (
  <Box mt={4} display="flex" justifyContent="center">
    <Paper elevation={3} sx={{ p: 2, width: "100%", maxWidth: 600 }}>
      <Typography variant="h6">Generated Analogy:</Typography>
      <Typography variant="body1" mt={2}>
        {analogy || "Your analogy will appear here!"}
      </Typography>
    </Paper>
  </Box>
);

export default OutputSection;
