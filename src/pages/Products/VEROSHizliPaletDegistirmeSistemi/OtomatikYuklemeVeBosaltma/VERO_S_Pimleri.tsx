/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import veroSPimImage from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/vero-s-pimleri/vero-s-pimleri.png";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import { Helmet } from "react-helmet";

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

const VERO_S_Pimleri = () => {
  return (
    <Container>
      <Helmet>
        <title>VERO-S PİMLERİ - Ürün Detayları</title>
        <meta
          name="description"
          content="VERO-S PİMLERİ, iş parçalarının sıkma modülleri ile güvenilir ve hassas bir şekilde konumlandırılmasını sağlar."
        />
        <meta
          name="keywords"
          content="VERO-S PİMLERİ, SCHUNK, sıkma pimleri, hassas konumlandırma, sıkma modülleri, tekrarlanabilirlik"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          VERO-S PİMLERİ
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          VERO-S NSE3 modülleri ile uyumlu sıkma pimleri, iş parçalarının sıkma
          modülleri ile güvenilir ve hassas bir şekilde konumlandırılmasını
          sağlar.
        </Typography>
        <Box display="flex" justifyContent="center" gap={4} px={8}>
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
            <ProductImage src={veroSPimImage} alt="VERO-S PİMLERİ" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                &lt; 0.005 mm doğrulukta kolay birleştirme süreci sağlar.
              </Typography>
              <Typography component="li">
                Tüm NSE3 modülleri ile uyumlu ve VERO-S NSE plus modülleri ile
                %100 uyumludur.
              </Typography>
              <Typography component="li">
                Karışıklık veya yanlış kullanım riski yoktur.
              </Typography>
              <Typography component="li">
                Hassas konumlandırma için mikron düzeyinde tekrarlanabilirlik
                sağlar.
              </Typography>
              <Typography component="li">
                Farklı uygulamalar için çeşitli sıkma pimi seçenekleri
                mevcuttur.
              </Typography>
              <Typography component="li">
                Maksimum süreç güvenilirliği ve uzun ömür sunar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Additional Details Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Sıkma Pimleri Çeşitleri
        </Typography>
        <Typography
          component="ul"
          sx={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}
        >
          <Typography component="li" mb={2}>
            <strong>VERO-S SPA, SPB, SPC 40:</strong> Sabitleme ve mikron
            hassasiyetinde konumlandırma için.
          </Typography>
          <Typography component="li" mb={2}>
            <strong>VERO-S SPA-X, SPA-XY 40:</strong> Doğruluk sapmalarını ±1
            mm’ye kadar telafi etmek için.
          </Typography>
          <Typography component="li" mb={2}>
            <strong>VERO-S SPA-S, SPB-S, SPC-S 40:</strong> Maksimum 3.5 mm
            montaj derinliği gerektirir.
          </Typography>
          <Typography component="li" mb={2}>
            <strong>VERO-S SPG 40:</strong> Patentli esnek konik ile hassas
            pimler, &lt; 0.002 mm tekrarlanabilirlik sağlar.
          </Typography>
          <Typography component="li">
            <strong>VERO-S SP-VL:</strong> Sıkma pimi uzantıları, makine milinin
            erişilebilirliğini artırır.
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default VERO_S_Pimleri;
