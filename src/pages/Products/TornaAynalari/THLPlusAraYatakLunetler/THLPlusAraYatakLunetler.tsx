import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import thlPlusImage from "../../../../assets/images/torna-aynalari/thl-plus-ara-yatak-lunetler/thl-plus.webp";
import { Helmet } from "react-helmet";
import ImageAndFeaturesContainer from "../../../../components/ProductDetail/ImageAndFeaturesContainer";

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

const THLPlusAraYatakLunetler = () => {
  return (
    <Container>
      <Helmet>
        <title>THL Plus Ara Yatak Lunetler - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK ZENTRICO THL plus, yüksek sıkma kuvvetleri ve mükemmel doğruluklar sağlayan hidrolik otomatik merkezleme destek milidir."
        />
        <meta
          name="keywords"
          content="THL Plus Ara Yatak Lunetler, SCHUNK, destek mili, hidrolik merkezleme, torna ekipmanları"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          ARA YATAK LÜNETLER
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK ZENTRICO THL plus, yüksek sıkma kuvvetleri ve mükemmel, sürekli
          yüksek merkezleme ve tekrarlama doğrulukları ile hidrolik otomatik
          merkezleme destek milidir.
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
            }}
          >
            <ProductImage
              src={thlPlusImage}
              alt="THL Plus Ara Yatak Lunetler"
            />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Hassas kinematik sistemi, yüksek merkezleme ve tekrarlama
                doğruluğu sağlar.
              </Typography>
              <Typography component="li">
                Yüksek süreç güvenilirliği ve uzatılmış bakım aralıklarını
                garanti eder.
              </Typography>
              <Typography component="li">
                Merkezi yağlama sistemi optimize edilmiştir ve uzun ömür sağlar.
              </Typography>
              <Typography component="li">
                Silindirin arka ve yan tarafında hidrolik bağlantılar, neredeyse
                her makineye kolayca bağlanabilir.
              </Typography>
              <Typography component="li">
                Entegre güvenlik valfi ve son pozisyon kontrolü maksimum çalışma
                güvenliği sağlar.
              </Typography>
              <Typography component="li">
                Tüm fonksiyonel parçaların sertleştirilmiş ve zımparalanmış
                yüzeyleri, uzun bir hizmet ömrü sağlar.
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
            Merkezi yağlama, entegre rulolar ve geliştirilmiş koruması
            sayesinde, her bir rulo için maksimum sıkma kuvvetleri ve mükemmel
            merkezleme doğrulukları sağlar.
          </Typography>
          <Typography component="li">
            ZENTRICO THL plus destek millerinin hidrolik varyantının yanı sıra
            pnömatik bir versiyonu da mevcuttur.
          </Typography>
          <Typography component="li">
            Bu özellikler, SCHUNK ZENTRICO THL plus destek milini, yüksek
            hassasiyetli işleme uygulamaları için mükemmel bir seçim haline
            getirir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          THL Plus Ara Yatak Lunetler Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/dEWjxbTe4hk"
            title="THL Plus Ara Yatak Lunetler Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default THLPlusAraYatakLunetler;
