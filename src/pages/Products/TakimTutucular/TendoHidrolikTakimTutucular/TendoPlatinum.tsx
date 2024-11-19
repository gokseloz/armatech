import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoPlatinum from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-platinum.webp";
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

const TendoPlatinum = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO Platinum - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK TENDO Platinum, standart makine takım millerine uyumlu, hassas ve çok yönlü bir hidrolik takım tutucusudur. DIN 69882-7'ye uygundur."
        />
        <meta
          name="keywords"
          content="SCHUNK TENDO Platinum, hidrolik takım tutucu, çok yönlü takım tutucu, DIN 69882-7, hassas işleme"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO Platinum
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO Platinum, standart makine takım millerine uyumlu hassas ve çok
          yönlü bir hidrolik takım tutucusudur. DIN 69882-7'ye uygundur.
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
            <ProductImage src={tendoPlatinum} alt="SCHUNK TENDO Platinum" />
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
                Ø6 ile 32 mm arasında farklı çapları doğrudan sıkabilir veya
                Ø3-30 takım şaftlarında içten soğutma sıvısı geçebilen ya da
                geçirmez ara penslerle tek bir takım tutucuda kullanabilirsiniz.
              </Typography>
              <Typography component="li">
                Makine milini koruma, iş parçası yüzeylerinin iyileştirilmesi ve
                takım ömrünün uzatılmasıyla maliyetleri azaltır.
              </Typography>
              <Typography component="li">
                Ek sıkma cihazlarına yatırım yapma ve enerji maliyetleri olmadan
                zaman ve maliyet tasarrufu sağlar.
              </Typography>
              <Typography component="li">
                TENDO SVL ve TRIBOS SVL uzantılarıyla uyumlu şekilde mükemmel
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                Kuru sıkma yüzeyleri, yağ veya gres artıklarının kir yuvalarına
                itilmesiyle sağlanır.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO Platinum'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/xqnnVoHNDv0"
            title="SCHUNK TENDO Platinum Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TendoPlatinum;
