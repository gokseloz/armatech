import { Box } from "@mui/material";
import BannerImage from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <Box height="100vh">
      <img
        src={BannerImage}
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default Banner;
