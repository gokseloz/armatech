import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoWZS from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-wzs.webp";
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

const TendoWZS = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO WZS - Ürün Detayları</title>
        <meta
          name="description"
          content="TENDO WZS, hassas taşlama işlemleri için manuel çalıştırma ve kapalı sıkma sistemi ile donatılmış bir hidrolik takım tutucusudur."
        />
        <meta
          name="keywords"
          content="TENDO WZS, hidrolik takım tutucu, ekonomik taşlama, hassas taşlama, yüksek hassasiyet, yüzey kalitesi"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO WZS
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO WZS, hassas taşlama işlemleri için manuel çalıştırma ve kapalı
          sıkma sistemi ile donatılmıştır. Daha iyi talaş akışı ve düzgün kesme
          hareketi sağlar.
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
            <ProductImage src={tendoWZS} alt="TENDO WZS" />
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
                Daha ince dış kontur tasarımı, taşlama taşı ve takım tutucu
                arasında daha iyi erişim sağlar.
              </Typography>
              <Typography component="li">
                Uzun saplı özel takımlar 95 mm derinliğe kadar sıkılabilir.
              </Typography>
              <Typography component="li">
                Farklı çapların sıkılması yarıklı veya soğutucu sıvıya dayanıklı
                ara penslerle mümkündür.
              </Typography>
              <Typography component="li">
                Takım şaftında ölçülen &lt; 0.003 mm tekrar hassasiyeti, süreç
                güvenilirliği ile en iyi yüzey kalitesi ve şekil doğruluğunu
                sağlar.
              </Typography>
              <Typography component="li">
                Daha iyi talaş akışı, düzgün kesme hareketi ve önemli ölçüde
                artırılmış takım ömrü sağlar.
              </Typography>
              <Typography component="li">
                Makine milini korur, iş parçası yüzeylerini iyileştirir ve
                maliyet tasarrufu sağlar.
              </Typography>
              <Typography component="li">
                Ek sıkma cihazlarına yatırım yapmadan zaman ve enerji
                maliyetleri tasarrufu sağlar.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetinde kesici takım uzunluk ayarı, 10 mm ayar
                hareketi ile yapılabilir.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzantıları ile mükemmel kombinlenebilir.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO WZS'nin Performansını Keşfedin
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

export default TendoWZS;
