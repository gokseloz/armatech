/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import ksxC2Image from "../../../assets/images/mengeneler/ksx-c2.webp";
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

const KSX_C2_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSX-C2 Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK KSX-C2 Mengene, ayarlanabilir sıkma merkezi ve aktif çene çekme fonksiyonu ile 5-eksen işleme için benzersiz özellikler sunar."
        />
        <meta
          name="keywords"
          content="KSX-C2 Mengene, SCHUNK, 5-eksen işleme, aktif çene çekme"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSX-C2 MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Ayarlanabilir sıkma merkezi, en büyük temel sıkma hareketi ve altıncı
          yüzeyin tam ve hassas işlenmesi için aktif çene çekme fonksiyonuna
          sahip 5-eksen mengene
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
            <ProductImage src={ksxC2Image} alt="KSX-C2 Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Aktif çene çekme fonksiyonu, altıncı yüzeyin tam ve hassas
                işlenmesine imkan tanır.
              </Typography>
              <Typography component="li">
                Çene hızlı değişim sistemi, herhangi bir alet kullanmadan yeni
                sıkma görevlerine hızla adapte olmayı sağlar.
              </Typography>
              <Typography component="li">
                Ayarlanabilir sıkma merkezi, küçük ve büyük iş parçalarının her
                zaman merkezi olarak sıkılmasını sağlar.
              </Typography>
              <Typography component="li">
                130 mm uzun temel sıkma hareketi, geniş bir uygulama alanı
                sunar.
              </Typography>
              <Typography component="li">
                Genişletilebilir sıkma aralığı, çeşitli iş parça uzunluklarının
                sıkılmasına olanak tanır.
              </Typography>
              <Typography component="li">
                Optimal erişim, parçanın beş farklı yüzeyinden işlenebilmesine
                izin verir.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Seçenekler ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            Tek çene etkili KSX-C2 mengenesi, 5-eksen işleme için birçok eşsiz
            özelliği bir araya getirir.
          </Typography>
          <Typography component="li">
            Ayarlanabilir sıkma merkezi, iş parçasına optimal erişim ve 130 mm
            temel sıkma hareketi, KSX-C2'yi son derece çok yönlü bir sıkma
            çözümü haline getirir.
          </Typography>
          <Typography component="li">
            En önemli özelliklerinden biri, entegre aktif çene çekme
            fonksiyonudur. Bu, ikinci çeneyi kilitleyerek altıncı yüzeyin tam ve
            hassas işlenmesini mümkün kılar.
          </Typography>
          <Typography component="li">
            Çene hızlı değişim sistemi, saniyeler içinde ve tamamen alet
            kullanmadan çene değiştirilmesini sağlar.
          </Typography>
          <Typography component="li">
            VERO-S arayüzü sayesinde, sıkma pimleri doğrudan taban gövdeye
            vidalanabilir ve KSX-C2 hızlı değişim palet sisteminde
            konumlandırılabilir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSX-C2 Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/zdbYdEh2YFc"
            title="KSX-C2 Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSX_C2_Mengene;
