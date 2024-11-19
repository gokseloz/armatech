import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tribosRImage from "../../../../assets/images/takim-tutucular/tribos/tribos-r.webp";
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

const TribosR = () => {
  return (
    <Container>
      <Helmet>
        <title>TRIBOS-R - Ürün Detayları</title>
        <meta
          name="description"
          content="TRIBOS-R, eşsiz çokgen petek yapısı ve artırılmış dış çapıyla, kesme işlemlerinde stabilite ve doğruluk sunar. Yüksek radyal rijitlik sağlar."
        />
        <meta
          name="keywords"
          content="TRIBOS-R, SCHUNK, takım tutucu, çokgen yapı, kesme stabilitesi, radyal rijitlik, yüksek hız"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TRIBOS-R
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TRIBOS-R, eşsiz çokgen petek yapısı ve artırılmış dış çapıyla, radyal
          rijitlik ve sönümleme arasında optimum bir denge sunar. En iyi dinamik
          sapma özelliklerini sağlar.
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
            }}
          >
            <ProductImage src={tribosRImage} alt="TRIBOS-R" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Yüksek radyal rijitlik ve stabilite sağlayarak kesme
                işlemlerinizde doğruluk sunar.
              </Typography>
              <Typography component="li">
                İş parçasındaki şekil ve pozisyon toleranslarında üstün sonuçlar
                elde edilmesini sağlar.
              </Typography>
              <Typography component="li">
                Titreşimleri etkili bir şekilde sönümler ve işleme kalitesini
                artırır.
              </Typography>
              <Typography component="li">
                Spindle - takım tutucu - kesici takım arasında yan yatma olmaz,
                böylece işleme doğruluğu sağlanır.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzantılarıyla ideal şekilde
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetinde kesici takım uzunluk ayarı, toplamda 10
                mm ayarlama hareketi sağlar.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 dengeli derecede yüksek hızlara uygundur.
              </Typography>
              <Typography component="li">
                İçten soğutması sıvısı geçebilen veya geçirmez ara pensler
                kullanılarak farklı çapların kavranması sağlanır.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TRIBOS-R'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/RHdN8QrSr6I"
            title="TRIBOS-R Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TribosR;
