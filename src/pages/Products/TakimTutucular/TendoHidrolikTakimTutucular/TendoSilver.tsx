import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoSilver from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-silver.webp";
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

const TendoSilver = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO Silver - Ürün Detayları</title>
        <meta
          name="description"
          content="TENDO Silver, hidrolik genişleme teknolojisine bütçe dostu bir giriş sunar. Doğrudan takımı tutma işlemlerinde en iyi fiyat/performans oranını sağlar."
        />
      </Helmet>
      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO Silver
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Hidrolik genişleme teknolojisine bütçe dostu bir giriş sunar. Doğrudan
          takımı tutma işlemlerinde en iyi fiyat/performans oranını sağlar.
          Güvenilir ve hassas bir hidrolik takım tutucudur.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          px={8}
          flexWrap="wrap"
        >
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
            <ProductImage src={tendoSilver} alt="TENDO Silver" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Ø6 – Ø32 mm arasında içten soğutma sıvısı geçebilen veya
                geçirmez ara penslerle farklı çapların tutulması sağlanır.
              </Typography>
              <Typography component="li">
                Mikro titreşimler sönümlenerek iş parçası yüzeyleri korunur ve
                makine mili korunur. Takım ömrü uzatılarak maliyetler düşürülür.
              </Typography>
              <Typography component="li">
                Tüm takım şaftı tipleri ile uyumludur: Form A, Form AB, Form B,
                Form E.
              </Typography>
              <Typography component="li">
                25,000 RPM'de G2.5 dengeleme derecesi ile yüksek hızlara
                uygundur.
              </Typography>
              <Typography component="li">
                &lt; 0.003 mm çalışma ve tekrarlanabilirlik hassasiyeti.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetinde kesici takım uzunluk boy ayarı, toplamda
                10 mm ayar hareketi ile yapılabilir.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzatmalarla ideal şekilde kombine
                edilebilir.
              </Typography>
              <Typography component="li">
                Kuru sıkma yüzeyleri, yağ, gres veya yağlayıcı kalıntılarının
                kir kanallarına itilmesiyle sağlanır.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO Silver'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/xqnnVoHNDv0"
            title="TENDO Silver Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TendoSilver;
