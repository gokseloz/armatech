/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaNCFPlus2Image from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-ncf-plus-2.webp";
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

const ROTA_NCF_PLUS_2 = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA NCF Plus 2 - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA NCF plus 2, yüksek işleme hızlarında bile sıkma kuvveti kaybını minimuma indiren santrifüj kuvveti telafisine sahiptir."
        />
        <meta
          name="keywords"
          content="ROTA NCF Plus 2, SCHUNK, torna aynası, güç torna aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA NCF Plus 2
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Ağırlığı Azaltılmış Santrifüj Kuvveti Etkili 3-Çeneli Hassas Güç Torna
          Aynası
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
            <ProductImage src={rotaNCFPlus2Image} alt="ROTA NCF Plus 2" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                En yüksek işleme hızlarında bile sıkma kuvveti kaybı önlenir.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini garanti eder.
              </Typography>
              <Typography component="li">
                Modüler orta kovan sistemi değiştirilebilir orta kovanlarla
                esneklik sağlar.
              </Typography>
              <Typography component="li">
                Çift yönlü kızaklı ayna pistonları yüksek hassasiyet sunar.
              </Typography>
              <Typography component="li">
                Hassas takoz kancalı güç torna aynası mükemmel işleme sonuçları
                sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA NCF Plus 2 Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/3tdD9wSwYk0"
            title="ROTA NCF Plus 2 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_NCF_PLUS_2;
