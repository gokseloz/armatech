/* eslint-disable react-refresh/only-export-components */
import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import veroSTombstonesImage from "../../../assets/images/kuleler/vero-s-tombstones.webp";
import { Helmet } from "react-helmet";
import Container from "../../../components/Container";
import theme from "../../../theme";
import ImageAndFeaturesContainer from "../../../components/ProductDetail/ImageAndFeaturesContainer";

const HeroSection = styled(Box)({
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
});

const ProductImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  maxHeight: "400px",
});

const VERO_S_Tombstones = () => {
  return (
    <Container>
      <Helmet>
        <title>VERO-S TombStones - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK VERO-S Tombstones, hızlı değişim palet sistemi ile esneklik ve azaltılmış kurulum maliyetleri sağlar. Yüksek tekrar edilebilirlik ve mükemmel titreşim emilimi sunar."
        />
        <meta
          name="keywords"
          content="VERO-S TombStones, SCHUNK, kuleler, hızlı değişim sistemi, titreşim emilimi"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          VERO-S TombStones
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Tombstoneler, VERO-S ile birleştirilerek daha büyük esneklik ve
          azaltılmış kurulum maliyetleri sağlar.
        </Typography>
        <ImageAndFeaturesContainer>
          <Box
            sx={{
              flex: 1,
              width: 250,
              minWidth: 250,
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              padding: 2,
              boxShadow: theme.shadows[5],
            }}
          >
            <ProductImage src={veroSTombstonesImage} alt="VERO-S TombStones" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Yüksek tekrar edilebilirlik sağlayan hızlı sıkma aparat
                değişimi.
              </Typography>
              <Typography component="li">
                Yüksek rijitlik ve mükemmel titreşim emilimi yapan gövde
                tasarımı.
              </Typography>
              <Typography component="li">
                0.01 mm'lik yüksek taban doğruluğu, ek yüzey taşlama
                gerektirmez.
              </Typography>
              <Typography component="li">
                Tüm yaygın işleme plakaları için uygun olan 400 x 400 mm ve 500
                x 500 mm standart palet boyutları mevcuttur.
              </Typography>
              <Typography component="li">
                DIN 55 201 ve JIS 6337-1980 standartlarına göre makine
                araçlarına hızlı ve kolay adaptasyon sağlar.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Seçenekler ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            VERO-S tombstoneleri, VERO-S NSE-T3 138-V1 hızlı değişim palet
            modülleri ile önceden hazırlanmıştır.
          </Typography>
          <Typography component="li">
            SCHUNK'un geniş modüler sisteminden zero point modülleri çok kısa
            sürede takılabilir.
          </Typography>
          <Typography component="li">
            Kurulum sürelerini azaltırken makine çalışma sürelerini artırır.
          </Typography>
          <Typography component="li">
            400 x 400 mm veya 500 x 500 mm palet boyutlarına sahip çift eğimli,
            üçgen ve sekizgen tombstone seçenekleri mevcuttur.
          </Typography>
          <Typography component="li">
            Modüller sırasında merkezi bağlantı ile hızlı ve kolay kilit açma
            imkanı sunar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          VERO-S TombStones Performansını Keşfedin
        </Typography>
        <Box
          sx={{
            position: "relative",
            height: "600px",
            margin: "40px auto",
            width: "80%",
            maxWidth: "800px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/g__xj_qfcsU"
            title="VERO-S TombStones Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default VERO_S_Tombstones;
