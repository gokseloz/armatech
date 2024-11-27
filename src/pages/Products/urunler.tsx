import { Box, Typography, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// Resimler
import takimTutucularImage from "../../assets/images/takim-tutucular/tendo-takim-tutucular.webp";
import manyetikTablalarImage from "../../assets/images/manyetik-tablalar/kare-kutuplu-manyetik-tabla.webp";
import kuvvetBloklariImage from "../../assets/images/kuvvet-bloklari/tandem-krp.webp";
import mengenelerImage from "../../assets/images/mengeneler/ksc-d.webp";
import kulelerImage from "../../assets/images/kuleler/tombstones.webp";
import vakumTablaImage from "../../assets/images/vakum-tabla/vakum-tabla-merged.webp";
import capakAlmaImage from "../../assets/images/capak-alma/capak-alma-merged.webp";
import otomatikImage from "../../assets/images/otomatik/otomatik.jpg";
import tornaAynalariImage from "../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-2b.webp";
import veroSPaletImage from "../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/vero-s-nsl3-150-200-400/nsl3150200400.webp";
import theme from "../../theme";
import Container from "../../components/Container";

const products = [
  {
    title: "Takım Tutucular",
    image: takimTutucularImage,
    link: "/takim-tutucular",
  },
  {
    title: "Manyetik Tablalar",
    image: manyetikTablalarImage,
    link: "/manyetik-tablalar",
  },
  { title: "Mengeneler", image: mengenelerImage, link: "/mengeneler" },
  {
    title: "Torna Aynaları",
    image: tornaAynalariImage,
    link: "/torna-aynalari",
  },
  {
    title: "Vero-S Palet Değiştirme Sistemi",
    image: veroSPaletImage,
    link: "/vero-s-hizli-palet-degistirme-sistemleri",
  },
  {
    title: "Kuvvet Blokları",
    image: kuvvetBloklariImage,
    link: "/kuvvet-bloklari",
  },
  {
    title: "Otomatik Talaşlı İmalat",
    image: otomatikImage,
    link: "/otomatik-talasli-imalat",
  },
  { title: "Çapak Alma", image: capakAlmaImage, link: "/capak-alma" },
  {
    title: "Vakum Tabla",
    image: vakumTablaImage,
    link: "/vakum-tabla",
  },
  { title: "Kuleler", image: kulelerImage, link: "/kuleler" },
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
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  cursor: "pointer",
  padding: theme.spacing(2),
});

// Component
const Urunler = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PageContainer>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          Ürünler
        </Typography>
        <ProductRow>
          {products.map((product) => (
            <ProductCard
              key={product.title}
              onClick={() => navigate(product.link)}
            >
              <CardMedia
                component="img"
                image={product.image}
                title={product.title}
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
                {product.title}
              </Typography>
            </ProductCard>
          ))}
        </ProductRow>
      </PageContainer>
    </Container>
  );
};

export default Urunler;
