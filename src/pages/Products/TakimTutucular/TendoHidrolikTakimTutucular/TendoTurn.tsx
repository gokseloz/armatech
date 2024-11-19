import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoTurn from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-turn.webp";
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

const TendoTurn = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO Turn - Ürün Detayları</title>
        <meta
          name="description"
          content="TENDO Turn, olağanüstü sapma ve tekrar doğruluğu, kolay kullanımı ve titreşim sönümleme özelliği ile dikkat çeker. Mükemmel yüzey kalitesi sağlar."
        />
        <meta
          name="keywords"
          content="TENDO Turn, hidrolik takım tutucu, titreşim sönümleme, kolay kullanım, yüksek hız, hassas işleme"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO Turn
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO Turn, olağanüstü sapma ve tekrar doğruluğu, kolay kullanımı ve
          titreşim sönümleme özelliği ile farkını ortaya koyar. Mükemmel iş
          parçası yüzeylerini garanti eder.
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
            <ProductImage src={tendoTurn} alt="TENDO Turn" />
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
                Ek ekipman gerektirmeden hızlı araç değişimleri, zaman
                kazandırır ve kurulum maliyetlerini azaltır.
              </Typography>
              <Typography component="li">
                Kapalı sistem tasarımı dayanıklılığı ve minimum bakım
                gereksinimlerini sağlar.
              </Typography>
              <Typography component="li">
                Farklı çapların sıkılması için ara pensler esnek çözümler sunar.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetle kesici takım uzunluk ayarı yapabilirsiniz.
              </Typography>
              <Typography component="li">
                Optimal yüzey sonuçları ve güvenli işleme için tutarlı
                hassasiyet sağlar.
              </Typography>
              <Typography component="li">
                Mikro titreşimleri sönümleyerek engeller, makine milini korur ve
                takım ömrünü uzatır.
              </Typography>
              <Typography component="li">
                25.000 RPM'de G2.5 denge derecesiyle yüksek hızlar için
                uygundur.
              </Typography>
              <Typography component="li">
                Çeşitli uygulamalar için TENDO SVL ve TRIBOS SVL uzantılarıyla
                uyumludur.
              </Typography>
              <Typography component="li">
                Temiz sıkma yüzeyleri için tork iletimi sağlar ve verimli işleme
                imkanı sunar.
              </Typography>
              <Typography component="li">
                Ara katmanlar farklı çapların sıkılmasına izin verir,
                maliyetleri azaltır ve sıkma gücünü artırır.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>
    </Container>
  );
};

export default TendoTurn;
