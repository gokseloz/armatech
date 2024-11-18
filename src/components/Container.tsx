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
    <Box sx={sx} maxWidth="1440px" marginInline="auto" mt={12} px={5}>
      {children}
    </Box>
  );
};

export default Container;