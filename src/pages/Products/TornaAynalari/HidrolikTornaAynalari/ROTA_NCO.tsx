/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaNCOImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-nco.webp";
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

const ROTA_NCO = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA NCO - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA NCO, uzun çene stroku ve entegre medya geçişi ile donatılmış, hassas ve çok yönlü bir 3 çeneli güç aynasıdır."
        />
        <meta
          name="keywords"
          content="ROTA NCO, SCHUNK, güç aynası, hassas güç aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA NCO
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Entegre Medya Geçişli Hassas Güç Torna Aynası
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
            <ProductImage src={rotaNCOImage} alt="ROTA NCO" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Uzun çene stroku ile engelleyici konturların etrafında güvenilir
                sıkma sağlar.
              </Typography>
              <Typography component="li">
                Entegre medya geçişi ile esnek kullanım sunar.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini garanti eder.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri ile uzun hizmet ömrü sunar.
              </Typography>
              <Typography component="li">
                Sertleştirilmiş yüzeyler sayesinde uzun süreli dayanıklılık
                sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA NCO Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/fS43AbL0lrs"
            title="ROTA NCO Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_NCO;
