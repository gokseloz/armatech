import { Box, Typography, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

// Resimler
import manyetikTablalarImage from "../../assets/images/manyetik-tablalar/kare-kutuplu-manyetik-tabla.webp";
import theme from "../../theme";
import Container from "../../components/Container";

const servisler = [
  {
    title: "Manyetik Tabla Arıza ve Bakım",
    image: manyetikTablalarImage,
    link: "/manyetik-tabla-ariza-ve-bakim",
  },
];

// Styled components
const PageContainer = styled(Box)({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ProductRow = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  justifyContent: "center",
  marginBottom: theme.spacing(2),
});

const ProductCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: "300px",
  width: "320px",
  boxShadow: theme.shadows[5],
  borderRadius: "8px",
  padding: theme.spacing(2),
});

// Component
const Urunler = () => {
  return (
    <Container>
      <PageContainer>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          Servisler
        </Typography>
        <ProductRow>
          {servisler.map((servis) => (
            <ProductCard key={servis.title}>
              <CardMedia
                component="img"
                image={servis.image}
                title={servis.title}
                sx={{
                  height: 140,
                  objectFit: "contain",
                }}
              />

              <Typography
                variant="h6"
                textAlign="center"
                fontWeight="bold"
                color="text.primary"
              >
                {servis.title}
              </Typography>
            </ProductCard>
          ))}
        </ProductRow>
      </PageContainer>
    </Container>
  );
};

export default Urunler;
