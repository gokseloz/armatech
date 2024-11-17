import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import erPensli from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/er-pensli.png";
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

const ErPensliTakimTutucular = () => {
  return (
    <Container>
      <Helmet>
        <title>ER Pensli Takım Tutucular - Ürün Detayları</title>
        <meta
          name="description"
          content="ER Collet Chuck, geniş ve esnek sıkma aralığı ile hassas ve güvenilir işleme sunar. Dayanıklı yapısı ve kapsamlı uyumluluğu ile üstün performans sağlar."
        />
        <meta
          name="keywords"
          content="ER Collet Chuck, ER Pensli Takım Tutucu, hassas işleme, esnek sıkma aralığı, yüksek hassasiyet, dayanıklı takım tutucu"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ER Pensli Takım Tutucular
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          ER Collet Chuck, DIN ISO 15488-B standardına uygun kolletlerdeki
          silindirik şaftlı takımların sıkılması için ideal bir çözümdür. Geniş
          sıkma aralığı ve yüksek hassasiyeti ile işleme süreçlerinizi optimize
          eder.
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
            <ProductImage src={erPensli} alt="ER Pensli Takım Tutucular" />
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
                Geniş sıkma aralığı sayesinde, farklı şaft toleranslarına sahip
                takımlar sıkılabilir.
              </Typography>
              <Typography component="li">
                Çift temaslı ER kollet chuck ile konik ve düz çalışma yüzeyi
                sunar, arayüz boşluğunu kapatarak stabilite sağlar.
              </Typography>
              <Typography component="li">
                DIN ISO 15488-B standardına uygun kolletlerde mükemmel sıkma ve
                tutma gücü sağlar.
              </Typography>
              <Typography component="li">
                Sağlam yapısı ve kaliteli malzemeleri sayesinde uzun ömürlü ve
                güvenilir performans sunar.
              </Typography>
              <Typography component="li">
                Çeşitli takım şaftları ve makine tipleri ile uyumludur, bu da
                farklı işleme uygulamalarında kullanılabilmesini sağlar.
              </Typography>
              <Typography component="li">
                Hassasiyet ve esneklik gerektiren işleme uygulamalarında üstün
                performans sunar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ER Pensli Takım Tutucuların Performansını Keşfedin
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

export default ErPensliTakimTutucular;
