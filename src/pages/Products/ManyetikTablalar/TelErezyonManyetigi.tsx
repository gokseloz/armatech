import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import telErozyonImage from "../../../assets/images/manyetik-tablalar/tel-erozyon-manyetigi.webp";
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

const TelErozyonManyetigi = () => {
  return (
    <Container>
      <Helmet>
        <title>Tel Erozyon Manyetiği - Ürün Detayları</title>
        <meta
          name="description"
          content="EDM uygulamaları için tasarlanmış elektro-permanent manyetik modüller, küçük iş parçalarının düşük deformasyon ve titreşimle işlenmesini sağlar."
        />
        <meta
          name="keywords"
          content="Tel Erozyon Manyetiği, EDM, manyetik modüller, SCHUNK"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Tel Erozyon Manyetiği
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          EDM Uygulamaları için Elektro-Permanent Manyetik Modüller
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
            <ProductImage src={telErozyonImage} alt="Tel Erozyon Manyetiği" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Küçük iş parçalarının (20 x 20 mm'ye kadar) işlenmesi için
                gereken sıkıştırma kuvvetini sağlar.
              </Typography>
              <Typography component="li">
                Paslanmaz çelik çerçeve, kimyasal sıvılar ve hava ile temasta
                oksidasyonu önler.
              </Typography>
              <Typography component="li">
                Düşük deformasyon ve titreşimli sıkıştırma, iyileştirilmiş yüzey
                hassasiyeti sağlar.
              </Typography>
              <Typography component="li">
                Günümüz elektro-permanent teknolojisi, enerji verimliliği sunar.
              </Typography>
              <Typography component="li">
                Makine kontrol sistemleriyle uyumludur ve otomasyon uygulamaları
                için uygundur.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Opsiyonlar ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            Manyetik modüller, EDM makinelerine hızlı ve kolay monte edilebilir.
          </Typography>
          <Typography component="li">
            Kendine yeterlidir ve sadece kısa bir MAG/DEMAG işlemi için enerji
            gerektirir.
          </Typography>
          <Typography component="li">
            Paslanmaz çelik yapısı, uzun ömür ve düşük bakım gereksinimi sağlar.
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default TelErozyonManyetigi;
