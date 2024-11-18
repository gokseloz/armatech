/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import rotaSPlusImage from "../../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-s-plus-2-0.webp";
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

const ROTA_S_Plus_2_0 = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA-S plus 2.0 - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA-S plus 2.0, manuel torna aynası, çene hızlı değiştirme sistemi ve yüksek sıkma kuvvetleri ile işleme süreçlerinde yüksek verimlilik ve güvenilirlik sunar."
        />
        <meta
          name="keywords"
          content="ROTA-S plus 2.0, SCHUNK, torna aynası, çene hızlı değiştirme sistemi, yüksek sıkma kuvveti, manuel torna aynası"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA-S Plus 2.0
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          ROTA-S plus 2.0, çene hızlı değiştirme sistemi sayesinde yüksek
          verimlilik ve güvenilirlik sağlayan manuel torna aynasıdır. Optimize
          edilmiş tasarımı ile üretim süreçlerinizi hızlandırır ve maliyetleri
          düşürür.
        </Typography>
        <Box display="flex" justifyContent="center" gap={4} px={8}>
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
            <ProductImage src={rotaSPlusImage} alt="ROTA-S plus 2.0" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Kullanışlı çene hızlı değiştirme sistemi kurulum sürelerini ve
                maliyetleri minimize eder.
              </Typography>
              <Typography component="li">
                Tüm standart boru çaplarını işleme imkanı sunar.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri ile güvenilir sıkma sağlar.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma kuvvetleri
                sağlar.
              </Typography>
              <Typography component="li">
                Değiştirilebilir merkez kovanlar sayesinde yeni sıkma
                görevlerine optimal uyum sağlar.
              </Typography>
              <Typography component="li">
                Mükemmel sıkma kuvveti/tork oranı makine performansının tam
                kullanımını sağlar.
              </Typography>
              <Typography component="li">
                Ergonomik, hafif güvenlik anahtarı kolay kullanım sağlar.
              </Typography>
              <Typography component="li">
                Tüm fonksiyonel parçaların sertleştirilmiş ve taşlanmış
                yüzeyleri yüksek doğruluk ve çene değiştirme tekrarlanabilirliği
                sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA-S Plus 2.0'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/a5sjP6Het6U"
            title="ROTA-S plus 2.0 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_S_Plus_2_0;
