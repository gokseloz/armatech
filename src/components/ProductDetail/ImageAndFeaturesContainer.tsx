import { Box } from "@mui/material";

const ImageAndFeaturesContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={{ xs: "center", sm: "flex-start" }}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={4}
      px={{ xs: 1, md: 8 }}
    >
      {children}
    </Box>
  );
};
export default ImageAndFeaturesContainer;
