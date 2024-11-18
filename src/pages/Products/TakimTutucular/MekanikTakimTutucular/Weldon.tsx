import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import weldonImage from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/weldon.png";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import { Helmet } from "react-helmet";

// Styled Components
const HeroSection = styled(Box)({
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
});

const ProductImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  maxHeight: "400px",
});

const Weldon = () => {
  return (
    <Container>
      <Helmet>
        <title>Weldon Freze Tutucu - Ürün Detayları</title>
        <meta
          name="description"
          content="WELDON Freze Tutucu, silindirik şaftlı ve yanal sıkma yüzeyine sahip takımlar için güvenli sıkma sağlayan bir çözümdür. DIN 1835B ve DIN 6535HB standartlarına uygundur."
        />
        <meta
          name="keywords"
          content="Weldon Freze Tutucu, takım tutucu, güvenli sıkma, DIN 1835B, DIN 6535HB, hassas işleme, çevresel soğutma"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Weldon Freze Tutucu
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Weldon freze tutucu, silindirik şaftlı ve yanal sıkma yüzeyine sahip
          takımların güvenli sıkılmasını sağlar. DIN 1835B ve DIN 6535HB
          standartlarıyla uyumlu, güvenilir bir takım tutma çözümüdür.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          px={8}
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: 250,
              minWidth: 250,
              height: 400,
              display: "flex",
              justifyContent: "center",
              padding: 2,
              boxShadow: theme.shadows[5],
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <ProductImage src={weldonImage} alt="Weldon Freze Tutucu" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack
              gap={2}
              component="ul"
              sx={{ paddingLeft: 2, listStyle: "disc" }}
            >
              <Typography component="li">
                Silindirik şaftlı ve yanal sıkma yüzeyine sahip takımlar için
                güvenli sıkma sağlayarak, dönme ve çekmeyi önler.
              </Typography>
              <Typography component="li">
                DIN 1835B ve DIN 6535HB standartlarına uygun olup, geniş bir
                uygulama yelpazesinde kullanılabilir.
              </Typography>
              <Typography component="li">
                Çevresel soğutma kanalları aracılığıyla soğutma sıvısını
                doğrudan kesici kenara yönlendirir. M3 vidaları ile kanallar
                kapatılabilir.
              </Typography>
              <Typography component="li">
                Aynı anda konik ve düz çalışma yüzeyi sunar, bu da araç flanşı
                ile mil yüzü arasındaki boşluğu kapatarak daha sağlam bir
                bağlantı sağlar.
              </Typography>
              <Typography component="li">
                Farklı makine arayüzleri ile uyumlu olup, çeşitli işleme
                uygulamalarında esneklik sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>
    </Container>
  );
};

export default Weldon;
