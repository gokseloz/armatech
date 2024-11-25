import React, { useState } from "react";
import { Box, Button, TextField, Typography, Snackbar } from "@mui/material";
import styled from "@mui/system/styled";
import theme from "../../theme";

const FormContainer = styled(Box)({
  maxWidth: "600px",
  margin: "auto",
  marginTop: "2rem",
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  boxShadow: theme.shadows[3],
  borderRadius: "8px",
});

const StyledButton = styled(Button)({
  marginTop: "1rem",
  color: "#fff",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer id="bize-ulasin">
      <Typography variant="h5" textAlign="center" marginBottom={2}>
        İletişim Formu
      </Typography>
      <form
        name="contact" // This defines the form name in Netlify UI
        data-netlify="true" // Enable Netlify form processing
        method="POST"
        action="/success"
      >
        <TextField
          label="Adınız"
          name="name"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="E-posta"
          name="email"
          type="email"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Mesajınız"
          name="message"
          fullWidth
          required
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
        />
        <StyledButton type="submit" variant="contained" fullWidth>
          Gönder
        </StyledButton>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Mesajınız başarıyla gönderildi!"
      />
    </FormContainer>
  );
};

export default ContactForm;
