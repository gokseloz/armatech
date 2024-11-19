import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import kaldiracImage from "../../../assets/images/manyetik-tablalar/kaldirac.webp";
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

const Kaldirac = () => {
  return (
    <Container>
      <Helmet>
        <title>Kaldıraç - Ürün Detayları</title>
        <meta
          name="description"
          content="Manuel kaldıraç manyetikleri, yüksek taşıma kapasitesi ve güvenli tutma gücü sağlar. Harici enerji kaynağı gerektirmez."
        />
        <meta
          name="keywords"
          content="Kaldıraç, manyetik kaldıraç, manuel kaldıraç, SCHUNK"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Kaldıraç
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Yüksek taşıma kapasitesi ve güvenli tutma gücü sağlayan manuel
          kaldıraç manyetikleri.
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
            <ProductImage src={kaldiracImage} alt="Kaldıraç" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Maksimum kaldırma performansında düşük ağırlık sağlar.
              </Typography>
              <Typography component="li">
                Kolay aktüasyon için küçük kuvvetlerle tek elle kullanım imkanı
                sunar.
              </Typography>
              <Typography component="li">
                80°C'ye kadar güvenli çalışma imkanı sağlar.
              </Typography>
              <Typography component="li">
                Harici enerji kaynağı gerektirmeyen, tamamen kapalı bir
                sistemdir.
              </Typography>
              <Typography component="li">
                Güç kesintilerinde bile iş parçalarının güvenli şekilde
                tutulmasını sağlar.
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
            Kompakt ve hafif tasarımıyla dar alanlarda kullanım avantajı sağlar.
          </Typography>
          <Typography component="li">
            Talaşlar ve toz parçacıklarının manyetik etkisiyle karşılaşma riski
            yoktur.
          </Typography>
          <Typography component="li">
            Güvenli ve etkili tasarımıyla çeşitli endüstriyel uygulamalarda
            kullanılabilir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Kaldıraç Performansını Keşfedin
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
            src="https://www.youtube.com/embed/Mq-JcvdF-1U"
            title="Kaldıraç Video"
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

export default Kaldirac;
