import { Box, Typography } from "@mui/material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box position="relative">
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgb(45,56,138), rgb(0,174,239),rgb(45,56,138))",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <Typography color="#fff" variant="caption">
          © {year} ARMATECH MAKİNA SAN. TİC. LTD. ŞTİ. Tüm Hakları Saklıdır
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
