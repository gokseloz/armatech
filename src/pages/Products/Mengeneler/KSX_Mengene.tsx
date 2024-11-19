/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import ksxImage from "../../../assets/images/mengeneler/ksx.webp";
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

const KSX_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSX Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK KSX Mengene, 5-eksen tam/simültane işleme için optimal erişim sunan özel bir tasarıma sahiptir. Hem işlenmiş hem de ham parçalar için yüksek performans ve güvenilirlik sağlar."
        />
        <meta
          name="keywords"
          content="KSX Mengene, SCHUNK, 5-eksen mengene, işleme"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSX MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          5-Eksen Tam/Simültane İşleme İçin Mengene
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
            <ProductImage src={ksxImage} alt="KSX Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Çenelerin arkaya doğru yükselmesini engeller.
              </Typography>
              <Typography component="li">
                Kuvvet iletim ünitesi bakım gerektirmez.
              </Typography>
              <Typography component="li">
                Hızlı sıkma kolu basit, hızlı ve güvenilir parça sıkma sağlar.
              </Typography>
              <Typography component="li">
                Sıkma kuvvetinin sürekli ayarlanması hem işlenmiş hem de ham
                parçalar için uygundur.
              </Typography>
              <Typography component="li">
                Optimal erişim, parçanın beş farklı yüzeyinden işlenebilmesine
                olanak tanır.
              </Typography>
              <Typography component="li">
                Kurulum sürelerinin en aza indirilmesi için VERO-S modüler
                sistem ile uyumludur.
              </Typography>
              <Typography component="li">
                Çeşitli parça uzunluklarının sıkılmasına olanak tanır.
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
            Kuvvetlendirilmiş 5-eksenli KSX sıkma mengenesinin özel tasarımı,
            "gerçek" 5-eksenli tam/simültane işleme için optimal erişim sağlar.
          </Typography>
          <Typography component="li">
            İş parçaları hızlı sıkma kolu ile saniyeler içinde sıkılır, bu durum
            taban gövdenin bükülmesini önler.
          </Typography>
          <Typography component="li">
            Sıkma kuvveti sürekli olarak ayarlanabilir ve bu, mengenenin geniş
            bir sıkma görevine esnek şekilde uyum sağlamasını sağlar.
          </Typography>
          <Typography component="li">
            VERO-S arayüzü sayesinde, KSX sıkma mengenesi, SCHUNK'ın geniş
            VERO-S modüler sistemi ile çeşitli kombinasyon seçenekleri sunar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSX Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/ONmy6L60_hc"
            title="KSX Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSX_Mengene;
