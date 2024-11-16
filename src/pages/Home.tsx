import { Box } from "@mui/material";
import About from "../components/About/About";
import ContactPage from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Box maxWidth="1440px" marginInline="auto" px={3}>
        <About />
        <ContactPage />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
