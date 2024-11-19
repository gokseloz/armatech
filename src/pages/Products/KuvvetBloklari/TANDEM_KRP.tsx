/* eslint-disable react-refresh/only-export-components */
import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import tandemKRPImage from "../../../assets/images/kuvvet-bloklari/tandem-krp.webp";
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

const TANDEM_KRP = () => {
  return (
    <Container>
      <Helmet>
        <title>TANDEM KRP - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK TANDEM KRP, palet otomasyonu ile esnek, hassas ve gelişmiş sıkma yöntemleri sunar. Ağır ve karmaşık iş parçaları için idealdir."
        />
        <meta
          name="keywords"
          content="TANDEM KRP, SCHUNK, kuvvet blokları, palet otomasyonu, sıkma yöntemleri"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TANDEM KRP
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Palet Otomasyonu: Esnek, hassas ve gelişmiş sıkma yöntemleri sunar.
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
            <ProductImage src={tandemKRPImage} alt="TANDEM KRP" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Daha karmaşık bileşenlerin üretiminde daha fazla esneklik
                sağlar.
              </Typography>
              <Typography component="li">
                Makine dışında paletler üzerinde hazırlık yapılmasını sağlar.
              </Typography>
              <Typography component="li">
                Yüksek hassasiyet gereksinimlerini karşılamak için idealdir.
              </Typography>
              <Typography component="li">
                Ağır ve karmaşık iş parçalarının sıkılması için uygundur.
              </Typography>
              <Typography component="li">
                VERO-S modüler hızlı değişim palet sistemi ile uyumludur.
              </Typography>
              <Typography component="li">
                KONTEC KSC-D manuel çift sıkma mengeneleri ile esneklik sağlar.
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
            Palet otomasyonu, küçük partilerde bile farklı sıkma konseptlerini
            uygulamaya olanak tanır.
          </Typography>
          <Typography component="li">
            VERO-S modüler sistemi, 1.000'den fazla iş parçası sıkma çeşidi
            sunar.
          </Typography>
          <Typography component="li">
            KONTEC KSC-D mengeneler, sabit işleme ihtiyaçlarını destekler.
          </Typography>
          <Typography component="li">
            Palet otomasyon konsepti, ağır ve karmaşık iş parçalarının sıkılması
            için doğru bir tercihtir.
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default TANDEM_KRP;
