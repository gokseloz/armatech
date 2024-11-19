/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import ksm2Image from "../../../assets/images/mengeneler/ksm2.webp";
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

const KSM2_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSM2 Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="KSM2 Mengene, çoklu sıkma sistemi ile yenilikçi çene hızlı değiştirme sistemi sayesinde kurulum sürelerini önemli ölçüde azaltır."
        />
        <meta
          name="keywords"
          content="KSM2 Mengene, SCHUNK, çoklu sıkma sistemi, hızlı çene değiştirme"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSM2 MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Çoklu sıkma mengenesi KSM2, birçok küçük veya büyük iş parçası için
          çene hızlı değiştirme sistemidir.
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
            <ProductImage src={ksm2Image} alt="KSM2 Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Sertleştirilmiş ve zımparalanmış dişli maksimum hassasiyet ve
                form stabilitesi sağlar.
              </Typography>
              <Typography component="li">
                Lazerle işaretlenmiş cetvel hızlı ve hassas ön ayar sağlar.
              </Typography>
              <Typography component="li">
                Birkaç sıkma rayının kombinasyonu yüksek düzeyde esneklik
                sağlar.
              </Typography>
              <Typography component="li">
                Son derece yüksek yükleme yoğunluğu ekonomik işleme sağlar.
              </Typography>
              <Typography component="li">
                Çene hızlı değiştirme sistemi daha fazla çeşitlilik ve daha kısa
                kurulum süreleri sağlar.
              </Typography>
              <Typography component="li">
                Geniş çene programı, yeni sıkma görevlerine optimal uyumludur.
              </Typography>
              <Typography component="li">
                VERO-S modüler sistemi sayesinde çeşitli kombinasyon olanakları,
                kurulum sürelerini daha da kısaltır.
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
            KSM2 çoklu sıkma sistemi, yenilikçi çene hızlı değiştirme sistemi
            sayesinde kurulum sürelerini önemli ölçüde azaltır.
          </Typography>
          <Typography component="li">
            Çeneler sadece raydan yukarı doğru hareket ettirilerek
            değiştirilebilir, bu da parçaların yan taraflardan tek tek
            çıkarılmasına gerek kalmamasını sağlar.
          </Typography>
          <Typography component="li">
            Daha ince çeneler sayesinde, parçalar KSM sıkma rayına kıyasla daha
            kompakt hale getirilmiştir.
          </Typography>
          <Typography component="li">
            KSM2 rayı, adaptör plakaları ile birleştirilerek çeşitli farklı açma
            seçenekleri mümkün hale gelir.
          </Typography>
          <Typography component="li">
            VERO-S arayüzü sayesinde, KSM2 sıkma rayı SCHUNK'un geniş VERO-S
            modüler sistemi ile çeşitli kombinasyon olanakları sunar.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSM2 Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/q_Qd9eHinNM"
            title="KSM2 Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSM2_Mengene;
