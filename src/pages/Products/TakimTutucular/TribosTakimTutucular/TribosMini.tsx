import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tribosMiniImage from "../../../../assets/images/takim-tutucular/tribos/tribos-mini.webp";
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

const TribosMini = () => {
  return (
    <Container>
      <Helmet>
        <title>TRIBOS-Mini - Ürün Detayları</title>
        <meta
          name="description"
          content="TRIBOS-Mini, hassas işleme için mükemmel bir çözüm sunar. Tıbbi teknoloji, saatçilik ve hassas kalıp yapımı endüstrilerinde idealdir."
        />
        <meta
          name="keywords"
          content="TRIBOS-Mini, SCHUNK, hassas işleme, tıbbi teknoloji, elektroteknoloji, saatçilik, kalıp yapımı"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TRIBOS-Mini
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TRIBOS-Mini, tıbbi teknoloji, saatçilik ve hassas kalıp yapımı gibi
          endüstriler için özel olarak tasarlanmış bir sıkma sistemi sunar.
        </Typography>
        <Box display="flex" justifyContent="center" gap={4} px={8}>
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
            <ProductImage src={tribosMiniImage} alt="TRIBOS-Mini" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                0.3 mm'den başlayan en küçük şaft çapları için özel araçlara
                gerek kalmadan ekonomik işleme sağlar.
              </Typography>
              <Typography component="li">
                Dönme simetrisine sahip tasarımı dış konturu minimize eder ve
                yüksek devir hızına uygundur.
              </Typography>
              <Typography component="li">
                Mikron titreşimleri sönümleyerek makine milini korur ve takım
                ömrünü artırır, maliyetleri düşürür.
              </Typography>
              <Typography component="li">
                TRIBOS-Mini SVP sıkma cihazı ile hızlı ve kolay takım değişimi
                sağlar.
              </Typography>
              <Typography component="li">
                Sürekli tekrarlanabilirlik &lt; 0.003 mm hassasiyeti ile yüksek
                hassasiyetli işleme ve güvenli işlemler sağlar.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 dengeli derecede yüksek hızlara uygundur.
              </Typography>
              <Typography component="li">
                Küçük iş parçaları ve hassas görevler için mükemmeldir, gövde,
                kalıp ve elektrot işleme veya gravür çalışmaları için idealdir.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TRIBOS Mini'nin Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">
              Bu ürün için video mevcut değil.
            </Typography>
          </Box>
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TribosMini;
