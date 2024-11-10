import { Box } from "@mui/material";
import About from "../components/About/About";
import ContactPage from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Box maxWidth="1300px" marginInline="auto" px={3}>
      <About />
      <ContactPage />
      <Footer />
    </Box>
  );
};

export default Home;
