/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import kscDImage from "../../../assets/images/mengeneler/ksc-d.webp";
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

const KSC_D_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSC-D Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="KSC-D Mengene, birkaç iş parçasının kolay ve güvenli yüklenmesi için üçüncü el işlevi sunar."
        />
        <meta
          name="keywords"
          content="KSC-D Mengene, SCHUNK, manuel mengene, çift mengene"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSC-D MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Birkaç iş parçasının kolay ve güvenli yüklenmesi için üçüncü el
          işlevi.
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
            <ProductImage src={kscDImage} alt="KSC-D Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Tezgahta maksimum kullanımı için uygundur.
              </Typography>
              <Typography component="li">
                Üçüncü el işlevi, ikinci iş parçasını sıkarken ilk iş parçasının
                güvenilir ön yüklenmesini sağlar.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri, işleme sırasında süreklilik ve
                güvenilirlik sağlar.
              </Typography>
              <Typography component="li">
                Geniş uygulama yelpazesi, ham ve işlenmiş parçalar için
                uygundur.
              </Typography>
              <Typography component="li">
                Geniş çene programı, yeni sıkma görevlerine optimal uyum sağlar.
              </Typography>
              <Typography component="li">
                Çene gerilimi, sıkma taban gövdesinin bükülmesini önler.
              </Typography>
              <Typography component="li">
                VERO-S modüler sistem sayesinde çeşitli kombinasyon olanakları,
                kurulum sürelerini kısaltır.
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
            Üçüncü el işlevi sayesinde SCHUNK'un manuel KONTEC KSC-D çift
            mengeneleri, iş parçası depolama özelliğine sahip otomatik
            makinelerde sürekli kullanım için özel olarak tasarlanmıştır.
          </Typography>
          <Typography component="li">
            Nikel kaplamalı taban gövdesi sayesinde bu mengeneler, korozyona
            karşı mükemmel bir şekilde korunur.
          </Typography>
          <Typography component="li">
            Pratik üçüncü el işlevi ile iki iş parçası tutulabilir, sabitlenir
            ve ardışık olarak güvenli bir şekilde sıkılabilir.
          </Typography>
          <Typography component="li">
            Sıkma mengenesi, son derece düz tasarımlı ve hafif bir yapıya
            sahiptir. VERO-S arayüzü ile sıkma pimleri, adaptör plakası
            gerektirmeden doğrudan taban gövdesine monte edilebilir.
          </Typography>
          <Typography component="li">
            Bu özellikler, SCHUNK'un KSC-D mengenelerini hızlı, hassas ve
            güvenilir bir çözüm haline getirir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSC-D Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/qg1q1lTKOU4"
            title="KSC-D Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSC_D_Mengene;
