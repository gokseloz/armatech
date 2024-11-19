/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import rotaMFlexImage from "../../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-ml-flex-2-2.webp";
import { Helmet } from "react-helmet";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
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

const VideoContainer = styled(Box)({
  position: "relative",
  height: "600px",
  margin: "40px auto",
  width: "80%",
  maxWidth: "800px",
});

const YouTubeIframe = styled("iframe")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
});

const ROTA_M_FLEX_2_2 = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA-M Flex 2+2 - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA-M flex 2+2, yüksek hassasiyetli işleme ve esnek sıkma çözümleri sunan 4 çeneli torna aynasıdır. İnce duvarlı iş parçalarını deforme olmadan sıkmak için idealdir."
        />
        <meta
          name="keywords"
          content="ROTA-M Flex 2+2, SCHUNK, torna aynası, esnek sıkma, hassas işleme, ince duvarlı iş parçaları"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA-M Flex 2+2
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Merkezden telafi edebilen, esnek ve hassas sıkma sağlayan 4 çeneli
          torna aynası. Özellikle yuvarlak, kübik ve geometrik iş parçaları için
          uygundur.
        </Typography>
        <ImageAndFeaturesContainer>
          <Box
            sx={{
              flex: 1,
              width: 250,
              minWidth: 250,
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              padding: 2,
              boxShadow: theme.shadows[5],
            }}
          >
            <ProductImage src={rotaMFlexImage} alt="ROTA-M Flex 2+2" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Kapalı manuel torna aynası, uzun bakım aralıkları sunar.
              </Typography>
              <Typography component="li">
                Patentli tahrik konsepti, çift çenelerle merkezden telafi eden
                sıkma sağlar.
              </Typography>
              <Typography component="li">
                Esnek sıkma sistemi, yuvarlak, kübik veya geometrik olarak
                hacimli iş parçalarına uygundur.
              </Typography>
              <Typography component="li">
                Telafi mekanizması, ince duvarlı iş parçalarını deforme olmadan
                sıkmayı mümkün kılar.
              </Typography>
              <Typography component="li">
                Kama çubuğu sistemi sayesinde yüksek sıkma kuvvetleri ve süreç
                güvenilirliği sunar.
              </Typography>
              <Typography component="li">
                Yağ sirkülasyonlu yağlama sistemi sabit sıkma kuvvetlerini
                garanti eder.
              </Typography>
              <Typography component="li">
                Ø 630 mm ve üzeri boyutlarda hafif tasarımıyla iş parçası
                ağırlığı için maksimum kapasite sağlar.
              </Typography>
              <Typography component="li">
                Fonksiyonel parçaların tüm yüzeyleri sertleştirilmiş ve
                taşlanmış, uzun ömürlü kullanım sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA-M Flex 2+2'nin Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/Xf9fcp8F7so"
            title="ROTA-M Flex 2+2 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_M_FLEX_2_2;
