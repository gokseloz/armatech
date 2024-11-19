/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import ksc3KImage from "../../../assets/images/mengeneler/ksc3-k.webp";
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

const KSC3_K_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSC3-K Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="KSC3-K Mengene, altıncı eksenin hassas işlenmesi için son derece kompakt bir tek çene hareketli mengenedir."
        />
        <meta
          name="keywords"
          content="KSC3-K Mengene, SCHUNK, tek çene hareketli mengene, kompakt tasarım, yüksek hassasiyet"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSC3-K MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Altıncı eksenin hassas işlenmesi için son derece kompakt bir tek çene
          hareketli mengene.
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
            <ProductImage src={ksc3KImage} alt="KSC3-K Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Nikel kaplamalı taban gövdesi, optimum korozyon koruması sağlar.
              </Typography>
              <Typography component="li">
                Lazerle kazınmış cetveli ile hızlı ve hassas ön ayar sağlar.
              </Typography>
              <Typography component="li">
                Son derece düz tasarımı, makine içerisinde maksimum kullanım
                sağlar.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri, işlem güvenilirliğini garanti eder.
              </Typography>
              <Typography component="li">
                Yanal drenaj yuvaları sayesinde soğutma sıvısı ve talaşlar
                kolayca uzaklaştırılır.
              </Typography>
              <Typography component="li">
                Sadece iki vidayla hızlı ve kolay çene değişimi mümkündür.
              </Typography>
              <Typography component="li">
                VERO-S arayüzü ile kısa kurulum süreleri ve modüler kombinasyon
                olanakları sunar.
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
            Yeni SCHUNK KONTEC KSC3-K tek çene hareketli mengene ile başarılı
            KSC3 serisi merkez sıkıştırma mengeneleri başka bir temel bileşene
            sahiptir.
          </Typography>
          <Typography component="li">
            KSC3-K mengenelerinin taban gövdesi, sabit çene için enine bir oluk
            içerecek şekilde genişletilmiştir. Bu, hassas ikinci operasyon
            işlemlerini mümkün kılar.
          </Typography>
          <Typography component="li">
            Özellikle çoklu uygulamalarda, merkez ve tek çene hareketli
            mengenelerle süreçler önemli ölçüde hızlandırılabilir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSC3-K Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/ONmy6L60_hc"
            title="KSC3-K Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSC3_K_Mengene;
