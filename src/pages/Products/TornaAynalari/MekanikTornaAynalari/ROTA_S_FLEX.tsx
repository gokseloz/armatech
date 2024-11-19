/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import rotaSFlexImage from "../../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-s-flex.webp";
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

const ROTA_S_FLEX = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA-S Flex - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA-S Flex, modern freze/dönüş merkezleri için özel olarak tasarlanmış hafif ve esnek bir torna aynasıdır. Geniş sıkma aralığı ve hızlı çene ayarı ile verimli işleme sağlar."
        />
        <meta
          name="keywords"
          content="ROTA-S Flex, SCHUNK, torna aynası, esnek sıkma, hafif tasarım, geniş sıkma aralığı"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA-S Flex
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Ağırlığı azaltılmış 3-çeneli manuel torna aynası, modern freze/dönüş
          merkezleri için özel olarak tasarlanmıştır. Geniş sıkma aralığı ve
          hızlı çene ayarı ile yüksek verimlilik sağlar.
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
            <ProductImage src={rotaSFlexImage} alt="ROTA-S Flex" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Kolay çene hızlı değişim sistemi kurulum süresini ve maliyetleri
                minimize eder.
              </Typography>
              <Typography component="li">
                Kama çubuğu sistemi, yüksek sıkma kuvvetleri ve süreç
                güvenilirliği sağlar.
              </Typography>
              <Typography component="li">
                Düşük torna ağırlığı, daha yüksek iş parçası taşıma kapasitesi
                sağlar.
              </Typography>
              <Typography component="li">
                Dikey kurulumlar için özel sızdırmazlık, soğutma sıvısına ve
                talaşlara karşı optimum koruma sunar.
              </Typography>
              <Typography component="li">
                Geniş kılavuz yolları sayesinde maksimum esneklik ve geniş sıkma
                aralığı sunar.
              </Typography>
              <Typography component="li">
                Optimizasyonlu yağlama sistemi, sürekli yüksek sıkma kuvvetleri
                sağlar.
              </Typography>
              <Typography component="li">
                Fonksiyonel parçaların tüm yüzeyleri sertleştirilmiş ve
                taşlanmış, yüksek doğruluk sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA-S Flex'in Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/fS43AbL0lrs"
            title="ROTA-S Flex Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_S_FLEX;
