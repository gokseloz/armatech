/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import wdm5xImage from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/wdm5x/wdm5x.webp";
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

const VERO_S_WDM5X = () => {
  return (
    <Container>
      <Helmet>
        <title>WDM-5X - Ürün Detayları</title>
        <meta
          name="description"
          content="WDM-5X sıkma modülleri, esnek sütun tasarımı ile beş taraflı işleme süreçlerini optimize eder ve havacılık sektörü için yüksek hassasiyet sağlar."
        />
        <meta
          name="keywords"
          content="WDM-5X, SCHUNK, sıkma modülleri, palet sistemi, otomasyon, beş taraflı işleme, havacılık sektörü"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          WDM-5X
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          WDM-5X sıkma modülleri, esnek sıkma sütunları ve modüler tasarımı ile
          beş taraflı işleme süreçlerini optimize eder ve yüksek hassasiyetli
          işleme çözümleri sunar.
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
            <ProductImage src={wdm5xImage} alt="WDM-5X" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Esnek sıkma modülleri, robot tabanlı giriş-çıkış işlemleri ve
                palet otomasyonu ile makine kullanımını maksimuma çıkarır.
              </Typography>
              <Typography component="li">
                Alüminyum parçaların hassas işlenmesi ve havacılık sektörü için
                yüksek kalite sunar.
              </Typography>
              <Typography component="li">
                Beş taraflı işleme sırasında engelleyici konturları önler ve
                spindle’ın tüm bileşen pozisyonlarına erişimini sağlar.
              </Typography>
              <Typography component="li">
                Sütun sıkma prensibi, iş parçası üzerinde kesme açıklıkları
                oluşturur ve farklı yüksekliklerde işleme imkânı tanır.
              </Typography>
              <Typography component="li">
                Palet üzerinden sıkma sütununa bağlanan iş parçaları için 15 Nm
                tork ile manuel ve ortam gerektirmeyen aktüasyon sağlar.
              </Typography>
              <Typography component="li">
                3.5 mm derinlikteki kılavuz pimleriyle, engelleyici konturlardan
                kaçınarak hassas bir pozisyonlama sunar.
              </Typography>
              <Typography component="li">
                SCHUNK’un geniş pimi portföyü, iş parçası ağırlığına ve metal
                kesme işlemine göre özelleştirilmiş bağlama seçenekleri sunar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>
    </Container>
  );
};

export default VERO_S_WDM5X;
