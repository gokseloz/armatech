/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import veroSNse3Image from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/genel-frezeleme/vero-s-nse3-nse-plus.png";
import { Helmet } from "react-helmet";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
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

const VERO_S_NSE3_ve_NSEPlus = () => {
  return (
    <Container>
      <Helmet>
        <title>VERO-S NSE3 ve NSE Plus - Ürün Detayları</title>
        <meta
          name="description"
          content="VERO-S NSE3 ve NSE Plus hızlı değişim palet modülleri, genel frezeleme uygulamaları ve ağır kesme işlemleri için tasarlanmış, yüksek hassasiyetli bir modüler hızlı değişim sistemidir."
        />
        <meta
          name="keywords"
          content="VERO-S NSE3, NSE Plus, SCHUNK, hızlı değişim palet sistemi, genel frezeleme, ağır kesme"
        />
      </Helmet>
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          GENEL FREZELEME VE AĞIR KESME: VERO-S NSE3 VE NSE PLUS
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK'un VERO-S NSE3 ve NSE plus hızlı değişim palet modülleri,
          yüksek çekme kuvvetleri sayesinde yüksek işleme parametrelerine sahip
          uygulamalar için ideal modüler hızlı değişim palet sistemleridir.
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
            <ProductImage src={veroSNse3Image} alt="VERO-S NSE3 ve NSE Plus" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Kurulum sürelerinin %90'a varan ölçüde kısaltılması, makine
                kapasitesinin daha verimli kullanılmasını sağlar.
              </Typography>
              <Typography component="li">
                0.005 mm'den daha az tekrarlama hassasiyeti ile yüksek
                hassasiyetli işleme sağlar.
              </Typography>
              <Typography component="li">
                40 kN'ye kadar çekme kuvvetleri ile sağlam ve güvenilir sıkma
                sağlar.
              </Typography>
              <Typography component="li">
                Çeşitli iş parçası sıkma seçenekleri sunarak esneklik sağlar.
              </Typography>
              <Typography component="li">
                Yay kuvveti ile enerji nötr sıkma, güvenli ve güvenilir bağlantı
                sağlar.
              </Typography>
              <Typography component="li">
                Genel frezeleme uygulamaları ve ağır kesme işlemleri için
                idealdir.
              </Typography>
              <Typography component="li">
                Yüksek çekme kuvvetleri ve tekrarlama hassasiyeti ile kurulum
                sürelerini azaltarak, işleme süreçlerini optimize eder ve
                verimliliği artırır.
              </Typography>
            </Stack>
          </Box>
        </ImageAndFeaturesContainer>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          VERO-S NSE3 ve NSE Plus'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/BGTvcPfhTes"
            title="VERO-S NSE3 ve NSE Plus Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default VERO_S_NSE3_ve_NSEPlus;
