import styled from "@mui/system/styled";
import { keyframes } from "@emotion/react";
import { Typography } from "@mui/material";

// Define the fade-in animation using keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
const BannerContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

const StyledIframe = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
  objectFit: "cover",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});

const BannerText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#b4b4b4",
  fontWeight: "bold",
  textAlign: "center",
  zIndex: 2,
  textShadow: "0px 9px 10px rgba(0, 0, 0, 0.7)",
  animation: `${fadeIn} 1.5s ease-in-out`, // Use the keyframes animation
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.5rem",
  },
}));

// Main Component
const Banner = () => {
  return (
    <BannerContainer>
      <StyledIframe
        src="https://www.youtube.com/embed/OS_UW8W7oJ4?autoplay=1&mute=1&loop=1&playlist=OS_UW8W7oJ4&controls=0&rel=0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Banner Video"
      />
      <Overlay />
      <BannerText variant="h6">ARMATECH CNC Çözümleri</BannerText>
    </BannerContainer>
  );
};

export default Banner;
