/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import kscFImage from "../../../assets/images/mengeneler/ksc-f.webp";
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

const KSC_F_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSC-F Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK KONTEC KSC-F tek çene hareketli mengeneler, paletleme sistemlerini donatmak için mükemmel bir şekilde uygundur. Modüler sistem, VERO-S arayüzü ve 160° hızlı sıkma sayesinde, yeni tutma görevlerine hızla adapte edilebilir."
        />
        <meta
          name="keywords"
          content="KSC-F Mengene, SCHUNK, tek çene hareketli mengene, paletleme sistemleri"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSC-F MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK KONTEC KSC-F tek çene hareketli mengeneler, paletleme
          sistemlerini donatmak için mükemmel bir şekilde uygundur.
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
            <ProductImage src={kscFImage} alt="KSC-F Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Makine alanının maksimum kullanımı için uygundur.
              </Typography>
              <Typography component="li">
                Tork anahtarı ile basit, hızlı ve güvenilir parça sıkma sağlar.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri işlem sırasında süreklilik ve
                güvenilirlik sağlar.
              </Typography>
              <Typography component="li">
                Geniş sıkma aralığı yüksek seviyede esneklik sağlar.
              </Typography>
              <Typography component="li">
                Yan drenaj yuvaları soğutma sıvısı ve talaşların atılmasını
                sağlar.
              </Typography>
              <Typography component="li">
                Geniş çene programı, yeni sıkma görevlerine optimal uyumludur.
              </Typography>
              <Typography component="li">
                VERO-S modüler sistem sayesinde çeşitli kombinasyon olanakları,
                daha kısa kurulum süreleri sağlar.
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
            SCHUNK KONTEC KSC-F mengene, özellikle otomatik makine yüklemede
            kullanım için uygundur.
          </Typography>
          <Typography component="li">
            Hızlı sıkma aralığının yanı sıra düz tasarımı ve düşük ağırlığı ile
            öne çıkar.
          </Typography>
          <Typography component="li">
            Bu özellikler, palet depolama ünitelerinde kullanım için mükemmel
            koşulları sağlar.
          </Typography>
          <Typography component="li">
            KSC-F 80, KSC-F 125 ve KSC-F 160 boyutları, yaygın palet boyutları
            320 x 320 mm, 400 x 400 mm ve 500 x 500 mm için özel olarak
            tasarlanmıştır.
          </Typography>
          <Typography component="li">
            Kıyaslanabilir düşük torkta bile yüksek sıkma kuvvetleri elde eder.
          </Typography>
          <Typography component="li">
            VERO-S hızlı değişim palet sistemi ile tam uyum sağlar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSC-F Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/9brDr0VKldw"
            title="KSC-F Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSC_F_Mengene;
