import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import taslamaManyetigiImage from "../../../assets/images/manyetik-tablalar/taslama-manyetigi.webp";
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

const TaslamaManyetigi = () => {
  return (
    <Container>
      <Helmet>
        <title>Taşlama Manyetiği - Ürün Detayları</title>
        <meta
          name="description"
          content="MAGNOS elektro-permanent paralel kutuplu manyetik tablalar, yüksek hassasiyetli işlemler için tasarlanmıştır."
        />
        <meta
          name="keywords"
          content="Taşlama Manyetiği, manyetik tabla, MAGNOS, paralel kutup, SCHUNK"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Taşlama Manyetiği
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Yüksek hassasiyetli işlemler için MAGNOS elektro-permanent paralel
          kutuplu manyetik tablalar.
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
            <ProductImage src={taslamaManyetigiImage} alt="Taşlama Manyetiği" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                İş parçalarının deformasyonsuz ve düşük titreşimle sıkılmasını
                sağlar.
              </Typography>
              <Typography component="li">
                MAG/DEMAG için tek bir enerji kaynağı gerektirir, enerji
                verimliliği sunar.
              </Typography>
              <Typography component="li">
                Farklı iş parçaları veya işlemler için çok aşamalı tutma kuvveti
                ayarı yapılabilir.
              </Typography>
              <Typography component="li">
                İki farklı aktüasyon yöntemi sunar.
              </Typography>
              <Typography component="li">
                Esnek ve verimli kullanım sağlar.
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
            MAGNOS elektro-permanent paralel kutuplu manyetik tablalar,
            hassasiyetli işlemler için optimize edilmiştir.
          </Typography>
          <Typography component="li">
            Paralel kutuplu manyetik kutup veya radial manyetik kutup adı
            verilen farklı yapılandırmalar mevcuttur.
          </Typography>
          <Typography component="li">
            Bu özellikler, kullanım sırasında enerji tasarrufu ve yüksek
            esneklik sağlar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Taşlama Manyetiği Performansını Keşfedin
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
            src="https://www.youtube.com/embed/vF7Dmrgs4ac"
            title="Taşlama Manyetiği Video"
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

export default TaslamaManyetigi;
