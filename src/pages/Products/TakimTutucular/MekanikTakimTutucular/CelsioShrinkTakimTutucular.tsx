import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import celsioShrink from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/celsio-shrink.png";
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

const CelsioShrinkTakimTutucular = () => {
  return (
    <Container>
      <Helmet>
        <title>CELSIO - Shrink Takım Tutucular</title>
        <meta
          name="description"
          content="CELSIO, hassas işleme ihtiyaçlarınıza yönelik yenilikçi bir ısıl büzüşme sistemidir. Yüksek sıkma kuvveti, hassasiyet ve verimlilik sağlar."
        />
        <meta
          name="keywords"
          content="CELSIO, Shrink Takım Tutucu, ısıl büzüşme, hassas işleme, yüksek tork, hızlı işleme"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          CELSIO - Shrink Takım Tutucular
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          CELSIO, çeşitli ıtıma cihazlarına uygun bir ısıtmalı takım tutucu
          sistemidir. Hassas işleme ihtiyaçlarınızı karşılamak için tasarlanmış
          yenilikçi ve etkili bir çözümdür.
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
            <ProductImage
              src={celsioShrink}
              alt="CELSIO - Shrink Takım Tutucular"
            />
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
                Yüksek torkların iletimi için güvenli ve sürtünmeli sıkma
                sağlar.
              </Typography>
              <Typography component="li">
                50,000 RPM'ye kadar yüksek hızlı işleme ve HSS ve HM araçlarının
                kullanımı için uygundur.
              </Typography>
              <Typography component="li">
                DIN 69882-8'e göre sapma doğruluğu ≤ 0.003 mm ile hassas ve
                güvenilir işlemler sağlar.
              </Typography>
              <Typography component="li">
                Frezeleme, son frezeleme, delme veya HSC işleme gibi çeşitli
                işlemlerde kullanılabilir.
              </Typography>
              <Typography component="li">
                Uzun mandrenlerle güçlendirilmiş şaft incelik ve sağlamlık
                arasında etkili bir denge sunar.
              </Typography>
              <Typography component="li">
                CELSIO SVL ısıl büzüşme uzantıları ile ideal şekilde
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri ve radyal rijitlik ile işleme
                süreçlerini optimize eder ve verimliliği artırır.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          CELSIO'nun Performansını Keşfedin
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

export default CelsioShrinkTakimTutucular;
