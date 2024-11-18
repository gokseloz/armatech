/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import Container from "../../../../components/Container";
import sinoRImage from "../../../../assets/images/takim-tutucular/sino-r.webp";
import theme from "../../../../theme";

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

const SINOR = () => {
  return (
    <Container>
      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          SINO-R
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SINO-R, genişleme teknolojisine dayalı olarak geliştirilen, özellikle
          diş frezeleme uygulamalarında üstün kalite ve verimlilik sağlayan
          üstün bir takım tutucudur.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          px={8}
          flexWrap="wrap"
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
            }}
          >
            <ProductImage src={sinoRImage} alt="SINO-R" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Temel gövde, takım tutucu konikten makine montajına kadar tek
                bir çelik bloktan oluşur, bu da stabilite ve rijitlik sağlar.
              </Typography>
              <Typography component="li">
                Artan radyal rijitlik, yüksek radyal kuvvetlerle en zorlu kesme
                görevlerini ele alır.
              </Typography>
              <Typography component="li">
                Optimal sıkma kuvveti, rijitlik ve sönümleme ile takım
                maliyetlerini azaltır.
              </Typography>
              <Typography component="li">
                Mikron titreşimleri sönümleyerek makine milini korur ve takım
                ömrünü uzatarak maliyetleri düşürür.
              </Typography>
              <Typography component="li">
                0.01 mm hassasiyetle kesici takım uzunluk ayarı ve 10 mm
                ayarlama hareketi sağlar.
              </Typography>
              <Typography component="li">
                Hızlı ve güvenli sıkma için SINO-R C anahtarı veya halka
                şeklindeki sıkma anahtarı ile kurulum sürelerini azaltır.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>
    </Container>
  );
};

export default SINOR;
