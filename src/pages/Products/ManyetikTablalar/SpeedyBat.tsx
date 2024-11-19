import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import speedyBatImage from "../../../assets/images/manyetik-tablalar/speedy-bat.webp";
import { Helmet } from "react-helmet";
import Container from "../../../components/Container";
import theme from "../../../theme";
import ImageAndFeaturesContainer from "../../../components/ProductDetail/ImageAndFeaturesContainer";

const HeroSection = styled(Box)({
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
});

const ProductImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  maxHeight: "400px",
});

const SpeedyBat = () => {
  return (
    <Container>
      <Helmet>
        <title>Speedy Bat - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK Speedy Bat, pil gücüyle çalışan elektrokalıcı manyetik kaldıraç, yüksek tutma gücü, güvenilirlik ve ergonomik kontrol sağlar."
        />
        <meta
          name="keywords"
          content="Speedy Bat, manyetik kaldırma, pil gücüyle manyetik, SCHUNK, elektrokalıcı manyetik kaldıraç"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Speedy Bat
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Pil Gücüyle Çalışan Elektrokalıcı Manyetik Kaldıraç
        </Typography>
        <ImageAndFeaturesContainer>
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
            <ProductImage src={speedyBatImage} alt="Speedy Bat" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Şarj işlemi sırasında yalnızca elektrik bağlantısı gereklidir ve
                bu da yüksek esneklik sağlar.
              </Typography>
              <Typography component="li">
                Yük kancası, kazara devre dışı bırakmayı önleyen yakınlık
                anahtarıyla donatılmıştır.
              </Typography>
              <Typography component="li">
                Elektrokalıcı teknoloji, manyetikleştirme/demanyetizasyon
                işlemleri için tek seferlik enerji sağlar, güç kaynağı olmadan
                yük güvenli bir şekilde taşınabilir.
              </Typography>
              <Typography component="li">
                Teslimat kapsamında el kumandası bulunur ve iş parçalarını
                taşırken maksimum ergonomi ve kontrol sağlar.
              </Typography>
              <Typography component="li">
                Yüksek sıcaklık dayanımı sayesinde 80°C'ye kadar güvenli çalışma
                imkanı sunar.
              </Typography>
              <Typography component="li">
                700 manyetikleştirme ve demanyetizasyon işlemini destekleyen
                standart pil ile çalışır.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Seçenekler ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            Speedy Bat, düz iş parçalarını maksimum güvenilirlikle kaldırmak
            üzere geliştirilmiştir.
          </Typography>
          <Typography component="li">
            Standart pil, 700 manyetikleştirme ve demanyetizasyon işlemi
            gerçekleştirebilir.
          </Typography>
          <Typography component="li">
            Pil gücüyle çalışan elektrokalıcı manyetik kaldıraç, endüstriyel
            uygulamalarda esneklik, güvenilirlik ve kullanım kolaylığı sağlar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Speedy Bat Performansını Keşfedin
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
            src="https://www.youtube.com/embed/76d65WAP7oU"
            title="Speedy Bat Video"
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

export default SpeedyBat;
