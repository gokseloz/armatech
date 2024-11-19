import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import kontrolUnitesiImage from "../../../assets/images/manyetik-tablalar/kontrol-unitesi.webp";
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

const KontrolUnitesi = () => {
  return (
    <Container>
      <Helmet>
        <title>Kontrol Ünitesi - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK MAGNOS KEH Plus, modüler tasarımıyla manyetik tablaların kontrolü ve farklı gereksinimlere uyum sağlar."
        />
        <meta
          name="keywords"
          content="Kontrol Ünitesi, manyetik kontrol, SCHUNK, MAGNOS KEH Plus"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Kontrol Ünitesi
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Modüler Sistem ile Gelişmiş Manyetik Kontrol
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
            <ProductImage src={kontrolUnitesiImage} alt="Kontrol Ünitesi" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Genişletilebilir modüler sistem, sekiz manyetik tablayı kontrol
                edebilir.
              </Typography>
              <Typography component="li">
                Uygulama durumuna bağlı çeşitli standart versiyonlar.
              </Typography>
              <Typography component="li">
                Kademeli tutma kuvveti ayarı, ince ve ağır iş parçalarını
                hizalamayı kolaylaştırır.
              </Typography>
              <Typography component="li">
                LCD ekran hata kodları gösterir, hızlı sorun çözümü sağlar.
              </Typography>
              <Typography component="li">
                Her manyetik tabla ve tutma kuvveti düzenleme bireysel olarak
                kontrol edilebilir.
              </Typography>
              <Typography component="li">
                Tüm kablolar gerektiğinde hızlı ve kolay değiştirilebilir.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Opsiyonlar ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            MAGNOS KEH Plus, kare kutup manyetik tablalar için uygundur.
          </Typography>
          <Typography component="li">
            Bir, iki, dört veya sekiz manyetik tabla kontrolü için üç temel
            versiyon sunar.
          </Typography>
          <Typography component="li">
            4-PIN ve 7-PIN konnektörlü kablolar, küçük ve büyük manyetik
            tablalarla uyumludur.
          </Typography>
          <Typography component="li">
            Modüler tasarımı, yeni sıkıştırma görevlerine hızlı uyum sağlar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Kontrol Ünitesini Keşfedin
        </Typography>
        <Box
          sx={{
            position: "relative",
            height: "600px",
            margin: "40px auto",
            width: "80%",
            maxWidth: "800px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/jjhxZNalLQw&t=18s"
            title="Kontrol Ünitesi Video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Box>
    </Container>
  );
};

export default KontrolUnitesi;
