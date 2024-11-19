import { Box } from "@mui/material";
import FallbackImage from "../../assets/images/fallback-image.webp";

const Banner = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/OS_UW8W7oJ4?autoplay=1&mute=1&loop=1&playlist=OS_UW8W7oJ4&controls=0&rel=0"
        width="100%"
        height="100%"
        style={{
          border: "none",
          objectFit: "cover",
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Banner Video"
      ></iframe>
      {/* Fallback Image */}
      <Box
        component="img"
        src={FallbackImage}
        alt="Fallback Banner"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Banner;
