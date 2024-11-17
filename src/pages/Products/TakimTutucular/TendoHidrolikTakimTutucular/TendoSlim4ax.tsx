import { Box, Stack, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import tendoSlim4ax from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-slim-4ax.webp";
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

const TendoSlim4ax = () => {
  return (
    <Container>
      <Helmet>
        <title>TENDO Slim 4ax - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK TENDO Slim 4ax, eksenel işleme ve radial ince işleme için mükemmel bir hidrolik takım tutucudur. Tüm gereksinimleri karşılar ve uzun takım ömrü sağlar."
        />
        <meta
          name="keywords"
          content="SCHUNK TENDO Slim 4ax, hidrolik takım tutucu, eksenel işleme, radial ince işleme, soğutma kanalları, HSC işleme"
        />
      </Helmet>

      {/* Header Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TENDO Slim 4ax
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          TENDO Slim 4ax, eksenel işleme ve radial ince işleme için mükemmel bir
          hidrolik takım tutucudur. Uzun takım ömrü ve yüksek esneklik sağlar.
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
            <ProductImage src={tendoSlim4ax} alt="SCHUNK TENDO Slim 4ax" />
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
                Mevcut işlemlerde yeniden programlama yapmadan kullanılabilir.
              </Typography>
              <Typography component="li">
                Ø3 ile 18 mm arasında farklı çaplar için içten soğutma sıvısı
                geçebilen veya geçirmez pensler kullanılabilir.
              </Typography>
              <Typography component="li">
                Soğutma kanalları aracılığıyla çevresel soğutma sağlar. Soğutucu
                doğrudan takımın kesme kenarına beslenir, talaşlar güvenli bir
                şekilde uzaklaştırılır.
              </Typography>
              <Typography component="li">
                25,000 RPM'de G2.5 denge derecesi ile yüksek hızlar ve HSC
                işleme için uygundur.
              </Typography>
              <Typography component="li">
                Ek sıkma cihazlarına yatırım yapma ve enerji maliyetleri olmadan
                zaman ve maliyet tasarrufu sağlar.
              </Typography>
              <Typography component="li">
                0,01 mm hassasiyetinde kesici takım uzunluk boy ayarı yapabilir,
                toplamda 10 mm ayar aralığı bulunur.
              </Typography>
              <Typography component="li">
                5 eksen CNC işlem merkezlerinde, kalıp imalatında delme, delik
                genişletme, diş açma ve konik açma işlemleri için idealdir.
              </Typography>
              <Typography component="li">
                Makine milini koruma, iş parçası yüzeylerinin iyileştirilmesi ve
                takım ömrünün uzatılmasıyla maliyetleri azaltır.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      {/* Video Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO Slim 4ax'ın Performansını Keşfedin
        </Typography>
        <VideoContainer>
          <YouTubeIframe
            src="https://www.youtube.com/embed/4u77y69uB8k"
            title="SCHUNK TENDO Slim 4ax Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Container>
  );
};

export default TendoSlim4ax;
