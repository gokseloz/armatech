/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import rotaTPImage from "../../../../assets/images/torna-aynalari/pnomatik-torna-aynalari/rota-tp.webp";
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

const ROTA_TP = () => {
  return (
    <Container>
      <Helmet>
        <title>ROTA TP - Ürün Detayları</title>
        <meta
          name="description"
          content="ROTA TP, pnömatik 3 çeneli güç torna aynası, özellikle hidrolik silindiri olmayan küçük tornalar için tasarlanmıştır."
        />
        <meta
          name="keywords"
          content="ROTA TP, SCHUNK, torna aynası, pnömatik güç torna aynası"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ROTA TP
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Pnömatik 3 Çeneli Güç Torna Aynası
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
            <ProductImage src={rotaTPImage} alt="ROTA TP" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Büyük delik çapına sahip pnömatik 3 çeneli güç torna aynası,
                yüksek kaliteli işleme talepleri için tasarlanmıştır.
              </Typography>
              <Typography component="li">
                Hassas kam kilit pnömatik torna aynası, en yüksek kalite
                talepleri için mükemmel işleme sonuçları sağlar.
              </Typography>
              <Typography component="li">
                Optimize edilmiş yağlama sistemi sürekli yüksek sıkma
                kuvvetlerini garanti eder.
              </Typography>
              <Typography component="li">
                Aynaya entegre pnömatik silindir, hidrolik silindiri olmayan
                tornalar için uygundur.
              </Typography>
              <Typography component="li">
                Dağıtıcı halka üzerinden hava beslemesi ile aynanın basit bir
                şekilde kontrol edilmesi sağlanır.
              </Typography>
              <Typography component="li">
                Sistem basıncında yüksek sıkma kuvvetleri, işleme sırasında
                süreç güvenilirliği sağlar.
              </Typography>
              <Typography component="li">
                Fonksiyonel parçaların sertleştirilmiş ve zımparalanmış
                yüzeyleri, uzun bir hizmet ömrü sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Seçenekler ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            SCHUNK ROTA TP güç torna aynaları entegre bir pnömatik silindir ile
            donatılmıştır. Durma süreleri sırasında, özel bir hava besleme
            sistemi kullanılarak bir dağıtıcı halka üzerinden açılıp
            kapatılabilir.
          </Typography>
          <Typography component="li">
            Entegre pnömatik silindir sayesinde, ROTA TP güç aynası sabit
            uygulamalarda da kullanılabilir. Bu amaçla, bir taban plaka ile
            genişletilir ve ardından ROTA TPS olarak makine tablalarına monte
            edilebilir.
          </Typography>
          <Typography component="li">
            Bu torna aynası, yüksek kaliteli işleme sonuçları elde etmek için
            gerekli olan yüksek sıkma kuvvetleri ve süreç güvenilirliği sağlar.
          </Typography>
          <Typography component="li">
            Özellikle küçük ve hidrolik silindiri olmayan tornalar için
            tasarlanmış olup, otomasyon teknolojisinde ve sabit uygulamalarda
            geniş kullanım imkanları sunar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ROTA TP Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/Cl5XYM2xK1E"
            title="ROTA TP Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default ROTA_TP;
