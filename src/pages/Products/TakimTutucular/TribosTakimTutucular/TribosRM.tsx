import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tribosRMImage from "../../../../assets/images/takim-tutucular/tribos/tribos-rm.webp";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import { Helmet } from "react-helmet";
import ImageAndFeaturesContainer from "../../../../components/ProductDetail/ImageAndFeaturesContainer";

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

const TribosRM = () => {
  return (
    <Container>
      <Helmet>
        <title>TRIBOS-RM - Ürün Detayları</title>
        <meta
          name="description"
          content="TRIBOS-RM, mikro kesmeden 85.000 RPM devir hızına kadar güçlü HSC işlemi için ideal bir takım tutucudur. Mükemmel sapma doğruluğu ve stabilite sağlar."
        />
        <meta
          name="keywords"
          content="TRIBOS-RM, SCHUNK, takım tutucu, HSC işleme, mikro kesme, yüksek hız"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TRIBOS-RM
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TRIBOS-RM, mikro kesmeden 85.000 RPM devir ve daha yükseğine kadar
          güçlü HSC işlemi için uygun bir takım tutucudur.
        </Typography>
        <ImageAndFeaturesContainer>
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
            }}
          >
            <ProductImage src={tribosRMImage} alt="TRIBOS-RM" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                ≤ 0.003 mm mükemmel sapma doğruluğu ve stabilite.
              </Typography>
              <Typography component="li">
                Yüksek kesme kuvvetlerinde stabilite ve hızlı işleme süreleri
                sunar.
              </Typography>
              <Typography component="li">
                Hassas ve güvenilir iş parçası işleme sağlar.
              </Typography>
              <Typography component="li">
                Mikron titreşimlerini sönümleyerek makine milini korur ve takım
                ömrünü artırır.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 dengeli derecede yüksek hızlara uygundur.
              </Typography>
              <Typography component="li">
                TRIBOS SVL araç uzantılarıyla ideal şekilde kombinlenebilir.
              </Typography>
              <Typography component="li">
                Sürekli tekrarlanabilirlik &lt; 0.003 mm hassasiyetiyle optimal
                yüzey sonuçları sağlar.
              </Typography>
              <Typography component="li">
                TRIBOS-RM SVP sıkma cihazı ile hızlı ve kolay araç değişimi.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>
    </Container>
  );
};

export default TribosRM;
