import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import styled from "@mui/system/styled";
import theme from "../../theme";
import { useSnackbar } from "notistack";

const FormContainer = styled(Box)({
  maxWidth: "600px",
  margin: "2rem auto",
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
  const { enqueueSnackbar } = useSnackbar();
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return enqueueSnackbar("Lütfen tüm alanları doldurun.", {
        variant: "error",
      });
    }

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        enqueueSnackbar("Mesajınız başarıyla gönderildi!", {
          variant: "success",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        enqueueSnackbar("Mesaj gönderilirken bir hata oluştu.", {
          variant: "error",
        });
      }
    } catch (error) {
      console.error("Request error:", error);
      enqueueSnackbar("Mesaj gönderilirken bir hata oluştu.", {
        variant: "error",
      });
    }
  };

  return (
    <FormContainer id="bize-ulasin">
      <Typography variant="h5" textAlign="center" marginBottom={2}>
        İletişim Formu
      </Typography>
      <form>
        {/* Hidden input for Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

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
        <StyledButton
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          fullWidth
        >
          Gönder
        </StyledButton>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Mesajınız başarıyla gönderildi!
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

export default ContactForm;
