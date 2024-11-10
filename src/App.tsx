import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import theme from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box id="Ana Sayfa">
          <Header />
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
