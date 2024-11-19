import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoRLA from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-rla.webp";
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

const TendoRLA = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO RLA - Ürün Detayları</title>
        <meta
          name="description"
          content="TENDO RLA, mikron hassasiyetinde konumlandırma sağlayan bir hidrolik takım tutucusudur. Kurulum süresini en aza indirir ve yüksek hızlarda uygundur."
        />
        <meta
          name="keywords"
          content="TENDO RLA, hidrolik takım tutucu, mikron hassasiyet, takım uzunluk ayarı, HSC işleme, yüksek hız"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO RLA
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO RLA, hassas bir dişli takımın yönlendirildiğinde, takım uzunluğu
          için mikron-hassas konumlandırma sağlayarak kurulum süresini en aza
          indiren bir hidrolik takım tutucudur.
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
            <ProductImage src={tendoRLA} alt="TENDO RLA" />
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
                Kesici takımının mikron-hassas uzunluk ayarını garanti eder.
              </Typography>
              <Typography component="li">
                Kendi kendine kilitleyen ayar vidası sayesinde konum değişikliği
                olmaz.
              </Typography>
              <Typography component="li">
                Ayar Vida Radial Değişikliğinden denge derecesi etkilenmez.
              </Typography>
              <Typography component="li">
                10 mm ayar aralığı ve ön ve arka sabitlemeye sahip ayar vidası,
                tüm sıkma çapları için mikron-hassas kesici takım uzunluk ayarı
                yapılabilir.
              </Typography>
              <Typography component="li">
                Çevresel ekipman olmadan saniyeler içinde mikron-hassas takım
                değişimi yapılabilir.
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
                Çok yönlü TENDO SVL ve TRIBOS SVL uzantılarıyla mükemmel şekilde
                kombinlenebilir.
              </Typography>
              <Typography component="li">
                Farklı çapları sıkabilmek için içten soğutma sıvısı geçebilen
                veya geçirmez ara pensler kullanılabilir.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>
    </Container>
  );
};

export default TendoRLA;
