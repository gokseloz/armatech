import React from "react";
import { Typography, Link, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import SingleMap from "./SingleMap";

// Styled components
const ContactSection = styled(Box)({
  marginTop: "2rem",
  paddingTop: "2rem",
  borderTop: "3px solid #ccc",
});

const ContactDetail = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
});

const Contact: React.FC = () => {
  return (
    <ContactSection id="İletişim">
      <Typography
        textAlign="center"
        variant="h3"
        gutterBottom
        fontWeight="bold"
      >
        İletişim
      </Typography>
      <Stack alignItems="center">
        <ContactDetail>
          <RoomIcon color="primary" fontSize="small" />
          <Typography variant="body1" ml={1}>
            Adalet Mah. Manas Bulvarı No:47/B, Folkart Towers A Kule, Kat:35
            Daire:3509, Bayraklı / İzmir 35530
          </Typography>
        </ContactDetail>

        <ContactDetail>
          <PhoneIcon color="primary" fontSize="small" />
          <Typography variant="body1" ml={1}>
            Telefon:{" "}
            <Link href="tel:+905434600869" underline="hover" color="inherit">
              0543 460 0869
            </Link>
          </Typography>
        </ContactDetail>

        <ContactDetail>
          <EmailIcon color="primary" fontSize="small" />
          <Typography variant="body1" ml={1}>
            Mail:{" "}
            <Link
              href="mailto:info@armatechmakina.com"
              underline="hover"
              color="inherit"
            >
              info@armatechmakina.com
            </Link>
          </Typography>
        </ContactDetail>

        <ContactDetail>
          <LanguageIcon color="primary" fontSize="small" />
          <Typography variant="body1" ml={1}>
            Web:{" "}
            <Link
              href="https://www.armatechmakina.com"
              underline="hover"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.armatechmakina.com
            </Link>
          </Typography>
        </ContactDetail>
      </Stack>
      <SingleMap />
    </ContactSection>
  );
};

export default Contact;
