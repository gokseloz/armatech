/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaNCRAImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-ncr-a.webp";
import { Helmet } from "react-helmet";

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

const ROTA_NCR_A = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA NCR-A - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA NCR-A, düşük deformasyonlu sıkma ve uzun bakım aralıkları sağlayan 6 çeneli kompanzasyon aynasıdır."
        />
        <meta
          name="keywords"
          content="ROTA NCR-A, SCHUNK, torna aynası, 6 çeneli kompanzasyon aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA NCR-A
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Düşük Deformasyonlu 6 Çeneli Kompanzasyon Güç Torna Aynası
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
            <ProductImage src={rotaNCRAImage} alt="ROTA NCR-A" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Düşük deformasyonlu sıkma, ince duvarlı iş parçaları için
                idealdir.
              </Typography>
              <Typography component="li">
                Üç kat daha uzun bakım aralıkları ile yüksek süreç
                güvenilirliği.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini sağlar.
              </Typography>
              <Typography component="li">
                120° hizalanmış pandül sistemi, hassas merkezleme sağlar.
              </Typography>
              <Typography component="li">
                Tüm fonksiyonel parçaların sertleştirilmiş ve taşlanmış
                yüzeyleri uzun ömür sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA NCR-A Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/VjXFfY86mTk"
            title="ROTA NCR-A Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_NCR_A;
