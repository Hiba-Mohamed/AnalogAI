import { Box, Typography} from "@mui/material";

const Footer: React.FC = () => (
  <Box
    mt={4}
    py={2}
    textAlign="center"
    sx={{ background: "linear-gradient(90deg, #FFFBFF,rgb(230, 247, 247))" }}
    color="black"
  >
    <Typography variant="body2">
      Built By Hiba Mohamed

    </Typography>
  </Box>
);

export default Footer;
