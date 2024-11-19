import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import capakAlmaImage from "../../../assets/images/capak-alma/capak-alma-merged.webp";
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

const CapakAlma = () => {
  return (
    <Container>
      <Helmet>
        <title>Çapak Alma - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK çapak alma araçları, metal ve plastik gibi çeşitli malzemelerin bitirme işlemleri için güvenilir ve verimli çözümler sunar."
        />
        <meta
          name="keywords"
          content="Çapak Alma, SCHUNK, çapak temizleme araçları, metal işleme, keskin köşe temizleme"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Çapak Alma
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK çapak alma araçları, çeşitli metallerin yanı sıra plastiklerin
          de yeniden işlenmesine olanak tanır.
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
            <ProductImage src={capakAlmaImage} alt="Çapak Alma" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Değişken hız kontrolü sayesinde farklı araçlar kullanarak
                çeşitli iş parçalarının esnek bir şekilde işlenmesi.
              </Typography>
              <Typography component="li">
                Spindle yükü ve döner hız hakkında sürekli proses izleme ve geri
                bildirim sayesinde süreç güvenilirliği ve optimizasyon.
              </Typography>
              <Typography component="li">
                Fırçasız elektrik motoru sayesinde verimlilik ve uzun servis
                ömrü.
              </Typography>
              <Typography component="li">
                Keskin köşe temizleme işlemlerinde güvenlik ve kolaylık sağlar.
              </Typography>
              <Typography component="li">
                İhtiyaca uygun geniş çapak temizleme araç yelpazesi sunar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Stack sx={{ textAlign: "center", padding: 4, gap: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Çapak Alma Performansını Keşfedin
          </Typography>
          <iframe
            width="80%"
            height="500"
            src="https://www.youtube.com/embed/D4EiYykqEQ"
            title="Çapak Alma Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
        <Box>
          <iframe
            width="80%"
            height="500"
            src="https://www.youtube.com/embed/H39tO5rLSXY"
            title="Çapak Alma Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
        <Box>
          <iframe
            width="80%"
            height="500"
            src="https://www.youtube.com/embed/XalzvNYFeww"
            title="Çapak Alma Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
        <Box>
          <iframe
            width="80%"
            height="500"
            src="https://www.youtube.com/embed/aS-TfbxGfS0"
            title="Çapak Alma Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default CapakAlma;
