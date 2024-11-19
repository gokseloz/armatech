import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoZero from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-zero.webp";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import { Helmet } from "react-helmet";
import ImageAndFeaturesContainer from "../../../../components/ProductDetail/ImageAndFeaturesContainer";

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

const TendoZeroDetailPage = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO Zero - Ürün Detayları</title>
        <meta
          name="description"
          content="TENDO Zero, mükemmel çalışma hassasiyeti ve sıkı toleranslar gerektiren prosesler için uyumlu bir hidrolik takım tutucusudur. Telafi edilebilir çalışma hatası sağlar."
        />
        <meta
          name="keywords"
          content="TENDO Zero, hidrolik takım tutucu, sıkı tolerans, yüksek hız, HSC işleme, hassas işleme"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO Zero
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO Zero, delme, ince delme ve son işlemde sıkı toleranslar
          gerektiğinde veya mükemmel çalışma hassasiyeti şartı istenilen
          prosesler için uyumludur.
        </Typography>
        <ImageAndFeaturesContainer>
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
            <ProductImage src={tendoZero} alt="TENDO Zero" />
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
                0 μm'ye kadar ayarlanabilir çalışma hatası hassasiyeti sağlar.
              </Typography>
              <Typography component="li">
                Büyük sıkma basıncı, yağ, gres veya yağlayıcı kalıntılarının
                oluk içine itilmesini sağlar.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 denge derecesi ile yüksek hızlar ve HSC
                işleme için uygundur.
              </Typography>
              <Typography component="li">
                Makine milini koruma, iş parçası yüzeylerinin iyileştirilmesi ve
                takım ömrünün uzatılmasıyla maliyetleri azaltır.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzantılarıyla uyumlu şekilde mükemmel
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                Ek sıkma cihazlarına yatırım yapma ve enerji maliyetleri olmadan
                zaman ve maliyet tasarrufu sağlar.
              </Typography>
              <Typography component="li">
                Tamamen kapalı sistem uzun bir servis ömrü sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO Zero'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/3tdD9wSwYk0"
            title="TENDO Zero Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TendoZeroDetailPage;
