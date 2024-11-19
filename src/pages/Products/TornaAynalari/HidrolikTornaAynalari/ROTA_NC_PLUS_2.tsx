/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaNCPlus2Image from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-nc-plus-2.webp";
import { Helmet } from "react-helmet";
import ImageAndFeaturesContainer from "../../../../components/ProductDetail/ImageAndFeaturesContainer";

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

const ROTA_NC_PLUS_2 = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA NC Plus 2 - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA NC plus 2, son derece sağlam tasarımı ile en yüksek kalite gereksinimlerini karşılamak üzere geliştirilmiş bir hassas kama-kanca güç torna aynasıdır."
        />
        <meta
          name="keywords"
          content="ROTA NC Plus 2, SCHUNK, torna aynası, güç torna aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA NC Plus 2
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Ağırlığı Azaltılmış 3-Çeneli Hassas Güç Torna Aynası
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
            <ProductImage src={rotaNCPlus2Image} alt="ROTA NC Plus 2" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Hassas Kama-kanca güç torna aynası en yüksek kalite
                gereksinimlerini karşılar.
              </Typography>
              <Typography component="li">
                Büyük geçiş deliği tüm standart boru çaplarının işlenmesini
                sağlar.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini garanti eder.
              </Typography>
              <Typography component="li">
                Modüler orta kovan sistemi yeni sıkma görevlerine optimal uyum
                sağlar.
              </Typography>
              <Typography component="li">
                Çift yönlü kızaklı ayna pistonları yüksek hassasiyet sunar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA NC Plus 2 Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/Xf9fcp8F7so&t=76s"
            title="ROTA NC Plus 2 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_NC_PLUS_2;
