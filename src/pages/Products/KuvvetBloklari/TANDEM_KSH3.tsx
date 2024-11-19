/* eslint-disable react-refresh/only-export-components */
import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import tandemKSH3Image from "../../../assets/images/kuvvet-bloklari/tandem-ksh3.webp";
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

const TANDEM_KSH3 = () => {
  return (
    <Container>
      <Helmet>
        <title>TANDEM KSH3 - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK TANDEM KSH3, yüksek sıkma kuvvetleri ve yeni teknik özellikler sunan, kompakt tasarıma sahip hidrolik 2-çeneli kuvvet bloklarıdır."
        />
        <meta
          name="keywords"
          content="TANDEM KSH3, SCHUNK, kuvvet blokları, hidrolik sıkma, sıkma kuvveti"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TANDEM KSH3
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK TANDEM KSH3, yüksek sıkma kuvvetleri ve yeni teknik özellikler
          sunan, kompakt tasarıma sahip hidrolik 2-çeneli kuvvet bloklarıdır.
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
            <ProductImage src={tandemKSH3Image} alt="TANDEM KSH3" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Geniş ve güçlü standart hidrolik sıkma kuvveti blokları
                yelpazesi ile en yüksek esnekliği sağlar.
              </Typography>
              <Typography component="li">
                Mengenin açık veya sıkılmış olup olmadığını izleme imkanı.
              </Typography>
              <Typography component="li">
                Hassas takoz sıkma kuvveti bloğu mükemmel işleme sonuçları
                sağlar.
              </Typography>
              <Typography component="li">
                Yüksek verimlilikte takoz sistemi, yüksek sıkma kuvvetleri ile
                süreç güvenilirliği sağlar.
              </Typography>
              <Typography component="li">
                Fonksiyonel parçaların tüm yüzeyleri sertleştirilmiş ve
                zımparalanmış uzun hizmet ömrü sağlar.
              </Typography>
              <Typography component="li">
                Kare tasarım ve ideal dış tasarım, iki kurulumda 6 yüzeyli
                işleme için idealdir.
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
            SCHUNK TANDEM KSH3, hidrolik kuvvet blokları için geniş uygulama
            yelpazesi sunar.
          </Typography>
          <Typography component="li">
            Dinamik basınç ile temel çene pozisyonunun patentli izlenmesi.
          </Typography>
          <Typography component="li">
            Mevcut KSH plus mengenelerinin 1:1 değiştirilebilmesi sağlanmıştır.
          </Typography>
          <Typography component="li">
            Standart olarak, mengeneler endüktif çene izleme ile donatılabilir.
          </Typography>
          <Typography component="li">
            Bu özellikler, SCHUNK TANDEM KSH3 kuvveti bloklarını, yüksek
            hassasiyetli ve esnek işleme ihtiyaçlarını karşılayan mükemmel bir
            çözüm haline getirir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TANDEM KSH3 Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/UaPpFpr6n_A"
            title="TANDEM KSH3 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TANDEM_KSH3;
