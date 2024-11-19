/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaTHW3Image from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-thw3.webp";
import { Helmet } from "react-helmet";
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

const ROTA_THW3 = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA THW3 - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA THW3, standart strok silindirleri için tasarlanmış, çene hızlı değiştirme özelliğine sahip 3-çeneli güç torna aynasıdır. Patentli mühürleme konsepti sayesinde bakım aralıkları 20 kat daha uzun süreye çıkarılmıştır."
        />
        <meta
          name="keywords"
          content="ROTA THW3, SCHUNK, torna aynası, güç torna aynası, çene hızlı değişim"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA THW3
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          3-Çeneli Güç Torna Aynası - ROTA THW3
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
            <ProductImage src={rotaTHW3Image} alt="ROTA THW3" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Güç torna aynası önemli ölçüde daha uzun bakım aralıkları
                sağlar.
              </Typography>
              <Typography component="li">
                Sürekli yağlama, sürekli yüksek sıkma kuvvetleri içindir.
              </Typography>
              <Typography component="li">
                Kolay çene hızlı değişim sistemi kurulum sürelerini ve
                maliyetlerini minimize eder.
              </Typography>
              <Typography component="li">
                Halka piston sisteminin yüksek verimliliği süreç güvenilirliğini
                sağlar.
              </Typography>
              <Typography component="li">
                Yüksek çene hızlı değişim tekrar doğruluğu sağlar.
              </Typography>
              <Typography component="li">
                Modüler orta kovan sistemi, yeni sıkma görevlerine optimal uyum
                sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA THW3 Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/NqdE8t54x6s"
            title="ROTA THW3 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_THW3;
