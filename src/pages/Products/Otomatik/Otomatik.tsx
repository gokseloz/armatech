import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import otomatikImage from "../../../assets/images/otomatik/otomatik.jpg";
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

const Otomatik = () => {
  return (
    <Container>
      <Helmet>
        <title>Otomatik - Parça ve Palet Otomasyonu</title>
        <meta
          name="description"
          content="SCHUNK'un R-C2 sistemi, parça ve palet otomasyonunun avantajlarını bir araya getirerek kurulum sürelerini azaltır ve iş parçası otomasyonu sağlar."
        />
        <meta
          name="keywords"
          content="Otomatik, SCHUNK, parça otomasyonu, palet otomasyonu, R-C2 sistemi"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Otomatik
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Parça ve palet otomasyonu bir arada: Zekice kombinasyon ile zaman ve
          maliyet tasarrufu
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
            <ProductImage src={otomatikImage} alt="Otomatik" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Detaylar
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                SCHUNK'un R-C2 sistemi, parça ve palet otomasyonunun
                avantajlarını birleştiren yenilikçi bir konsept sunar.
              </Typography>
              <Typography component="li">
                Robot, depolama rafındaki iş parçasını R-C2 merkezleme mengenesi
                ile tamamen otomatik olarak kavrar.
              </Typography>
              <Typography component="li">
                İş parçasını taşıyan mengene, bir palet gibi hızlı değişim palet
                sistemine yüklenir.
              </Typography>
              <Typography component="li">
                R-C2, iş parçalarının manuel müdahale olmadan altı yüzeyinin
                işlenmesini sağlayan tek sistemdir.
              </Typography>
              <Typography component="li">
                Sistem, kurulum sürelerini önemli ölçüde azaltır ve daha fazla
                iş parçası otomasyonu sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>
    </Container>
  );
};

export default Otomatik;
