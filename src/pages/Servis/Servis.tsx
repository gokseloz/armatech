import { Box, Typography, Card } from "@mui/material";
import { styled } from "@mui/system";

// Resimler
import manyetikTablalarImage from "../../assets/images/manyetik-tablalar/kare-kutuplu-manyetik-tabla.webp";
import theme from "../../theme";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

const servisler = [
  {
    title: "Manyetik Tabla ve Kontrol Ünitesi Servis Hizmetleri",
    image: manyetikTablalarImage,
    link: "/servis/manyetik-tabla-kontrol-unitesi",
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
  maxWidth: "300px",
  width: "320px",
  boxShadow: theme.shadows[5],
  borderRadius: "8px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  cursor: "pointer",
  padding: theme.spacing(2),
});

// Component
const Servis = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PageContainer>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          Servisler
        </Typography>
        <ProductRow>
          {servisler.map((servis) => (
            <ProductCard
              key={servis.title}
              onClick={() => navigate(servis.link)}
            >
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

export default Servis;
