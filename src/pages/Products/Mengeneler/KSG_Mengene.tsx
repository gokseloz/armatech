/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import ksgImage from "../../../assets/images/mengeneler/ksg.webp";
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

const KSG_Mengene = () => {
  return (
    <Container>
      <Helmet>
        <title>KSG Mengene - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK KONTEC KSG, mekanik kuvvet yükseltme ile donatılmış modüler tasarımlı bir tek çene hareketli bir mengenedir."
        />
        <meta
          name="keywords"
          content="KSG Mengene, SCHUNK, mekanik kuvvet yükseltme, modüler tasarım, endüstriyel mengene"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          KSG MENGENE
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Mekanik Kuvvet Yükseltme ile Donatılmış Modüler Mengene
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
            <ProductImage src={ksgImage} alt="KSG Mengene" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Mil sürücüsü el ile ayarlanabilir, alet gerektirmeyen sıkma
                aralığı ayarı sağlar.
              </Typography>
              <Typography component="li">
                Kuvvet iletim birimi bakım gerektirmez.
              </Typography>
              <Typography component="li">
                Hızlı sıkma kolu, iş parçasını basit, hızlı ve güvenilir şekilde
                sıkma sağlar.
              </Typography>
              <Typography component="li">
                Sürekli sıkma kuvveti ayarı hem işlenmiş hem de ham parçaların
                işlenmesi için uygundur.
              </Typography>
              <Typography component="li">
                Kolay kullanım, hızlı montaj ve temizlik imkanı sağlar.
              </Typography>
              <Typography component="li">
                Entegre VERO-S Arayüzü kurulum sürelerinin minimize edilmesi
                için geniş kombinasyon seçenekleri sunar.
              </Typography>
              <Typography component="li">
                Standart çene arayüzü ve kapsamlı çene çeşitliliği yeni sıkma
                görevlerine optimal adaptasyon sağlar.
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
            KONTEC KSG, tek yönlü çalışan güç artırılmış bir sıkma sistemi olup,
            kaldıraçlı hızlı sıkma ile saniyeler içinde iş parçalarını
            sıkabilir.
          </Typography>
          <Typography component="li">
            Sistem, temel gövdenin bükülmesini önleyerek maksimum işleme
            hassasiyeti sağlar.
          </Typography>
          <Typography component="li">
            VERO-S arayüzü sayesinde, KSG sıkma mengenesi, SCHUNK'ın kapsamlı
            VERO-S modüler sistemi ile geniş kombinasyon seçenekleri sunar.
          </Typography>
          <Typography component="li">
            Bu özellikler ve avantajlar, SCHUNK KONTEC KSG makine mengenesinin
            güçlü ve esnek bir çözüm olduğunu gösterir.
          </Typography>
          <Typography component="li">
            Hızlı ve güvenilir sıkma ile iş parçalarının hassas işlenmesi
            sağlanırken, modüler tasarım sayesinde çeşitli uygulama
            gereksinimlerine kolayca adapte olabilir.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          KSG Mengene Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/epFOkNqfVQE"
            title="KSG Mengene Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default KSG_Mengene;
