import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoECompact from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-e-compact.webp";
import Container from "../../../../components/Container";
import theme from "../../../../theme";

// Styled Components
const HeroSection = styled(Box)({
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
});

const ProductImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  maxHeight: "400px",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
});

const VideoContainer = styled(Box)({
  position: "relative",
  paddingTop: "56.25%", // Aspect ratio 16:9
  height: 0,
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

const TendoECompactDetailPage = () => {
  return (
    <Container>
      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO E Compact
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO E Compact hidrolik takım tutucu, frezeleme, delme, raybalama ve
          diş açma gibi uygulamalarda üstün performans sunar. Kesici takım
          ömrünü %300'e kadar uzatır.
        </Typography>
        <Box display="flex" justifyContent="center" gap={4}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <ProductImage src={tendoECompact} alt="TENDO E Compact" />
          </Box>
          <Box id="tata">
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Kompakt tasarımı ile yüksek tutma kuvveti ve tork iletimi
                sağlar.
              </Typography>
              <Typography component="li">
                Mikro titreşimleri önler, iş parçası yüzeyleri korunur ve kesici
                takım ömrü uzar.
              </Typography>
              <Typography component="li">
                Yüksek şekil doğruluğu ve optimum talaş kaldırma oranları
                sağlar.
              </Typography>
              <Typography component="li">
                Ø3 - 32 mm arası çeşitli şaft çapları sıkılabilir, maliyetleri
                azaltır.
              </Typography>
              <Typography component="li">
                25,000 RPM'de G2.5 dengeleme derecesi ile yüksek hız ve HPC/HSC
                işleme merkezlerine uygundur.
              </Typography>
              <Typography component="li">
                Sürekli tekrarlanabilirlik hassasiyeti ≤0.003 mm.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzatmalarla ideal bir şekilde
                kullanılır.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO E Compact'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/k1q1_cbXc1s"
            title="TENDO E Compact Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>

      {/* Features Section */}
    </Container>
  );
};

export default TendoECompactDetailPage;
