import { Box } from "@mui/material";

import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <Box maxWidth="1440px" marginInline="auto" px={3}>
      {children}
    </Box>
  );
};

export default Container;
