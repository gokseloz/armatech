/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import itendo2 from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-itendo2.webp";
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

const YouTubeIframe = styled("iframe")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
});

const iTendo2 = () => {
  return (
    <Container>
      <Helmet>
        <title>iTENDO² - Ürün Detayları</title>
        <meta
          name="description"
          content="iTENDO², akıllı hidrolik takım tutucular için devrim niteliğinde bir sistemdir. Gerçek zamanlı işlem izleme ve optimizasyonu sağlar."
        />
        <meta
          name="keywords"
          content="iTENDO², akıllı hidrolik takım tutucu, işlem izleme, işlem optimizasyonu, SCHUNK"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          iTENDO²
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          iTENDO², iş parçasına yakın bir ivme sensörü kullanarak işlem
          optimizasyonu için hassas stabilite değerleri sağlar. Üç farklı
          varyant ile sunulur: Pad, Easy Connect ve Easy Monitor.
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
            <ProductImage src={itendo2} alt="iTENDO²" />
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
                Akıllı gerçek zamanlı sensör sistemi ile işlem optimizasyonu
                sağlar.
              </Typography>
              <Typography component="li">
                Kolay işlem izleme ve maksimize edilmiş araç servis ömrü sunar.
              </Typography>
              <Typography component="li">
                30.000 RPM'ye kadar dönme hızlarında kullanabilirsiniz.
              </Typography>
              <Typography component="li">
                %100 uyumluluk ve kolay entegrasyon sağlar.
              </Typography>
              <Typography component="li">
                SCHUNK standart takım tutucularıyla zaman alıcı yeniden
                programlama olmadan 1:1 değişim sağlar.
              </Typography>
              <Typography component="li">
                Herhangi bir gereksinim ve karmaşıklık seviyesi için uygun
                çözümler sunar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          iTENDO²'nin Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/wM7Y3jO7b7o"
            title="iTENDO² Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default iTendo2;
