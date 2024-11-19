import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import kareKutupluManyetikTablaImage from "../../../assets/images/manyetik-tablalar/kare-kutuplu-manyetik-tabla.webp";
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

const KareKutupluManyetikTabla = () => {
  return (
    <Container>
      <Helmet>
        <title>Kare Kutuplu Manyetik Tabla - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK Kare Kutuplu Manyetik Tabla, frezeleme uygulamaları için yüksek tutma kuvveti sağlayan enerji verimli elektro-permanent sistemdir."
        />
        <meta
          name="keywords"
          content="Kare Kutuplu Manyetik Tabla, manyetik tabla, SCHUNK, frezeleme, manyetik tutma"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Kare Kutuplu Manyetik Tabla
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Frezeleme uygulamaları için güçlü kesme işlemleri sunan
          elektro-permanent manyetik tabla sistemleri.
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
            <ProductImage
              src={kareKutupluManyetikTablaImage}
              alt="Kare Kutuplu Manyetik Tabla"
            />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Tek bağlamada 5 yüzeyden iş parçası işleme sağlar ve yüksek
                doğruluk sunar.
              </Typography>
              <Typography component="li">
                İş parçasının tamamında sabit manyetik kavrama kuvveti düşük
                deformasyon ve titreşim sağlar.
              </Typography>
              <Typography component="li">
                Düşük titreşimli tutma, iyileştirilmiş yüzeyler ve artan
                hassasiyet sağlar.
              </Typography>
              <Typography component="li">
                Kavrama kuvvetinden dolayı iş parçasında deformasyon veya iç
                kuvvetler oluşmaz.
              </Typography>
              <Typography component="li">
                Yüksek rijitlik ve kompakt tasarımla güvenli sıkma sağlar.
              </Typography>
              <Typography component="li">
                Gelişmiş elektro-permanent teknolojisi, enerji verimliliği ve
                güvenilir iş parçası tutma sağlar.
              </Typography>
              <Typography component="li">
                Modüler tasarımı sayesinde uygulamaya bağlı olarak
                genişletilebilir.
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
            SCHUNK Kare Kutuplu Manyetik Tabla, frezeleme uygulamaları için
            optimize edilmiş tutma çözümleri sunar.
          </Typography>
          <Typography component="li">
            Makine kontrol sistemiyle uyumlu kontrol ünitesi sayesinde otomatik
            uygulamalarda da kullanılabilir.
          </Typography>
          <Typography component="li">
            Üretkenliği artırmak için en kısa kurulum sürelerini sağlar.
          </Typography>
          <Typography component="li">
            Manyetik tablalar, modüler tasarımıyla uygulama gereksinimlerine
            uygun şekilde birleştirilebilir veya genişletilebilir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Kare Kutuplu Manyetik Tabla Performansını Keşfedin
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
            src="https://www.youtube.com/embed/jjhxZNalLQw"
            title="Kare Kutuplu Manyetik Tabla Video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Box>
    </Container>
  );
};

export default KareKutupluManyetikTabla;
