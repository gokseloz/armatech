import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import vakumTablaImage from "../../../assets/images/vakum-tabla/vakum-tabla-merged.webp";
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

const VakumTabla = () => {
  return (
    <Container>
      <Helmet>
        <title>Vakum Tabla - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK PLANOS Vakum Tabla düz ve ince iş parçalarının deformasyonsuz sıkılması için güvenilir çözümler sunar."
        />
        <meta
          name="keywords"
          content="Vakum Tabla, SCHUNK, PLANOS, matris plakası, iş parçası sıkma, hassas işleme"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          Vakum Tabla
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Modüler Vakumlu Matris Plakası, Düz İş Parçalarını ve Düz Tabanlı İş
          Parçalarını İçindir.
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
            <ProductImage src={vakumTablaImage} alt="Vakum Tabla" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Yüksek dayanıklı alüminyum taban gövdesi düz ve ince
                bileşenlerin deformasyonsuz sıkılabilmesi için kullanılır.
              </Typography>
              <Typography component="li">
                Standart olarak basınç göstergesi iş parçasındaki vakumun
                sürekli olarak izlenmesine olanak tanır.
              </Typography>
              <Typography component="li">
                Manuel sürgülü vanalı bağlantı seti optimum vakum sağlamak ve
                rahat çalışma sağlar.
              </Typography>
              <Typography component="li">
                İyileştirilmiş vakum kılavuzu yüksek sıkıştırma kuvvetleri
                sayesinde süreç güvenli şekilde tutma sağlar.
              </Typography>
              <Typography component="li">
                İsteğe bağlı patentli sürtünme adaları iş parçasının
                deformasyonsuz olarak %30'a kadar daha fazla tutma kuvvetiyle
                sıkıştırılmasını sağlar.
              </Typography>
              <Typography component="li">
                Yan taraflara takılan mekanik dayamalar iş parçasının basit
                konumlandırılması ve yan kuvvetleri için dayama kullanılabilir.
              </Typography>
              <Typography component="li">
                Suction cups ve elastomer mat ile destek plakası kombinasyonu 5
                taraflı işleme imkanı tarama ve yanal kesim ile delik delme
                işlemleri sağlanır.
              </Typography>
              <Typography component="li">
                Geleneksel sıkıştırma cihazlarına adapte edilebilme makine
                tablasında matris plakasının basit ve hızlı bir şekilde kullanım
                sağlar.
              </Typography>
              <Typography component="li">
                VERO-S modüler sistemi sayesinde çok daha kısa kurulum süreleri
                için çeşitli kombinasyon imkanı sağlar.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h4" gutterBottom>
          Opsiyonlar ve Özel Bilgiler
        </Typography>
        <Stack gap={2}>
          <Typography component="li">
            Kısa kurulum süreleri – Yüksek tutma kuvvetleri – Maksimum
            hassasiyet: SCHUNK PLANOS matris plakaları düz iş parçalarını ve düz
            tabanlı iş parçalarını güvenilir ve hızlı bir şekilde tutar.
          </Typography>
          <Typography component="li">
            Mekanik olarak tutması zor olan bileşenler bile PLANOS ile hassas ve
            deformasyonsuz bir şekilde tutulabilir.
          </Typography>
          <Typography component="li">
            PLANOS matris plakaları isteğe bağlı sürtünme adaları ile
            donatılabilir. Yatay tutma kuvvetleri sürtünme adaları bulunan
            matris plakalarında %30'a kadar daha yüksektir.
          </Typography>
          <Typography component="li">
            PLANOS destek plakası ve emiş kupları ile kombinasyon: 5 taraflı
            işleme ve iş parçası delik delme için optimum çözümdür.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Vakum Tabla Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/1RZYvnKAlB4"
            title="Vakum Tabla Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default VakumTabla;
