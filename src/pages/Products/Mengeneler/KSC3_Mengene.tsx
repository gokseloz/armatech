/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import ksc3Image from "../../../assets/images/mengeneler/ksc3.webp";
import { Helmet } from "react-helmet";
import Container from "../../../components/Container";
import theme from "../../../theme";

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

const KSC3_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSC3 Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK KSC3 Mengenesi, kompakt tasarımı ve son derece yüksek sıkma kuvveti sayesinde son derece çok yönlüdür. Yeni teknik yeniliklerle daha da geliştirilmiştir."
        />
        <meta
          name="keywords"
          content="KSC3, SCHUNK, Mengene, Merkez Sıkma Mengene, Endüstriyel Mengene"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSC3 MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Kompakt Tasarım ve Yüksek Sıkma Kuvveti
        </Typography>
        <Box display="flex" justifyContent="center" gap={4} px={8}>
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
            <ProductImage src={ksc3Image} alt="KSC3 Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Nikel kaplı taban gövde korozyon koruması sağlar ve uygulama
                alanını daha da genişletir.
              </Typography>
              <Typography component="li">
                Lazer kazınmış cetvel hızlı ve hassas ön ayar sağlar.
              </Typography>
              <Typography component="li">
                Son derece düz tasarım tezgahın maksimum kullanımı için
                uygundur.
              </Typography>
              <Typography component="li">
                Kir direnci ve düşük bakım gereksinimi sağlar.
              </Typography>
              <Typography component="li">
                Yüksek sıkma kuvvetleri işleme sırasında süreklilik ve
                güvenilirlik sağlar.
              </Typography>
              <Typography component="li">
                Geniş sıkma aralığı yüksek düzeyde esneklik sağlar.
              </Typography>
              <Typography component="li">
                Yan drenaj kanalları soğutma sıvısı ve talaşların atılmasını
                sağlar.
              </Typography>
              <Typography component="li">
                Bilye rulmanlı spindle en yüksek tekrar doğruluğu sağlar.
              </Typography>
              <Typography component="li">
                Geniş uygulama yelpazesi ham ve işlenmiş parçalar için uygundur.
              </Typography>
              <Typography component="li">
                Geniş çene programı yeni sıkma görevlerine uyum sağlar.
              </Typography>
              <Typography component="li">
                Sadece iki vida ile çene değişimi hızlı ve kolay çene değişimi
                sağlar.
              </Typography>
              <Typography component="li">
                Taban gövdenin bükülmesini önler.
              </Typography>
              <Typography component="li">
                Kısa kurulum süreleri için VERO-S modüler sistemi ile çok yönlü
                kombinasyon imkanı sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Seçenekler ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            Yeni KONTEC KSC3 merkezi sıkma mengenesi, yüksek hassasiyet, yüksek
            sıkma kuvveti ve son derece düz tasarım gibi önceki KONTEC KSC
            serisinin etkileyici özelliklerini sunar.
          </Typography>
          <Typography component="li">
            Korozyona karşı koruma sağlayan nikel kaplı taban gövde, uygulama
            alanını önemli ölçüde genişletir.
          </Typography>
          <Typography component="li">
            Bazı boyutlarda tasarım daha da optimize edilmiştir, bu da özellikle
            5-eksen işleme için mengenelerin daha iyi erişilebilirliğini sağlar.
          </Typography>
          <Typography component="li">
            Piyasada benzersiz olan son derece geniş sistem ve üst çene
            yelpazesi, merkezi sıkma mengenesini esnek bir sıkma cihazı haline
            getirir.
          </Typography>
          <Typography component="li">
            Optimize edilmiş talaş drenajı ile kapalı sistem, maksimum işlem
            güvenilirliğini garanti eder.
          </Typography>
          <Typography component="li">
            Mevcut KSC sıkma mengeneleri, yeni nesil ile 1:1 olarak
            değiştirilebilir, üretiminizi daha da verimli hale getirir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSC3 Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/wRl8u3tCNjY"
            title="KSC3 Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSC3_Mengene;
