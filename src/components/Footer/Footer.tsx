import { Box, Typography } from "@mui/material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      <Typography color="#fff" fontSize="0.75rem">
        © {year} ARMATECH MAKİNA SAN. TİC. LTD. ŞTİ. Tüm Hakları Saklıdır
      </Typography>
    </Box>
  );
};

export default Footer;
