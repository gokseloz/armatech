/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaNCEImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-nce.webp";
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

const ROTA_NCE = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA NCE - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA NCE, enerji verimliliği ve düşük atalet momenti ile çevrim sürelerini kısaltan yenilikçi hafif 3 çeneli güç aynasıdır."
        />
        <meta
          name="keywords"
          content="ROTA NCE, SCHUNK, torna aynası, hafif güç aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA NCE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Hafif ve Enerji Verimli 3 Çeneli Güç Torna Aynası
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
            <ProductImage src={rotaNCEImage} alt="ROTA NCE" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Hafif tasarımı sayesinde daha kısa çevrim süreleri sunar.
              </Typography>
              <Typography component="li">
                Kitagawa BB200 serisi güç aynaları ile %100 uyumludur.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini garanti eder.
              </Typography>
              <Typography component="li">
                Entegre değiştirilebilir merkez manşonlar sayesinde esneklik
                sunar.
              </Typography>
              <Typography component="li">
                Enerji verimliliği ile enerji maliyetlerini düşürür.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA NCE Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/2GA4VWjdRC8"
            title="ROTA NCE Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_NCE;
