import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import taramaMalafaImage from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/tarama-malafa.png";
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import { Helmet } from "react-helmet";

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

const TaramaMalafaTutucular = () => {
  return (
    <Container>
      <Helmet>
        <title>Tarama Malafa Tutucular - Ürün Detayları</title>
        <meta
          name="description"
          content="Yüzey freze mandrenleri, çapraz yuvaya sahip freze takımları için hızlı ve güvenli sıkma, yüksek performanslı frezeleme ve iç soğutma sağlar."
        />
        <meta
          name="keywords"
          content="Tarama Malafa Tutucular, yüzey freze mandrenleri, DIN 1880, DIN 2079, çapraz yuva, frezeleme, iç soğutma"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Tarama Malafa Tutucular
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Yüzey freze mandrenleri, DIN 1880 standardına uygun çapraz yuvaya
          sahip uç yüz frezeleri ve yüzey frezelerinin sıkılması için idealdir.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          px={8}
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
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
            <ProductImage
              src={taramaMalafaImage}
              alt="Tarama Malafa Tutucular"
            />
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
                Genişletilmiş temas yüzeyi ile çapraz yuvaya sahip freze
                takımları hızlı ve güvenli sıkılmasını sağlar.
              </Typography>
              <Typography component="li">
                DIN 1880 ve DIN 2079 standartlarına uygun, yüksek performanslı
                frezeleme sağlar.
              </Typography>
              <Typography component="li">
                İç soğutmalı uç yüz frezeleri ve yüzey frezeleri için ön yüz
                soğutma sağlar, kesici kenarların optimum şekilde soğutulmasını
                garanti eder.
              </Typography>
              <Typography component="li">
                Aynı anda konik ve düz çalışma yüzeyi sunar, araç flanşı ile
                makine milinin ön yüzü arasındaki arayüz boşluğunu kapatır.
              </Typography>
              <Typography component="li">
                Farklı işleme makineleri ile uyumlu olup, geniş bir uygulama
                yelpazesinde kullanılabilir.
              </Typography>
              <Typography component="li">
                Sıkma vidası ve tahrik anahtarları teslimat kapsamına dahildir,
                kullanımı kolaylaştırır ve hızlı kurulum sağlar.
              </Typography>
              <Typography component="li">
                Sağlam yapısı ve DIN standartlarına uyumluluğu ile verimliliği
                artırır ve mükemmel yüzey kalitesi sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>
    </Container>
  );
};

export default TaramaMalafaTutucular;
