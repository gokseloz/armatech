import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoLSS from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-lss.webp";
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

const VideoContainer = styled(Box)({
  position: "relative",
  height: "600px",
  margin: "40px auto",
  width: "80%",
  maxWidth: "800px",
});

const TendoLSS = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO LSS - Ürün Detayları</title>
        <meta
          name="description"
          content="TENDO LSS, dar yerlerde maksimum performans ve hassasiyet sunar. Süper ince tasarımı ile zorlu işlemler için idealdir."
        />
        <meta
          name="keywords"
          content="TENDO LSS, hidrolik takım tutucu, dar yerlerde işleme, hassas işleme, yüksek hız, HSC işleme"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO LSS
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO LSS, en zorlu işleri bile kolay iş parçası işleme için
          tasarlanmıştır. Dar açılarda işleme yapıldığında ve iş parçalarına
          ulaşması zor olduğunda mükemmel bir çözümdür.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          px={8}
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
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
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <ProductImage src={tendoLSS} alt="TENDO LSS" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack
              gap={2}
              component="ul"
              sx={{ paddingLeft: 2, listStyle: "disc" }}
            >
              <Typography component="li">
                İş parçasını işlemede dar yerlerin erişilebilirliği sağlanır.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetinde kesici takım uzunluk ayarı yapabilme
                özelliği, toplamda 10 mm ayar aralığı sunar.
              </Typography>
              <Typography component="li">
                Titreşimi sönümleyerek makine milini korur, iş parçası
                yüzeylerini iyileştirir ve takım ömrünü uzatarak maliyetleri
                azaltır.
              </Typography>
              <Typography component="li">
                Dönme hataları ve tekrar hassasiyeti ≤ 0.006 mm mikron düzeyinde
                kontrol altında tutulur.
              </Typography>
              <Typography component="li">
                Ek sıkma cihazlarına yatırım yapma ve enerji maliyetleri olmadan
                zaman ve maliyet tasarrufu sağlar.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 denge derecesi ile yüksek hızlar ve HSC
                işleme için uygundur.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzantılarıyla mükemmel şekilde
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                Farklı çapları sıkabilmek için içten soğutma sıvısı geçebilen
                veya geçirmez ara pensler kullanılabilir.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO LSS'nin Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">
              Bu ürün için video mevcut değil.
            </Typography>
          </Box>
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TendoLSS;
