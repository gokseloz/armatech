import { Box, Typography, Button } from "@mui/material";
import styled from "@mui/system/styled";

const SuccessContainer = styled(Box)({
  maxWidth: "600px",
  margin: "auto",
  marginTop: "7rem",
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  textAlign: "center",
});

const SuccessPage = () => {
  return (
    <SuccessContainer>
      <Typography variant="h4" marginBottom={2}>
        Mesajınız Gönderildi!
      </Typography>
      <Typography variant="body1" marginBottom={4}>
        Mesajınızı aldık, en kısa sürede size geri dönüş yapacağız. Teşekkür
        ederiz!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/" // Redirect back to the homepage
      >
        Ana Sayfaya Dön
      </Button>
    </SuccessContainer>
  );
};

export default SuccessPage;
