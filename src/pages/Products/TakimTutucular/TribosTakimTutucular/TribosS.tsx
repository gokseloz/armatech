import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tribosSImage from "../../../../assets/images/takim-tutucular/tribos/tribos-s.webp";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import { Helmet } from "react-helmet";
import ImageAndFeaturesContainer from "../../../../components/ProductDetail/ImageAndFeaturesContainer";

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

const TribosS = () => {
  return (
    <Container>
      <Helmet>
        <title>TRIBOS-S - Ürün Detayları</title>
        <meta
          name="description"
          content="TRIBOS-S, son derece ince tasarımı ile en sıkı işleme koşullarında bile hassasiyet sunar. Hassas iş parçası işleme uygulamaları için idealdir."
        />
        <meta
          name="keywords"
          content="TRIBOS-S, SCHUNK, takım tutucu, ince tasarım, hassas işleme, yüksek hız"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TRIBOS-S
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TRIBOS-S, son derece ince tasarımı ile en sıkı işleme koşullarında
          bile hassasiyet sunar. Hassas iş parçası işleme uygulamaları için
          idealdir.
        </Typography>
        <ImageAndFeaturesContainer>
          <Box
            sx={{
              flex: 1,
              width: 250,
              minWidth: 250,
              height: 400,
              display: "flex",
              justifyContent: "center",
              padding: 2,
              boxShadow: theme.shadows[5],
            }}
          >
            <ProductImage src={tribosSImage} alt="TRIBOS-S" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Girişimsel konturu minimize eder ve yüksek devir hızı sağlar.
              </Typography>
              <Typography component="li">
                Hassas iş parçası işleme uygulamaları, özellikle zor
                ulaşılabilir iş parçası bölgelerinde kullanılır.
              </Typography>
              <Typography component="li">
                Yüksek besleme hızı ve 85.000 RPM (HSC işleme) hız aralığı
                sağlar.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetinde kesici takım uzunluk ayarı, toplamda 10
                mm ayarlama hareketi bulunur.
              </Typography>
              <Typography component="li">
                İçten soğutması sıvısı geçebilen veya geçirmez ara pensler
                kullanılarak farklı çapların kavranması sağlanır.
              </Typography>
              <Typography component="li">
                Sürekli tekrarlanabilirlik &lt; 0.003 mm hassasiyeti vererek
                optimal yüzey sonuçları, yüksek hassasiyetli işleme ve güvenli
                işlemler sağlar.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzantılarıyla ideal şekilde
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                Mikron titreşimleri sönümleyerek engeller, makine milini korur
                ve takım ömrünü arttırarak maliyetleri düşürebilirsiniz.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 dengeli derecede yüksek hızlara uygundur.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TRIBOS-S'nin Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/gBAhXfUEuF8"
            title="TRIBOS-S Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TribosS;
