import { Typography, Box, Stack } from "@mui/material";
import styled from "@mui/system/styled";
import tombstonesImage from "../../../assets/images/kuleler/tombstones.webp";
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

const TombStones = () => {
  return (
    <Container>
      <Helmet>
        <title>TombStones - Ürün Detayları</title>
        <meta
          name="description"
          content="SCHUNK TombStones, geniş sıkma seçenekleri ve yükleme yoğunluklarıyla makine çalışma sürelerini artırır. İş parçalarınız için optimal erişim ve işleme sağlar."
        />
        <meta
          name="keywords"
          content="TombStones, SCHUNK, kuleler, sıkma çözümleri, makine çalışma süreleri"
        />
      </Helmet>

      <HeroSection>
        <Typography variant="h3" gutterBottom textAlign="center">
          TombStones
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={4}>
          SCHUNK TombStones, geniş sıkma seçenekleri ve yükleme yoğunluklarıyla
          makine çalışma sürelerini önemli ölçüde artırır.
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
            <ProductImage src={tombstonesImage} alt="TombStones" />
          </Box>
          <Box flex={4}>
            <Typography variant="h4" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <Stack gap={2}>
              <Typography component="li">
                Tüm sıkma yüzeyleri ince frezelenmiştir.
              </Typography>
              <Typography component="li">
                Optimal boş gövde tasarımı.
              </Typography>
              <Typography component="li">Titreşim emici tasarım.</Typography>
              <Typography component="li">
                4 kule şekli mevcuttur: sekizgen, küp, üçgen ve çift konsol.
              </Typography>
              <Typography component="li">
                Tüm tombstoneler KONTEC sıkma sistemleri ile birleştirilebilir.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </HeroSection>

      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          TombStones Performansını Keşfedin
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
            src="https://www.youtube.com/embed/Qu2OUPhD0PI"
            title="TombStones Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default TombStones;
