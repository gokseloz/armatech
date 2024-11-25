import styled from "@mui/system/styled";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import Logo from "../../assets/images/armatech-logo-opac.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BannerContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledIframe = styled("iframe")({
  width: "100%",
  aspectRatio: "16 / 9",
  border: "none",
  objectFit: "cover",
});

const BannerLogo = styled(Box)(({ theme }) => ({
  width: "120px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  animation: `${fadeIn} 1.5s ease-in-out`,
  [theme.breakpoints.down("md")]: {
    width: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60px",
  },
}));

const Banner = () => {
  return (
    <BannerContainer>
      <StyledIframe
        src="https://www.youtube.com/embed/O9aKS1BW95s?autoplay=1&mute=1&loop=1&playlist=O9aKS1BW95s&controls=0&rel=0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Banner Video"
      />
      <BannerLogo id="haha" sx={{ cursor: "pointer" }}>
        <img src={Logo} width="100%" />
      </BannerLogo>
    </BannerContainer>
  );
};

export default Banner;
