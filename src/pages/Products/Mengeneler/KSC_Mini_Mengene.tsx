/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import kscMiniImage from "../../../assets/images/mengeneler/ksc-mini.webp";
import { Helmet } from "react-helmet";
import Container from "../../../components/Container";
import theme from "../../../theme";

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

const KSC_Mini_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSC Mini Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="KSC Mini Mengene, küçük iş parçalarınız için kompakt tasarım ve çene hızlı değişim sistemi ile sınıfındaki en yüksek sıkma kuvvetlerine sahiptir."
        />
        <meta
          name="keywords"
          content="KSC Mini Mengene, SCHUNK, küçük iş parçaları, kompakt tasarım, sıkma kuvveti"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSC MINI MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Küçük iş parçalarınız için kompakt mengene, çene hızlı değişim sistemi
          ve sınıfındaki yüksek sıkma kuvvetlerine sahiptir.
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
            <ProductImage src={kscMiniImage} alt="KSC Mini Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Herhangi bir araç gerektirmeyen çene hızlı değişim sistemi,
                saniyeler içinde yeni sıkma görevlerine uyum sağlar.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvveti, işleme sırasında süreklilik ve
                güvenilirlik sağlar.
              </Typography>
              <Typography component="li">
                Geniş sıkma aralığı, iş parçasında yüksek esneklik sağlar.
              </Typography>
              <Typography component="li">
                Optimal erişilebilirlik, beş tarafı işleme için idealdir.
              </Typography>
              <Typography component="li">
                Küçük ve kompakt tasarımı, makine çalışma süresini artırmak için
                idealdir.
              </Typography>
              <Typography component="li">
                Paslanmaz ve sertleştirilmiş taban gövde, kir direnci ve düşük
                bakım gereksinimi sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Seçenekler ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            KONTEC KSC Mini, yüksek sıkma kuvvetleri ile simetrik sıkma
            sayesinde küçük iş parçalarını en basit şekilde işler.
          </Typography>
          <Typography component="li">
            Kompakt boyutları ve tüm taraflardan erişilebilirliği sayesinde,
            mengene, ham ve işlenmiş parçaların işlenmesi, çoklu sıkma ve
            otomasyon uygulamaları için idealdir.
          </Typography>
          <Typography component="li">
            Çene hızlı değişim sistemi, ek araç gerektirmeden saniyeler içinde
            çene değişimini sağlar.
          </Typography>
          <Typography component="li">
            Çeneler, sadece çeneyi yerine yerleştirerek değiştirilebilir.
            Çeneler, 45 mm ve 70 mm genişliklerinde mevcuttur ve tüm KSC Mini
            mengenelerinde kullanılabilir.
          </Typography>
          <Typography component="li">
            Paslanmaz çelik taban gövde, mengenenin uzun ömürlü olmasını sağlar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSC Mini Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/qg1q1lTKOU4"
            title="KSC Mini Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSC_Mini_Mengene;
