/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import nsl3TurnImage from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/nsl3-turn/nsl3-turn.png";
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

const VEROS_NSL3_Turn = () => {
  return (
    <Container>
      <Helmet>
        <title>NSL3 TURN - Ürün Detayları</title>
        <meta
          name="description"
          content="VERO-S NSE3 modülleriyle donatılmış NSL3 TURN sıkma istasyonları, mill/turn merkezlerinde yüksek hız ve rijit sıkma performansı sunar."
        />
        <meta
          name="keywords"
          content="NSL3 TURN, SCHUNK, mill/turn merkezleri, sıkma istasyonları, yüksek hız, rijit sıkma"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          NSL3 TURN - DİK veya Yatay Tornalarda Kullanılan Zero Pointler
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          VERO-S NSE3 modülleriyle donatılmış NSL3 TURN sıkma istasyonları,
          mill/turn merkezlerinde güvenilirlik ve yüksek performans arayan
          kullanıcılar için ideal bir çözümdür.
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
            <ProductImage src={nsl3TurnImage} alt="NSL3 TURN" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Ek basınç yükselticilere ihtiyaç duyulmaz, sadece 6 bar çalışma
                basıncı ile çalışır.
              </Typography>
              <Typography component="li">
                &lt; 0.01 mm doğruluk ile kolay birleştirme sağlar.
              </Typography>
              <Typography component="li">
                Yüksek çekme kuvvetleri için rijit sıkma ve titreşimsiz çalışma
                sunar.
              </Typography>
              <Typography component="li">
                Basınç düşüşü durumunda bile tam çekme kuvvetini korur.
              </Typography>
              <Typography component="li">
                Çekme kuvveti %300'e kadar artırılarak makinenin performansı
                optimize edilir.
              </Typography>
              <Typography component="li">
                Tüm standart mill/turn merkezleri ile uyumludur.
              </Typography>
              <Typography component="li">
                Akıllı hava bağlantıları, modüller arasında verimli entegrasyon
                sağlar.
              </Typography>
              <Typography component="li">
                Maksimum işletim güvenliği ve süreç güvenilirliği sunar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          NSL3 TURN Modülünün Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/btoG3QpJAZQ"
            title="NSL3 TURN Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default VEROS_NSL3_Turn;
