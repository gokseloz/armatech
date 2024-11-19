/* eslint-disable react-refresh/only-export-components */
import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import tandemKSF3Image from "../../../assets/images/kuvvet-bloklari/tandem-ksf3.webp";
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

const TANDEM_KSF3 = () => {
  return (
    <Container>
      <Helmet>
        <title>TANDEM KSF3 - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK TANDEM KSF3, kompakt tasarıma sahip, yüksek sıkma kuvvetleri ve yeni teknik özellikler sunan yaylı 2 çeneli sıkma kuvveti bloklarıdır."
        />
        <meta
          name="keywords"
          content="TANDEM KSF3, SCHUNK, kuvvet blokları, yaylı sıkma, sıkma kuvveti"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TANDEM KSF3
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK TANDEM KSF3, yüksek sıkma kuvvetleri ve yeni teknik özellikler
          sunan, kompakt tasarıma sahip yaylı 2 çeneli sıkma kuvveti
          bloklarıdır.
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
            <ProductImage src={tandemKSF3Image} alt="TANDEM KSF3" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Yüksek kalite talepleri için hassas takoz sıkma kuvveti bloğu
                mükemmel işleme sonuçları sağlar.
              </Typography>
              <Typography component="li">
                Entegre yay paketleri ile sıkılır ve pnömatik olarak açılır.
              </Typography>
              <Typography component="li">
                Kare tasarım ve ideal dış tasarım, iyi yanal erişim ile iki
                kurulumda 6 yüzeyli işleme için idealdir.
              </Typography>
              <Typography component="li">
                Yüksek verimlilikte takoz sistemi, yüksek sıkma kuvvetleri ile
                süreç güvenilirliği sağlar.
              </Typography>
              <Typography component="li">
                Standart olarak kanal ile ince diş açılmış temel çenelerinin
                yüksek esnekliği vardır.
              </Typography>
              <Typography component="li">
                Fonksiyonel parçaların tüm yüzeyleri sertleştirilmiş ve
                zımparalanmış uzun hizmet ömrü sağlar.
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
            SCHUNK TANDEM KSF3, entegre yay paketleri ile sıkılır ve pnömatik
            olarak açılır.
          </Typography>
          <Typography component="li">
            Yaylı sıkma nedeniyle sadece Dış Çap (O.D.) sıkma için uygundur.
          </Typography>
          <Typography component="li">
            Mevcut KSF plus mengenelerinin 1:1 değiştirilebilmesi sağlanmıştır.
          </Typography>
          <Typography component="li">
            Pnömatik izleme ile donatılabildiği için uygulama alanı daha da
            genişlemiştir.
          </Typography>
          <Typography component="li">
            SCHUNK TANDEM KSF3 kuvveti blokları, yüksek performanslı ve
            güvenilir çözümler sunar, işlemleri otomatikleştirir ve üretkenliği
            artırır.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TANDEM KSF3 Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/UaPpFpr6n_A"
            title="TANDEM KSF3 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TANDEM_KSF3;
