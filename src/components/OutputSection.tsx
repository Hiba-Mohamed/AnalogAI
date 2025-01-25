import { Box, Typography, CircularProgress, Alert } from "@mui/material";

// Update the OutputSectionProps interface to include loading and error props
interface OutputSectionProps {
  analogy: string;
  loading: boolean;
  error: string | null;
}

const OutputSection = ({ analogy, loading, error }: OutputSectionProps) => {
  return (
    <Box>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}

      {analogy && !loading && !error && (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Generated Analogy:</Typography>
          <Typography>{analogy}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default OutputSection;
