import { Box, SxProps, Theme } from "@mui/material";

import { ReactNode } from "react";

const Container = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      id="container"
      sx={sx}
      maxWidth="1440px"
      marginInline="auto"
      mt={12}
      px={{
        xs: 2,
        sm: 5,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
