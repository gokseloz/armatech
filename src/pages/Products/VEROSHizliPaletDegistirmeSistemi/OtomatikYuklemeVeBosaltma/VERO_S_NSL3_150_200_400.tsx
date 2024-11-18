/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import nsl3150200400 from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/vero-s-nsl3-150-200-400/nsl3150200400.webp";
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

const VERO_S_NSL3_150_200_400 = () => {
  return (
    <Container>
      <Helmet>
        <title>
          VERO-S NSL3 150 – 200 – 400 Hazır Modüller - Ürün Detayları
        </title>
        <meta
          name="description"
          content="SCHUNK'un VERO-S NSL3 modülleri ile hızlı kurulum süreleri ve yüksek hassasiyetle genel frezeleme uygulamalarında mükemmel performans sağlar."
        />
        <meta
          name="keywords"
          content="VERO-S NSL3, SCHUNK, sıkma modülleri, hızlı kurulum, hassasiyet, frezeleme, rijit sıkma"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          VERO-S NSL3 150 – 200 – 400 Hazır Modüller
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK'un VERO-S NSL3 modülleri, sıkma paletlerinin son derece hızlı
          kurulum süreçleri için tasarlanmıştır. Genel frezeleme uygulamaları ve
          hassas işleme ihtiyaçları için idealdir.
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
            <ProductImage src={nsl3150200400} alt="VERO-S NSL3 Modüller" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Farklı makineler için sayısız standart sıkma modülü kombinasyonu
                sunar.
              </Typography>
              <Typography component="li">
                6 bar sistem basıncı ile çalışır, ek basınç yükselticilere gerek
                duymaz.
              </Typography>
              <Typography component="li">
                &lt; 0.005 mm tekrarlama hassasiyeti ile kolay ve hassas
                birleştirme sağlar.
              </Typography>
              <Typography component="li">
                Titreşimsiz çalışma ve yüksek çekme kuvvetleri için rijit sıkma
                sağlar.
              </Typography>
              <Typography component="li">
                Basınç düşüşü durumunda bile tam çekme kuvvetini korur.
              </Typography>
              <Typography component="li">
                Korozyona dayanıklı yapı, uzun ömür ve maksimum süreç
                güvenilirliği sunar.
              </Typography>
              <Typography component="li">
                Mevcut NSL plus sıkma istasyonları ile birebir değiştirilebilir.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          VERO-S NSL3 150 – 200 – 400 Modüllerinin Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/SCzD-ivKuxM"
            title="VERO-S NSL3 150 – 200 – 400 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default VERO_S_NSL3_150_200_400;
