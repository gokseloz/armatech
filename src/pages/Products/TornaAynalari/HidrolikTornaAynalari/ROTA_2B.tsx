/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rota2BImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-2b.webp";
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

const ROTA_2B = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA 2B - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA 2B, uzun çene stroku ve yüksek sıkma kuvveti ile bağlantı parçalarının sıkılması için ideal bir 2 çeneli güç aynasıdır."
        />
        <meta
          name="keywords"
          content="ROTA 2B, SCHUNK, güç aynası, 2 çeneli torna aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA 2B
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Uzun Stroklu 2 Çeneli Güç Torna Aynası
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
            <ProductImage src={rota2BImage} alt="ROTA 2B" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Uzun çene stroku ile büyük engelleyici konturların güvenilir
                sıkılması.
              </Typography>
              <Typography component="li">
                Entegre medya geçişi ile esneklik sağlar.
              </Typography>
              <Typography component="li">
                Düşük yükseklik tasarımı makine odasının maksimum kullanımını
                sağlar.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini garanti eder.
              </Typography>
              <Typography component="li">
                Sertleştirilmiş yüzeyler sayesinde uzun ömürlü kullanım sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA 2B Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/fS43AbL0lrs"
            title="ROTA 2B Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_2B;
